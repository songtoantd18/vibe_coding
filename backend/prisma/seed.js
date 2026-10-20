const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const sampleProducts = [
  {
    name: 'iPhone 15 Pro 128GB - Titan Tự Nhiên',
    category: 'Điện thoại',
    price: 25990000,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    description: 'Thiết kế titan bền nhẹ chuẩn hàng không vũ trụ. Chip A17 Pro đỉnh cao đồ họa game di động. Cổng sạc USB-C tốc độ cao và nút Tác Vụ đa năng.',
    specs: {
      screen: '6.1 inch Super Retina XDR OLED 120Hz',
      cpu: 'Apple A17 Pro (3nm)',
      ram: '8 GB',
      storage: '128 GB NVMe',
      battery: '3.274 mAh, Sạc nhanh 20W',
      camera: 'Chính 48MP + Góc siêu rộng 12MP + Tele 3x 12MP',
      warranty: '12 tháng chính hãng Apple Việt Nam'
    }
  },
  {
    name: 'Samsung Galaxy S24 Ultra 5G 256GB - Xám Titan',
    category: 'Điện thoại',
    price: 27490000,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    description: 'Quyền năng Galaxy AI dẫn đầu xu thế. Khung viền titan cứng cáp cùng bút S-Pen tích hợp tiện lợi cho công việc và sáng tạo nội dung.',
    specs: {
      screen: '6.8 inch Dynamic AMOLED 2X, QHD+ 120Hz',
      cpu: 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      ram: '12 GB',
      storage: '256 GB UFS 4.0',
      battery: '5.000 mAh, Sạc nhanh 45W',
      camera: 'Chính 200MP + Zoom quang 5x 50MP + Siêu rộng 12MP',
      warranty: '12 tháng chính hãng Samsung Việt Nam'
    }
  },
  {
    name: 'MacBook Air M3 13 inch (8GB RAM / 256GB SSD) - Space Gray',
    category: 'Laptop',
    price: 26490000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: 'Siêu mỏng nhẹ, hiệu năng vượt trội với chip Apple M3 thế hệ mới. Thời lượng pin ấn tượng lên đến 18 giờ làm việc liên tục không cần sạc.',
    specs: {
      screen: '13.6 inch Liquid Retina (2560 x 1664)',
      cpu: 'Apple M3 (8 nhân CPU, 8 nhân GPU)',
      ram: '8 GB Unified Memory',
      storage: '256 GB SSD siêu tốc',
      battery: '52.6 Wh, Pin 18 tiếng liên tục',
      weight: '1.24 kg',
      warranty: '12 tháng Apple Care'
    }
  },
  {
    name: 'Dell XPS 13 9340 Intel Core Ultra 7 (16GB / 512GB SSD) - Bạc Platinum',
    category: 'Laptop',
    price: 38990000,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    description: 'Kiệt tác ultrabook doanh nhân cao cấp với bàn phím tràn viền vô hình và thanh cảm ứng điện dung hiện đại. Tích hợp AI Boost xử lý thông minh.',
    specs: {
      screen: '13.4 inch FHD+ InfinityEdge IPS 500 nits 120Hz',
      cpu: 'Intel Core Ultra 7 155H (16 nhân, 22 luồng, up to 4.8GHz)',
      ram: '16 GB LPDDR5x 7467 MHz',
      storage: '512 GB PCIe Gen4 NVMe SSD',
      battery: '55 Wh, sạc nhanh Type-C 60W',
      weight: '1.19 kg',
      warranty: '24 tháng Dell ProSupport tận nơi'
    }
  },
  {
    name: 'Tai Nghe True Wireless Apple AirPods Pro 2 (USB-C)',
    category: 'Phụ kiện',
    price: 5590000,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    description: 'Khả năng chủ động khử tiếng ồn ANC đỉnh cao gấp 2 lần thế hệ trước. Chế độ âm thanh thích ứng và kháng nước bụi chuẩn IP54 bền bỉ.',
    specs: {
      driver: 'Apple Driver độ méo tiếng thấp tùy chỉnh',
      chip: 'Apple H2 cho tai nghe, Apple U1 trong hộp sạc',
      battery: '6 giờ nghe liên tục (30 giờ kèm hộp sạc)',
      connectivity: 'Bluetooth 5.3, Cổng sạc USB-C & MagSafe',
      features: 'Chống ồn chủ động (ANC), Xuyên âm, Âm thanh vòm cá nhân hóa',
      warranty: '12 tháng chính hãng Apple'
    }
  },
  {
    name: 'Bàn Phím Cơ Không Dây Logitech MX Mechanical Mini - Tactile Quiet',
    category: 'Phụ kiện',
    price: 2990000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    description: 'Bàn phím cơ low-profile êm ái, tối ưu hóa cho lập trình viên và sáng tạo nội dung. Đèn nền thông minh tự bật sáng khi tay bạn đến gần.',
    specs: {
      layout: '75% nhỏ gọn (Mini Tenkeyless)',
      switch: 'Mechanical Tactile Quiet (gõ êm, có khấc phản hồi)',
      connectivity: 'Bluetooth Low Energy & USB Logi Bolt (kết nối tối đa 3 thiết bị)',
      battery: 'Pin sạc Type-C dùng đến 15 ngày có đèn (hoặc 10 tháng không đèn)',
      compatibility: 'Windows, macOS, Linux, iOS, Android',
      warranty: '12 tháng chính hãng Logitech'
    }
  }
];

async function main() {
  console.log('🌱 Bắt đầu nạp dữ liệu mẫu vào Aiven MySQL (techstore_db)...');
  
  // Xóa dữ liệu cũ nếu có để tránh trùng lặp
  await prisma.product.deleteMany({});
  console.log('🧹 Đã dọn sạch bảng techstore_products cũ.');

  for (const item of sampleProducts) {
    const p = await prisma.product.create({
      data: item
    });
    console.log(`✅ Đã thêm: [${p.category}] ${p.name} - ${Number(p.price).toLocaleString('vi-VN')} đ`);
  }

  const total = await prisma.product.count();
  console.log(`\n🎉 NẠP DỮ LIỆU HOÀN TẤT! Tổng cộng: ${total} sản phẩm trên Aiven Cloud.`);
}

main()
  .catch((err) => {
    console.error('❌ Lỗi khi nạp dữ liệu:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
