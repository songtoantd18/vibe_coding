require('dotenv').config();
const express = require('express');
const cors = require('cors');
const prisma = require('./src/prisma');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'TechStore E-commerce API',
    version: '1.0.0',
    slice: 'Slice 1 - Foundation',
    status: 'Running'
  });
});

// Health check endpoint (Kiểm tra nhịp tim hệ thống & kết nối Aiven MySQL qua Prisma)
app.get('/api/health', async (req, res) => {
  const startTime = Date.now();
  try {
    // 1. Kiểm tra kết nối tới Aiven Cloud MySQL
    await prisma.$connect();
    
    // 2. Chạy thử 1 truy vấn kiểm tra siêu nhẹ
    await prisma.$queryRawUnsafe('SELECT 1 AS pong');
    
    const latency = Date.now() - startTime;

    return res.status(200).json({
      status: 'ok',
      service: 'TechStore Backend API',
      timestamp: new Date().toISOString(),
      latencyMs: latency,
      database: {
        status: 'connected',
        provider: 'Aiven Cloud MySQL via Prisma',
        host: 'mysql-nestjs12ff5041-mysqlnestjs.h.aivencloud.com',
        ssl: 'REQUIRED'
      }
    });
  } catch (error) {
    console.error('❌ Health check database error:', error.message);
    const latency = Date.now() - startTime;
    return res.status(503).json({
      status: 'degraded',
      service: 'TechStore Backend API running, database check failed',
      timestamp: new Date().toISOString(),
      latencyMs: latency,
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 TechStore Backend running at: http://localhost:${PORT}`);
  console.log(`🩺 Health check URL: http://localhost:${PORT}/api/health`);
});
