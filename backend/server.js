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

// Endpoint lấy danh sách danh mục sản phẩm
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await prisma.product.findMany({
      select: { category: true },
      distinct: ['category']
    });
    const list = categories.map((c) => c.category);
    return res.json({
      status: 'ok',
      data: ['Tất cả', ...list]
    });
  } catch (err) {
    console.error('❌ Lỗi lấy categories:', err.message);
    return res.status(500).json({ status: 'error', message: err.message });
  }
});

// Endpoint lấy danh sách sản phẩm (có lọc category và tìm kiếm search)
app.get('/api/products', async (req, res) => {
  try {
    const { category, search, sort } = req.query;
    const where = {};

    // Lọc theo danh mục nếu có
    if (category && category !== 'Tất cả') {
      where.category = category;
    }

    // Tìm kiếm theo từ khóa nếu có
    if (search && search.trim() !== '') {
      where.OR = [
        { name: { contains: search.trim() } },
        { description: { contains: search.trim() } }
      ];
    }

    // Sắp xếp
    let orderBy = { id: 'asc' };
    if (sort === 'price_asc') orderBy = { price: 'asc' };
    if (sort === 'price_desc') orderBy = { price: 'desc' };
    if (sort === 'newest') orderBy = { createdAt: 'desc' };

    const products = await prisma.product.findMany({
      where,
      orderBy
    });

    const formatted = products.map((p) => ({
      ...p,
      price: Number(p.price)
    }));

    return res.json({
      status: 'ok',
      total: formatted.length,
      data: formatted
    });
  } catch (err) {
    console.error('❌ Lỗi lấy danh sách sản phẩm:', err.message);
    return res.status(500).json({ status: 'error', message: err.message });
  }
});

// Endpoint lấy chi tiết 1 sản phẩm theo ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ status: 'error', message: 'ID sản phẩm không hợp lệ' });
    }

    const product = await prisma.product.findUnique({
      where: { id }
    });

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: `Không tìm thấy sản phẩm có ID = ${id}`
      });
    }

    return res.json({
      status: 'ok',
      data: {
        ...product,
        price: Number(product.price)
      }
    });
  } catch (err) {
    console.error('❌ Lỗi lấy chi tiết sản phẩm:', err.message);
    return res.status(500).json({ status: 'error', message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 TechStore Backend running at: http://localhost:${PORT}`);
  console.log(`🩺 Health check URL: http://localhost:${PORT}/api/health`);
  console.log(`📦 Products API URL: http://localhost:${PORT}/api/products`);
});

