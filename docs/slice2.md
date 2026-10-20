# Task: Slice 2 — Dữ liệu & REST API Sản phẩm (Product Catalog API)

## 1. Mục tiêu (Goal)
Xây dựng lớp dữ liệu và cung cấp REST API cho danh mục sản phẩm của TechStore trên nền tảng **Express.js + Prisma ORM + Aiven Cloud MySQL**.

---

## 2. Phạm vi công việc (Scope)

### A. Dữ liệu mẫu (Seed Data)
Nạp ít nhất 6 sản phẩm đồ điện tử thực tế vào bảng `techstore_products` trên Aiven MySQL thuộc 3 danh mục:
1. **Điện thoại:** 
   - iPhone 15 Pro 128GB (25.990.000 VNĐ)
   - Samsung Galaxy S24 Ultra 256GB (27.490.000 VNĐ)
2. **Laptop:**
   - MacBook Air M3 13 inch 8GB/256GB (26.490.000 VNĐ)
   - Dell XPS 13 9340 Intel Core Ultra 7 (38.990.000 VNĐ)
3. **Phụ kiện & Âm thanh:**
   - Tai nghe Apple AirPods Pro 2 MagSafe (5.590.000 VNĐ)
   - Bàn phím cơ không dây Logitech MX Mechanical Mini (2.990.000 VNĐ)

*Mỗi sản phẩm đều có cấu hình kỹ thuật (specs dạng JSON: RAM, Chip, Bộ nhớ, Pin, Bảo hành...).*

### B. REST API Endpoints
1. `GET /api/products`: 
   - Hỗ trợ lọc theo danh mục: `?category=Điện thoại`
   - Hỗ trợ tìm kiếm theo từ khóa tên: `?search=macbook`
   - Trả về danh sách sản phẩm kèm tổng số lượng.
2. `GET /api/products/:id`:
   - Lấy thông tin chi tiết của 1 sản phẩm theo ID.
   - Trả về mã 404 nếu không tìm thấy.
3. `GET /api/categories`:
   - Trả về danh sách các danh mục sản phẩm hiện có để Frontend hiển thị thanh lọc.

### C. KHÔNG làm trong Lát 2:
- Chưa làm giao diện giỏ hàng, chưa làm đặt hàng.
- Chưa làm chức năng thêm/sửa/xóa sản phẩm của Admin (dành cho Lát 5).

---

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

- [ ] Chạy script seed nạp thành công 6 sản phẩm vào database `techstore_db` trên Aiven MySQL.
- [ ] Gọi `GET /api/products` trả về 6 sản phẩm kèm cấu hình thông số kỹ thuật `specs`.
- [ ] Gọi `GET /api/products?category=Laptop` chỉ trả về các máy Laptop.
- [ ] Gọi `GET /api/products?search=iphone` trả về đúng sản phẩm có chứa từ khóa.
- [ ] Gọi `GET /api/products/1` trả về chi tiết sản phẩm ID = 1.
- [ ] Gọi `GET /api/products/999` trả về mã lỗi 404 và thông báo thân thiện.
- [ ] Cả 6 sản phẩm có giá hiển thị dạng số nguyên hoặc decimal chuẩn VNĐ, ảnh chất lượng cao.
