const express = require('express');
const { users, pending } = require('../db');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

function generateCode() { return String(Math.floor(1000 + Math.random() * 9000)); }

// Danh sách yêu cầu chờ duyệt
router.get('/pending', requireAdmin, async (req, res) => {
  try {
    const rows = await pending.findAsync({});
    rows.sort((a, b) => new Date(b.requested_at) - new Date(a.requested_at));
    res.json(rows.map(r => ({ username: r.username, requested_at: r.requested_at, has_code: !!r.code, code: r.code })));
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

// Duyệt & tạo mã kích hoạt
router.post('/approve/:username', requireAdmin, async (req, res) => {
  try {
    const { username } = req.params;
    if (!await pending.findOneAsync({ username })) return res.status(404).json({ error: 'Không tìm thấy yêu cầu' });
    const code = generateCode();
    await pending.updateAsync({ username }, { $set: { code } }, {});
    res.json({ code });
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

// Từ chối / xóa yêu cầu
router.post('/reject/:username', requireAdmin, async (req, res) => {
  try {
    await pending.removeAsync({ username: req.params.username }, {});
    res.json({ message: 'Đã xóa yêu cầu' });
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

// Danh sách thành viên
router.get('/users', requireAdmin, async (req, res) => {
  try {
    const all = await users.findAsync({});
    all.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    res.json(all.map(u => ({ username: u.username, role: u.role, created_at: u.created_at })));
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

// Xóa thành viên
router.delete('/users/:username', requireAdmin, async (req, res) => {
  try {
    const { username } = req.params;
    if (username === 'admin') return res.status(400).json({ error: 'Không thể xóa tài khoản admin' });
    await users.removeAsync({ username }, {});
    res.json({ message: 'Đã xóa thành viên' });
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

module.exports = router;
