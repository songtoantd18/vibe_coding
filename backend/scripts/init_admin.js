require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const crypto = require('crypto');

const prisma = new PrismaClient();

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

async function initAdmin() {
  try {
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const hashedPassword = hashPassword(adminPassword);

    const existingAdmin = await prisma.user.findUnique({
      where: { username: adminUsername }
    });

    if (existingAdmin) {
      console.log(`ℹ️ Tài khoản admin "${adminUsername}" đã tồn tại trên Aiven MySQL.`);
    } else {
      const created = await prisma.user.create({
        data: {
          username: adminUsername,
          password: hashedPassword,
          fullName: 'Quản Trị Viên TechStore',
          role: 'SUPER_ADMIN'
        }
      });
      console.log(`✅ Khởi tạo tài khoản Admin thành công: [ID: ${created.id}] Username: "${created.username}"`);
    }
  } catch (err) {
    console.error('❌ Lỗi khi khởi tạo tài khoản Admin:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

initAdmin();
