# Kế hoạch phát triển dự án (PLAN.md): TechStore E-commerce

Tài liệu này chia dự án thành **5 lát cắt độc lập (slices)**. 
> 💡 **Quyết định kiến trúc MVP:** Dùng lưu trữ JSON nội bộ (`backend/data/`) cho giai đoạn 1 để chạy demo ngay lập tức, zero-config, không phụ thuộc MySQL. MySQL + Prisma được chuyển vào giai đoạn nâng cấp sau khi MVP chạy trơn tru.

---

## 🗺️ Bản đồ lộ trình 5 lát cắt

| Lát | Tên lát cắt | Kết quả đạt được | Kiểm bằng cách | Trạng thái |
| :---: | :--- | :--- | :--- | :---: |
| **1** | **Khởi tạo nền tảng (Foundation)** | Monorepo (Vue 2.7 + Express), Health check API, Prisma + Aiven MySQL | `GET /api/health` trả `status: ok`, kết nối Aiven MySQL thành công | 🟢 Đã hoàn thành |
| **2** | **Dữ liệu & API Sản phẩm (Product Catalog API)** | Bảng `techstore_products` (6 món Aiven MySQL kèm specs), Express REST API | Gọi `GET /api/products` và `GET /api/products/:id` trả về đúng danh sách sản phẩm | 🟢 Đã hoàn thành |
| **3** | **Giao diện Cửa hàng (Frontend Catalog)** | Trang chủ, danh mục, chi tiết sản phẩm kèm bảng thông số kỹ thuật | Duyệt web trên Desktop & Mobile 375px: lọc danh mục, xem bảng specs rõ ràng | 🟢 Đã hoàn thành |
| **4** | **Giỏ hàng & Đặt hàng COD (Cart & Checkout)** | Quản lý giỏ hàng LocalStorage, Form đặt hàng COD, API lưu đơn vào MySQL | Thêm món -> Giỏ hàng -> Đặt hàng -> Bảng `techstore_orders` có đơn mới -> Hiện trang thành công | 🟢 Đã hoàn thành |
| **5** | **Quản trị cơ bản (`/admin`) & Đóng gói** | Xem danh sách đơn hàng từ MySQL, cập nhật trạng thái đơn (Mới -> Đang giao -> Đã giao) | Truy cập `/admin`, thấy đơn vừa đặt ở Lát 4, đổi trạng thái; hoàn thiện demo | ⚪ Chờ thực hiện |

---

## 📋 Chi tiết từng lát cắt

### Lát 1: Khởi tạo nền tảng (Foundation)
- **Mục tiêu:** Dựng xong bộ khung monorepo sạch sẽ, kết nối thành công từ Frontend -> Backend (Express), thiết lập thư mục lưu trữ dữ liệu `backend/data/`.
- **Phạm vi:** 
  - Khởi tạo thư mục `backend/` với Express.js, CORS, nodemon.
  - Khởi tạo thư mục `frontend/` với Vue 2.7 (Vite).
  - Thư mục lưu trữ: `backend/data/` (chứa các file JSON dữ liệu).
  - Endpoint kiểm tra sức khỏe hệ thống: `GET /api/health`.
- **KHÔNG làm:** Chưa viết các màn hình bán hàng, chưa làm giỏ hàng, chưa cài MySQL hay ORM phức tạp.
- **Tiêu chí nghiệm thu:**
  - [ ] Chạy lệnh dev cho backend và frontend không bị lỗi.
  - [ ] `GET http://localhost:5000/api/health` trả về JSON xác nhận backend và kho lưu trữ JSON sẵn sàng (`status: "ok"`).
  - [ ] Frontend Vue 2 mở tại `http://localhost:3000` (hoặc `8080`) hiển thị trang chào và gọi thử health check thành công.

---

### Lát 2: Dữ liệu & API Sản phẩm (Product Catalog API)
- **Mục tiêu:** Tạo bộ dữ liệu mẫu đồ điện tử thực tế và cung cấp REST API tra cứu.
- **Phạm vi:**
  - File dữ liệu `backend/data/products.json`: Ít nhất 6 sản phẩm đồ điện tử (Điện thoại, Laptop, Phụ kiện) với đầy đủ Tên, Giá, Ảnh mẫu, Danh mục và Bảng thông số kỹ thuật (RAM, CPU, Pin, Bảo hành...).
  - API: `GET /api/products` (hỗ trợ filter category, search keyword), `GET /api/products/:id`.
- **Tiêu chí nghiệm thu:**
  - [ ] Gọi `GET /api/products` trả về đủ danh sách 6 sản phẩm kèm cấu hình specs.
  - [ ] Gọi `GET /api/products/:id` trả về đúng chi tiết của sản phẩm đó.
  - [ ] Thử tìm kiếm hoặc lọc theo danh mục qua query param trả về đúng kết quả.

---

### Lát 3: Giao diện Khách hàng (Frontend Catalog)
- **Mục tiêu:** Khách hàng xem được sản phẩm đẹp mắt, dễ tra cứu thông số kỹ thuật.
- **Phạm vi:**
  - Tích hợp Vue Router cho Vue 2.
  - Trang chủ (`/`): Danh sách sản phẩm, thanh tìm kiếm, bộ lọc theo danh mục.
  - Trang chi tiết (`/product/:id`): Thư viện ảnh, tên, giá, nút "Thêm vào giỏ", và **Bảng thông số kỹ thuật dạng bảng 2 cột rõ ràng**.
  - Style: Giao diện màu xanh công nghệ (Tech Blue), chuẩn responsive desktop & mobile 375px.
- **Tiêu chí nghiệm thu:**
  - [ ] Mở trên mobile 375px không vỡ layout, không cuộn ngang.
  - [ ] Nhập từ khóa tìm kiếm hoặc bấm lọc danh mục -> danh sách sản phẩm lọc chuẩn xác.
  - [ ] Bấm vào thẻ sản phẩm -> điều hướng sang trang chi tiết hiển thị đầy đủ thông số.

---

### Lát 4: Giỏ hàng & Đặt hàng COD (Cart & Checkout)
- **Mục tiêu:** Hoàn tất luồng mua hàng vãng lai không cần đăng nhập.
- **Phạm vi:**
  - State giỏ hàng (Vuex + LocalStorage): Thêm món, tăng/giảm số lượng, xóa món, tính tổng tiền.
  - Trang giỏ hàng (`/cart`) & Form đặt hàng COD: Họ tên, Số điện thoại, Địa chỉ nhận hàng, Ghi chú.
  - API `POST /api/orders`: Ghi thông tin đơn hàng mới vào file `backend/data/orders.json`.
  - Trang hoàn tất đơn hàng (`/order-success`): Hiển thị mã đơn hàng, thông tin giao hàng COD.
- **Tiêu chí nghiệm thu:**
  - [ ] Thao tác giỏ hàng cập nhật số lượng và tổng tiền chuẩn xác.
  - [ ] Nhập thông tin và bấm đặt hàng -> API tạo đơn thành công, trả về mã đơn.
  - [ ] Kiểm tra file `backend/data/orders.json` thấy đơn hàng mới được lưu vĩnh viễn (kể cả khi restart server vẫn còn).
  - [ ] Giỏ hàng được tự động dọn sạch sau khi đặt hàng thành công.

---

### Lát 5: Trang Quản trị cơ bản (`/admin`) & Hoàn thiện Demo
- **Mục tiêu:** Quản trị viên theo dõi được đơn hàng và bổ sung sản phẩm mới.
- **Phạm vi:**
  - Trang `/admin/orders`: Đọc dữ liệu từ `orders.json`, hiển thị bảng đơn hàng, nút chuyển trạng thái (Mới -> Đang giao -> Đã giao).
  - API cập nhật trạng thái đơn hàng: `PATCH /api/orders/:id/status` (cập nhật file `orders.json`).
  - Trang `/admin/products`: Form thêm mới sản phẩm (ghi thêm vào `products.json`).
- **Tiêu chí nghiệm thu:**
  - [ ] Đơn hàng đặt ở Lát 4 hiển thị đầy đủ trên màn hình `/admin/orders`.
  - [ ] Đổi trạng thái đơn hàng thành công và file `orders.json` được cập nhật.
  - [ ] Thêm 1 sản phẩm mới qua form Admin -> Xuất hiện ngay ngoài trang chủ.
  - [ ] Toàn bộ hệ thống chạy mượt, 0 lỗi console.

---

## 🚀 Giai đoạn sau MVP: Nâng cấp MySQL & Prisma
Khi toàn bộ 5 lát cắt chạy thông suốt và có demo hoàn chỉnh, chúng ta có thể làm thêm một lát nâng cấp riêng:
- Cài đặt Prisma + MySQL.
- Viết migration chuyển dữ liệu từ `products.json` và `orders.json` vào database thật.
- Thay thế hàm đọc ghi file bằng Prisma Client mà không làm ảnh hưởng đến giao diện Vue 2.
