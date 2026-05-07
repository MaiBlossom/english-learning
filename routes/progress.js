const express = require('express');
const { progress } = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// Tải tiến độ
router.get('/', requireAuth, async (req, res) => {
  try {
    const row = await progress.findOneAsync({ username: req.user.username });
    res.json(row ? row.data : {});
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

// Lưu tiến độ
router.post('/', requireAuth, async (req, res) => {
  try {
    await progress.updateAsync(
      { username: req.user.username },
      { $set: { data: req.body, updated_at: new Date() } },
      { upsert: true }
    );
    res.json({ ok: true });
  } catch { res.status(500).json({ error: 'Lỗi server' }); }
});

module.exports = router;
