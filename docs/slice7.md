# Task: Slice 7 — Quản Lý Tồn Kho & Trạng Thái Hết Hàng (Inventory & Stock Management)

## 1. Mục tiêu (Goal)
Theo dõi và kiểm soát số lượng tồn kho của từng sản phẩm trong thời gian thực:
1. Mỗi sản phẩm có trường số lượng tồn kho `stock` (lưu trữ trên Aiven MySQL).
2. Khi khách hàng đặt đơn hàng COD thành công ➔ Hệ thống tự động kiểm tra số lượng và trừ trực tiếp tồn kho của từng sản phẩm trong đơn.
3. Nếu sản phẩm có `stock = 0` ➔ Hiển thị nhãn cảnh báo **"HẾT HÀNG"**, vô hiệu hóa nút "Chọn mua" và nút "Thêm vào giỏ" để tránh đặt khống.
4. Quản trị viên (Admin) có thể xem số lượng tồn kho của tất cả sản phẩm và cập nhật nhanh số lượng tồn kho ngay trên Admin Portal mà không cần thao tác database thủ công.

---

## 2. Phạm vi công việc (Scope)

### A. Database & Schema (Prisma + Aiven MySQL)
- Bổ sung trường `stock Int @default(10)` vào model `Product` trong `schema.prisma`.
- Chạy `npx prisma db push` để cập nhật schema lên Aiven Cloud MySQL mà không làm mất dữ liệu sản phẩm hiện có.

### B. Backend API (Node.js & Express)
1. **API Cập nhật kho (Admin):**
   * `PATCH /api/products/:id/stock`: Cập nhật nhanh số lượng kho của sản phẩm `{ stock: number }`.
2. **Nâng cấp API Đặt hàng (`POST /api/orders`):**
   * Kiểm tra tồn kho trước khi tạo đơn: Nếu bất kỳ sản phẩm nào có số lượng đặt > tồn kho hiện tại ➔ Trả về lỗi 400 kèm thông báo rõ ràng cho khách.
   * Sử dụng Prisma Transaction `$transaction` để vừa tạo đơn vừa trừ kho an toàn, tránh tranh chấp dữ liệu (Race condition).

### C. Frontend Cửa hàng & Admin (Vue 2.7)
1. **Thẻ sản phẩm (`ProductCard.vue`) & Modal Chi tiết (`ProductModal.vue`):**
   * Hiển thị trạng thái kho:
     * `stock > 5`: Badge xanh lá `🟢 Còn hàng (x sản phẩm)`.
     * `0 < stock <= 5`: Badge cam cảnh báo `⚡ Chỉ còn x sản phẩm cuối!`.
     * `stock === 0`: Badge đỏ `❌ Hết hàng`.
   * Vô hiệu hóa nút mua khi `stock === 0` (mờ nút, đổi text thành `Hết Hàng`, con trỏ `not-allowed`).
2. **Khu vực Quản trị (`AdminPortal.vue`):**
   * Thêm tab hoặc bảng "Quản Lý Kho Hàng" (Kho hàng, số lượng còn lại, nút cập nhật nhanh +10, -1, hoặc nhập số trực tiếp).
   * Cảnh báo sản phẩm sắp hết hàng trên KPI Dashboard.

---

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)
- [ ] Schema MySQL có cột `stock` cho tất cả sản phẩm.
- [ ] Khách đặt mua số lượng x ➔ Tồn kho trong MySQL tự động giảm đi x.
- [ ] Khi tồn kho về 0 ➔ Thẻ sản phẩm tự động chuyển sang trạng thái "HẾT HÀNG", nút mua bị khóa.
- [ ] Admin chỉnh kho từ 0 lên 20 ➔ Trang cửa hàng lập tức mở lại nút mua mà không cần khởi động lại server.
