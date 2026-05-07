const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users, pending } = require('../db');
const { requireAuth, SECRET } = require('../middleware/auth');

const router = express.Router();

function makeToken(user) {
  return jwt.sign({ username: user.username, role: user.role }, SECRET, { expiresIn: '7d' });
}

// Đăng nhập
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });

    const user = await users.findOneAsync({ username });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Sai tên đăng nhập hoặc mật khẩu' });
    }
    res.json({ token: makeToken(user), user: { username: user.username, role: user.role } });
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

// Gửi yêu cầu đăng ký (bước 1)
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
    if (!/^[a-z0-9_]{3,20}$/.test(username)) return res.status(400).json({ error: 'Tên đăng nhập chỉ gồm a-z, 0-9, _ và dài 3-20 ký tự' });
    if (password.length < 6) return res.status(400).json({ error: 'Mật khẩu ít nhất 6 ký tự' });

    if (await users.findOneAsync({ username })) return res.status(400).json({ error: 'Tên đăng nhập đã tồn tại' });
    if (await pending.findOneAsync({ username })) return res.status(400).json({ error: 'Yêu cầu đăng ký đã gửi, vui lòng chờ admin duyệt' });

    await pending.insertAsync({ username, password: bcrypt.hashSync(password, 10), code: null, requested_at: new Date() });
    res.json({ message: 'Yêu cầu đã gửi, chờ admin duyệt' });
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

// Kích hoạt tài khoản bằng mã (bước 2)
router.post('/activate', async (req, res) => {
  try {
    const { username, code } = req.body || {};
    if (!username || !code) return res.status(400).json({ error: 'Thiếu thông tin' });

    const record = await pending.findOneAsync({ username });
    if (!record) return res.status(400).json({ error: 'Không tìm thấy yêu cầu đăng ký' });
    if (!record.code) return res.status(400).json({ error: 'Admin chưa duyệt yêu cầu của bạn, vui lòng chờ' });
    if (record.code !== code) return res.status(400).json({ error: 'Mã kích hoạt không đúng' });

    await users.insertAsync({ username: record.username, password: record.password, role: 'user', created_at: new Date() });
    await pending.removeAsync({ username }, {});

    const user = { username: record.username, role: 'user' };
    res.json({ token: makeToken(user), user });
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

// Xác minh token (dùng cho auto-login)
router.get('/me', requireAuth, async (req, res) => {
  try {
    const user = await users.findOneAsync({ username: req.user.username });
    if (!user) return res.status(401).json({ error: 'Tài khoản không còn tồn tại' });
    res.json({ username: user.username, role: user.role });
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

module.exports = router;
