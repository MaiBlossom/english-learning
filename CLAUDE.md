# EnglishMe — CLAUDE.md

## Tổng quan project
Ứng dụng web học tiếng Anh TOEIC cho nhóm 5 người, full stack với Node.js + Express + NeDB.

## Cách chạy
```bash
npm install
node server.js
# Mở http://localhost:3000
```

## Cấu trúc
- `server.js` — Entry point, Express server, serve static files
- `db.js` — Khởi tạo 3 NeDB collections: users, pending, progress
- `middleware/auth.js` — JWT middleware (requireAuth, requireAdmin)
- `routes/auth.js` — POST /api/auth/login, /register, /activate · GET /api/auth/me
- `routes/admin.js` — GET/POST /api/admin/pending, /approve/:u, /reject/:u, /users
- `routes/progress.js` — GET/POST /api/progress (lưu toàn bộ tiến độ dưới dạng JSON blob)
- `index.html` — SPA duy nhất, không reload trang
- `app.js` — Toàn bộ frontend logic (~1800 dòng)
- `style.css` — CSS

## Dữ liệu & Auth
- JWT lưu trong `localStorage` key `em_token`, hết hạn 7 ngày
- Progress lưu trong localStorage và đồng bộ lên server khi `saveState()` được gọi
- Gemini API key lưu trong localStorage key `em_<username>_gemini_key`, KHÔNG gửi lên server
- Database files trong thư mục `data/` (bị gitignore)

## Luồng đăng ký
1. User gửi yêu cầu → `pending` collection
2. Admin duyệt → tạo mã 4 số → lưu vào `pending.code`
3. User nhập mã → tạo tài khoản trong `users` collection

## Tài khoản mặc định
- admin / admin@2024 (tự tạo khi server khởi động lần đầu)

## Lưu ý khi sửa code
- `saveState()` trong app.js vừa lưu localStorage vừa sync lên `/api/progress` (fire and forget)
- `syncProgressFromAPI()` được gọi sau login để tải tiến độ từ server về localStorage
- Chat AI (Cu Shin) dùng Gemini REST API trực tiếp từ browser, fallback qua 4 model URLs
- `apiFetch()` tự gắn JWT header vào mọi request
