const Datastore = require('@seald-io/nedb');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const users   = new Datastore({ filename: path.join(dataDir, 'users.db'),    autoload: true });
const pending  = new Datastore({ filename: path.join(dataDir, 'pending.db'),  autoload: true });
const progress = new Datastore({ filename: path.join(dataDir, 'progress.db'), autoload: true });

users.ensureIndex({ fieldName: 'username', unique: true });
pending.ensureIndex({ fieldName: 'username', unique: true });
progress.ensureIndex({ fieldName: 'username', unique: true });

// Tạo tài khoản admin mặc định nếu chưa có
(async () => {
  const admin = await users.findOneAsync({ username: 'admin' });
  if (!admin) {
    await users.insertAsync({
      username: 'admin',
      password: bcrypt.hashSync('admin@2024', 10),
      role: 'admin',
      created_at: new Date(),
    });
    console.log('Đã tạo tài khoản admin mặc định: admin / admin@2024');
  }
})().catch(console.error);

module.exports = { users, pending, progress };
