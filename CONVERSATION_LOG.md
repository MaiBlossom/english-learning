# Lịch sử phát triển EnglishMe — Log cuộc trò chuyện với Claude Code

> Ghi lại quá trình xây dựng và hoàn thiện ứng dụng EnglishMe thông qua các phiên làm việc với Claude Code (claude-sonnet-4-6).

---

## Phiên 1 — Sửa lỗi Gemini API

### Vấn đề
- Nhập đúng Gemini API key nhưng vẫn hiện: `❌ Không có model Gemini nào khả dụng trong vùng của bạn`
- Lỗi: `Invalid JSON payload received. Unknown name 'systemInstruction': Cannot find field`
- Quota exceeded (429) không fallback sang model tiếp theo

### Nguyên nhân & Cách sửa

#### 1. `systemInstruction` không được hỗ trợ trên v1 endpoint
**Nguyên nhân:** API endpoint `/v1/` không hỗ trợ trường `systemInstruction`, chỉ có `/v1beta/` mới hỗ trợ.  
**Sửa:** Xóa `systemInstruction` khỏi request body, nhúng system prompt trực tiếp vào user message:
```js
contents: [{ role: 'user', parts: [{ text: `Bạn là Cu Shin...Câu hỏi: ${text}` }] }]
```

#### 2. `callGeminiUrl()` xử lý sai HTTP status codes
**Nguyên nhân:** Hàm trả về `null` (thử model tiếp) cho MỌI lỗi 400, kể cả "API key not valid" — nên key sai vẫn thử hết 4 model rồi báo "không có model khả dụng" thay vì báo key sai.  
**Sửa:** Phân biệt rõ các trường hợp:
```js
if (res.status === 404 || res.status === 429) return null; // model không tồn tại / quota hết → thử tiếp
if (!res.ok) {
  const errMsg = errData?.error?.message || `HTTP ${res.status}`;
  if (res.status === 400 && (
    errMsg.toLowerCase().includes('not found') ||
    errMsg.toLowerCase().includes('not supported') ||
    errMsg.toLowerCase().includes('deprecated') ||
    errMsg.toLowerCase().includes('quota')
  )) return null; // model không được hỗ trợ → thử tiếp
  throw new Error(errMsg); // lỗi thật (key sai, permission...) → dừng, báo lỗi
}
```

#### 3. Vòng lặp `saveGeminiKey` nuốt lỗi auth
**Nguyên nhân:** Vòng lặp thử 4 model luôn `continue` khi gặp exception, kể cả khi lỗi là "API key not valid".  
**Sửa:** Throw ngay khi gặp lỗi auth/permission:
```js
} catch (e) {
  const m = e.message || '';
  if (m.toLowerCase().includes('api key') || m.toLowerCase().includes('invalid') || m.toLowerCase().includes('permission')) {
    throw e; // lỗi key → dừng ngay
  }
  // quota / model lỗi khác → thử model tiếp theo
}
```

---

## Phiên 2 — Chuyển đổi sang Full Stack

### Yêu cầu
Thầy giáo yêu cầu ứng dụng phải là **full stack** với backend và database thực sự.

### Quyết định công nghệ
- **Backend:** Node.js + Express
- **Database:** `@seald-io/nedb` (NeDB thuần JavaScript, không cần compile C++)
  - Lý do chọn NeDB thay vì better-sqlite3: better-sqlite3 yêu cầu Visual Studio Build Tools (C++ compiler), NeDB không cần
- **Auth:** JWT (`jsonwebtoken`) + bcrypt (`bcryptjs`)

### Các file được tạo mới

#### `package.json`
```json
{
  "name": "englishme",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "@seald-io/nedb": "^4.0.4",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2"
  }
}
```

#### `server.js` — Entry point
```js
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname)); // serve HTML/CSS/JS từ cùng thư mục
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/progress', require('./routes/progress'));
app.listen(3000);
```

#### `db.js` — NeDB collections
- 3 collections: `users`, `pending`, `progress` (lưu file trong `data/`)
- Index unique trên `username`
- Tự tạo tài khoản `admin/admin@2024` khi khởi động lần đầu

#### `middleware/auth.js`
- `requireAuth` — xác thực JWT, gắn `req.user`
- `requireAdmin` — requireAuth + kiểm tra role

#### `routes/auth.js`
| Endpoint | Chức năng |
|----------|-----------|
| `POST /api/auth/login` | → `{ token, user }` |
| `POST /api/auth/register` | → `{ message }` |
| `POST /api/auth/activate` | → `{ token, user }` |
| `GET /api/auth/me` | → `{ username, role }` |

#### `routes/admin.js`
| Endpoint | Chức năng |
|----------|-----------|
| `GET /api/admin/pending` | Danh sách chờ duyệt |
| `POST /api/admin/approve/:username` | Duyệt + tạo mã 4 số |
| `POST /api/admin/reject/:username` | Từ chối / xóa |
| `GET /api/admin/users` | Danh sách thành viên |
| `DELETE /api/admin/users/:username` | Xóa thành viên |

#### `routes/progress.js`
| Endpoint | Chức năng |
|----------|-----------|
| `GET /api/progress` | Tải tiến độ học |
| `POST /api/progress` | Lưu tiến độ học (upsert JSON blob) |

### Thay đổi trong `app.js`

#### Thêm `apiFetch()` — tự gắn JWT vào mọi request
```js
function apiFetch(path, opts = {}) {
  const token = localStorage.getItem('em_token') || '';
  return fetch(path, {
    method: opts.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': 'Bearer ' + token } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  }).then(res => res.json().then(data => {
    if (!res.ok) throw new Error(data.error || 'Lỗi server');
    return data;
  }));
}
```

#### Thêm `syncProgressFromAPI()` — tải tiến độ từ server sau login
#### Cập nhật `saveState()` — vừa lưu localStorage vừa sync lên server (fire and forget)
#### Chuyển toàn bộ auth functions sang gọi API thay vì thao tác localStorage trực tiếp

---

## Phiên 3 — Đưa code lên GitHub

### Các lỗi gặp phải & cách giải quyết

#### 1. `npm install` lỗi với better-sqlite3
**Lỗi:** Cần Visual Studio Build Tools để compile C++ bindings  
**Giải pháp:** Chuyển sang `@seald-io/nedb` (pure JavaScript)

#### 2. Git "Author identity unknown"
**Lỗi:** `Author identity unknown` khi commit  
**Giải pháp:** Cấu hình trước khi commit:
```bash
git config --global user.email "maicareer2023@gmail.com"
git config --global user.name "MaiBlossom"
```

#### 3. `src refspec main does not match any`
**Lỗi:** Khi chạy `git push -u origin main`  
**Nguyên nhân:** Commit chưa được tạo (do lỗi identity ở trên)  
**Giải pháp:** Tạo commit lại sau khi đã set identity

#### 4. Git push chờ nhập token
**Lỗi:** Push chạy ở background không nhận được input  
**Giải pháp:** Nhúng Personal Access Token trực tiếp vào remote URL:
```bash
git remote set-url origin https://TOKEN@github.com/MaiBlossom/english-learning.git
git push -u origin main
```

### Kết quả
- Repository: https://github.com/MaiBlossom/english-learning
- Các file đã push: toàn bộ source code, README.md, CLAUDE.md, .gitignore
- Không push: `node_modules/`, `data/` (database files), `.env`

---

## Tóm tắt kiến trúc cuối cùng

```
english-learning/
├── server.js           # Express server (entry point), chạy port 3000
├── db.js               # NeDB: users, pending, progress collections
├── middleware/
│   └── auth.js         # JWT middleware
├── routes/
│   ├── auth.js         # Đăng nhập / đăng ký / kích hoạt
│   ├── admin.js        # Quản lý thành viên
│   └── progress.js     # Lưu/tải tiến độ học
├── index.html          # SPA duy nhất
├── app.js              # Frontend (~1800 dòng)
├── style.css
├── package.json
├── README.md
├── CLAUDE.md
└── .gitignore
```

### Luồng dữ liệu chính
- **JWT** lưu trong `localStorage['em_token']`, hết hạn 7 ngày
- **Progress** lưu localStorage và sync lên server qua `saveState()` (fire and forget)
- **Gemini API key** chỉ lưu localStorage, KHÔNG gửi lên server
- **`syncProgressFromAPI()`** tải tiến độ từ server về localStorage sau mỗi lần login

---

*Log được tạo ngày 2026-05-08 bởi Claude Code (claude-sonnet-4-6)*
