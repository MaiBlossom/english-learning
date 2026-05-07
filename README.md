# 🇬🇧 EnglishMe — Ứng dụng học tiếng Anh TOEIC

Ứng dụng web học tiếng Anh cho nhóm học TOEIC 770+, xây dựng theo mô hình **Full Stack** với Node.js, Express và NeDB.

## ✨ Tính năng

- 📚 **Từ vựng** — 54 từ TOEIC theo cấp độ, flashcard + nghe phát âm
- ✏️ **Ngữ pháp** — 30 câu trắc nghiệm TOEIC có giải thích chi tiết
- 🎧 **Luyện nghe** — 30 câu kinh doanh, nghe và gõ lại
- 🌐 **Tập dịch** — 66 tình huống Việt–Anh, tự chấm điểm
- 📖 **Lịch sử học** — Xem lại lỗi sai, tiến độ từng môn
- 🤖 **AI Chat (Cu Shin)** — Tích hợp Gemini AI, hỏi đáp tiếng Anh
- 🔥 **Streak** — Theo dõi số ngày học liên tiếp
- ⚙️ **Admin panel** — Quản lý thành viên, duyệt đăng ký

## 🛠️ Công nghệ

| Tầng | Công nghệ |
|------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database | NeDB (embedded, file-based) |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| AI | Google Gemini API (client-side) |

## 🚀 Cài đặt & Chạy

### Yêu cầu
- Node.js >= 18

### Các bước

```bash
# 1. Clone repo
git clone https://github.com/MaiBlossom/english-learning.git
cd english-learning

# 2. Cài dependencies
npm install

# 3. Chạy server
node server.js
```

Mở trình duyệt tại **http://localhost:3000**

### Tài khoản admin mặc định
- Username: `admin`
- Password: `admin@2024`

## 📁 Cấu trúc project

```
english-learning/
├── server.js           # Express server (entry point)
├── db.js               # Kết nối database NeDB
├── middleware/
│   └── auth.js         # JWT authentication middleware
├── routes/
│   ├── auth.js         # API đăng nhập / đăng ký
│   ├── admin.js        # API quản lý thành viên
│   └── progress.js     # API lưu/tải tiến độ học
├── index.html          # Giao diện chính (SPA)
├── style.css           # CSS styles
├── app.js              # Frontend JavaScript
├── package.json
└── .gitignore
```

## 🔐 Hệ thống tài khoản

1. Người dùng gửi yêu cầu đăng ký
2. Admin xét duyệt và tạo **mã kích hoạt 4 số**
3. Người dùng nhập mã để kích hoạt tài khoản
4. Đăng nhập bằng JWT token (7 ngày)

## 🤖 Tích hợp Gemini AI

Người dùng có thể kết nối **Gemini API Key** cá nhân để nhận câu trả lời AI thông minh. Key được lưu trên trình duyệt của người dùng, không gửi lên server.

Lấy key miễn phí tại: [aistudio.google.com](https://aistudio.google.com)
