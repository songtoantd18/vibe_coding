# Task: Slice 5 — Trang Quản Trị Đơn Hàng & Sản Phẩm (Admin Portal)

## 1. Mục tiêu (Goal)
Xây dựng trang Quản trị (Admin Portal) tinh gọn, trực quan để chủ cửa hàng có thể:
1. Quản lý toàn bộ danh sách đơn hàng COD thực tế lưu trên **Aiven Cloud MySQL**.
2. Cập nhật trạng thái đơn hàng (`PENDING` - Chờ xử lý ➔ `SHIPPED` - Đang giao ➔ `DELIVERED` - Đã giao).
3. Thêm nhanh sản phẩm công nghệ mới trực tiếp vào database MySQL và xuất hiện ngay lập tức ngoài trang chủ.

---

## 2. Phạm vi công việc (Scope)

### A. Backend API (Node.js & Prisma)
1. **API Cập nhật trạng thái đơn hàng:**
   - `PATCH /api/orders/:id/status`: Nhận `status` mới (`PENDING`, `SHIPPED`, `DELIVERED`, `CANCELLED`) và cập nhật vào bảng `techstore_orders`.
2. **API Thêm mới sản phẩm:**
   - `POST /api/products`: Nhận thông tin sản phẩm (tên, danh mục, giá, ảnh, mô tả, thông số) và thêm vào bảng `techstore_products`.

### B. Frontend Quản trị (Admin Portal Component)
1. **Thanh điều hướng Header:**
   - Thêm nút chuyển đổi chế độ xem: **"🛍️ Cửa Hàng"** ⟷ **"⚙️ Quản Trị (Admin)"**.
2. **Bảng thống kê nhanh (KPI Dashboard):**
   - Tổng số đơn hàng.
   - Số đơn đang chờ xử lý (`PENDING`).
   - Tổng doanh thu COD dự kiến.
3. **Quản lý danh sách Đơn hàng:**
   - Bảng danh sách đơn hàng sắp xếp theo thời gian mới nhất: Mã đơn (#DH-...), Khách hàng & SĐT, Địa chỉ, Danh sách món mua, Tổng tiền COD, Trạng thái hiện tại.
   - Nút/Menu cập nhật nhanh trạng thái đơn hàng thời gian thực.
4. **Form Thêm sản phẩm mới:**
   - Các trường: Tên sản phẩm, Danh mục (Điện thoại, Laptop, Phụ kiện), Giá bán (VNĐ), URL hình ảnh, Mô tả ngắn, Thông số cơ bản (CPU, RAM, Pin...).
   - Kiểm tra hợp lệ dữ liệu và gửi `POST /api/products`. Khi thêm thành công, danh mục sản phẩm ngoài trang chủ tự động cập nhật.

---

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

- [x] Bấm nút "Quản Trị (Admin)" ở Header -> Chuyển sang giao diện Admin Portal mượt mà.
- [x] Bảng đơn hàng hiển thị đầy đủ các đơn hàng thực tế vừa đặt từ các lát cắt trước.
- [x] Bấm đổi trạng thái một đơn hàng sang "Đang giao" (`SHIPPED`) hoặc "Đã giao" (`DELIVERED`) -> Trạng thái cập nhật tức thì trên giao diện và lưu vĩnh viễn vào Aiven MySQL.
- [x] Điền form thêm sản phẩm mới (ví dụ "Tai nghe Sony WH-1000XM5") và bấm "Lưu sản phẩm" -> Lưu thành công vào MySQL.
- [x] Quay lại chế độ "Cửa Hàng" -> Thấy sản phẩm mới vừa thêm hiển thị ngay trên lưới sản phẩm, có thể bấm "Chọn mua" bình thường.
- [x] Giao diện Admin chuẩn responsive (tự động chuyển sang Card View trên Mobile < 768px), phối màu Dark Theme công nghệ sang trọng, nhất quán với toàn bộ hệ thống.
