const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname)); // Serve index.html, style.css, app.js

app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/progress', require('./routes/progress'));

// Fallback: trả về index.html cho mọi route không phải /api
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.status(404).json({ error: 'API không tồn tại' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🇬🇧 EnglishMe đang chạy tại http://localhost:${PORT}`);
  console.log(`   Tài khoản admin mặc định: admin / admin@2024\n`);
});
