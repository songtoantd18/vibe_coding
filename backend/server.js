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

// Endpoint tạo đơn hàng mới (Thanh toán COD)
app.post('/api/orders', async (req, res) => {
  try {
    const { customerName, phone, address, notes, items } = req.body;

    // 1. Kiểm tra tính hợp lệ của dữ liệu đầu vào
    if (!customerName || customerName.trim() === '') {
      return res.status(400).json({ status: 'error', message: 'Vui lòng nhập họ và tên người nhận.' });
    }

    if (!phone || !/^[0-9+() -]{9,15}$/.test(phone.trim())) {
      return res.status(400).json({ status: 'error', message: 'Vui lòng nhập số điện thoại nhận hàng hợp lệ (ít nhất 9-11 chữ số).' });
    }

    if (!address || address.trim() === '') {
      return res.status(400).json({ status: 'error', message: 'Vui lòng nhập địa chỉ giao hàng cụ thể.' });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ status: 'error', message: 'Giỏ hàng của bạn đang trống, không thể tạo đơn hàng.' });
    }

    // 2. Tính toán tổng tiền an toàn từ danh sách món
    let total = 0;
    const sanitizedItems = items.map((item) => {
      const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
      const price = Number(item.price) || 0;
      total += price * qty;
      return {
        productId: item.productId || item.id,
        name: item.name,
        price,
        quantity: qty,
        image: item.image || ''
      };
    });

    // 3. Tạo mã đơn hàng ngẫu nhiên dễ nhớ (ví dụ: DH-849201)
    const orderCode = `DH-${Math.floor(100000 + Math.random() * 900000)}`;

    // 4. Lưu đơn hàng vào bảng techstore_orders trên Aiven MySQL qua Prisma
    const newOrder = await prisma.order.create({
      data: {
        orderCode,
        customerName: customerName.trim(),
        phone: phone.trim(),
        address: address.trim(),
        notes: notes ? notes.trim() : '',
        items: sanitizedItems,
        totalAmount: total,
        paymentMethod: 'COD',
        status: 'PENDING'
      }
    });

    console.log(`🎉 ĐƠN HÀNG MỚI ĐÃ TẠO: [${newOrder.orderCode}] Khách: ${newOrder.customerName} - ${total.toLocaleString('vi-VN')} đ`);

    return res.status(201).json({
      status: 'ok',
      message: 'Đặt hàng COD thành công!',
      orderCode: newOrder.orderCode,
      data: {
        ...newOrder,
        totalAmount: Number(newOrder.totalAmount)
      }
    });
  } catch (err) {
    console.error('❌ Lỗi tạo đơn hàng:', err.message);
    return res.status(500).json({ status: 'error', message: 'Lỗi máy chủ khi tạo đơn: ' + err.message });
  }
});

// Endpoint lấy danh sách đơn hàng (cho trang Quản trị)
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' }
    });

    const formatted = orders.map((o) => ({
      ...o,
      totalAmount: Number(o.totalAmount)
    }));

    return res.json({
      status: 'ok',
      total: formatted.length,
      data: formatted
    });
  } catch (err) {
    console.error('❌ Lỗi lấy danh sách đơn hàng:', err.message);
    return res.status(500).json({ status: 'error', message: err.message });
  }
});

// Endpoint cập nhật trạng thái đơn hàng (Admin)
app.patch('/api/orders/:id/status', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ status: 'error', message: 'ID đơn hàng không hợp lệ' });
    }

    const { status } = req.body;
    const allowedStatuses = ['PENDING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];
    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({
        status: 'error',
        message: `Trạng thái không hợp lệ. Chỉ chấp nhận: ${allowedStatuses.join(', ')}`
      });
    }

    const updated = await prisma.order.update({
      where: { id },
      data: { status }
    });

    console.log(`🔄 CẬP NHẬT TRẠNG THÁI ĐƠN [${updated.orderCode}]: ${status}`);

    return res.json({
      status: 'ok',
      message: `Đã cập nhật trạng thái đơn hàng sang ${status}`,
      data: {
        ...updated,
        totalAmount: Number(updated.totalAmount)
      }
    });
  } catch (err) {
    console.error('❌ Lỗi cập nhật trạng thái đơn hàng:', err.message);
    return res.status(500).json({ status: 'error', message: err.message });
  }
});

// Endpoint thêm sản phẩm mới (Admin)
app.post('/api/products', async (req, res) => {
  try {
    const { name, category, price, image, description, specs } = req.body;

    if (!name || name.trim() === '') {
      return res.status(400).json({ status: 'error', message: 'Vui lòng nhập tên sản phẩm.' });
    }
    if (!category || category.trim() === '') {
      return res.status(400).json({ status: 'error', message: 'Vui lòng chọn danh mục sản phẩm.' });
    }
    const numPrice = Number(price);
    if (isNaN(numPrice) || numPrice <= 0) {
      return res.status(400).json({ status: 'error', message: 'Giá sản phẩm phải là số dương hợp lệ.' });
    }

    const newProduct = await prisma.product.create({
      data: {
        name: name.trim(),
        category: category.trim(),
        price: numPrice,
        image: image && image.trim() ? image.trim() : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        description: description ? description.trim() : 'Sản phẩm công nghệ chính hãng tại TechStore.',
        specs: specs || {}
      }
    });

    console.log(`✨ THÊM SẢN PHẨM MỚI: [ID: ${newProduct.id}] ${newProduct.name} - ${numPrice.toLocaleString('vi-VN')} đ`);

    return res.status(201).json({
      status: 'ok',
      message: 'Thêm sản phẩm mới thành công!',
      data: {
        ...newProduct,
        price: Number(newProduct.price)
      }
    });
  } catch (err) {
    console.error('❌ Lỗi thêm sản phẩm:', err.message);
    return res.status(500).json({ status: 'error', message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 TechStore Backend running at: http://localhost:${PORT}`);
  console.log(`🩺 Health check URL: http://localhost:${PORT}/api/health`);
  console.log(`📦 Products API URL: http://localhost:${PORT}/api/products`);
  console.log(`📝 Orders API URL: http://localhost:${PORT}/api/orders`);
});


