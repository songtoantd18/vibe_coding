# Task: Slice 4 — Giỏ hàng & Đặt hàng COD (Cart & Checkout)

## 1. Mục tiêu (Goal)
Hoàn tất trọn vẹn luồng trải nghiệm mua sắm của khách hàng cá nhân (mua hàng vãng lai không cần đăng nhập): từ việc thêm món vào giỏ hàng, tăng/giảm số lượng, điền thông tin người nhận, đến việc gửi đơn đặt hàng thanh toán khi nhận hàng (COD) và lưu trữ vĩnh viễn vào **Aiven Cloud MySQL**.

---

## 2. Phạm vi công việc (Scope)

### A. Quản lý Giỏ hàng (Cart Management)
1. **Lưu trữ trạng thái (State & Persistence):**
   - Lưu trữ danh sách món trong giỏ hàng vào `localStorage` của trình duyệt để khi tải lại trang (F5) không bị mất giỏ hàng.
   - Badge số lượng trên thanh Header cập nhật thời gian thực.
2. **Ngăn kéo Giỏ hàng (Cart Drawer):**
   - Trượt ra từ cạnh phải màn hình khi bấm vào biểu tượng 🛒 ở Header.
   - Danh sách các món đã chọn: Ảnh thu nhỏ, Tên, Đơn giá.
   - Bộ nút tăng/giảm số lượng (`-`, `+`) và nút xóa món khỏi giỏ.
   - Tự động tính toán tổng tiền thanh toán (`Tổng cộng: xx.xxx.xxx đ`).

### B. Form Đặt hàng COD (Checkout Form)
1. **Các trường thông tin người nhận:**
   - Họ và tên người nhận (bắt buộc).
   - Số điện thoại nhận hàng (bắt buộc, kiểm tra định dạng số).
   - Địa chỉ giao hàng cụ thể (bắt buộc).
   - Ghi chú đơn hàng (tùy chọn: ví dụ "Giao trong giờ hành chính").
   - Phương thức thanh toán: **Thanh toán khi nhận hàng (COD)** cố định mặc định.
2. **Kiểm tra hợp lệ (Form Validation):**
   - Báo lỗi rõ ràng nếu khách bỏ trống ô thông tin bắt buộc trước khi gửi.

### C. Backend & Cơ sở dữ liệu (Database & API)
1. **Mô hình Dữ liệu (Prisma Model `Order`):**
   - Bảng `techstore_orders` trên Aiven MySQL:
     * `id`: Mã đơn tự tăng.
     * `orderCode`: Mã đơn hiển thị (ví dụ `DH-849201`).
     * `customerName`: Tên người nhận.
     * `phone`: Số điện thoại.
     * `address`: Địa chỉ giao hàng.
     * `notes`: Ghi chú.
     * `items`: Danh sách sản phẩm mua dạng JSON.
     * `totalAmount`: Tổng tiền đơn hàng (Decimal).
     * `paymentMethod`: 'COD'.
     * `status`: 'PENDING' (Chờ xác nhận).
     * `createdAt`: Thời gian đặt hàng.
2. **API Endpoint:**
   - `POST /api/orders`: Nhận thông tin đơn hàng, kiểm tra tính hợp lệ và ghi vào Aiven MySQL.

### D. Màn hình Đặt hàng thành công (Order Success Modal)
- Khi API tạo đơn thành công:
  - Giỏ hàng tự động làm trống (`0 món`).
  - Mở màn hình chúc mừng: Hiển thị Mã đơn hàng (`#DH-...`), Tên người nhận, Tổng tiền COD, Lời cảm ơn và nút *"Tiếp tục mua sắm"*.

---

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

- [ ] Bấm nút "Chọn mua" ở bất kỳ sản phẩm nào -> Sản phẩm được thêm vào giỏ hàng, mở ngăn kéo giỏ hàng mượt mà.
- [ ] Bấm tăng/giảm số lượng món -> Tổng tiền giỏ hàng cập nhật chuẩn xác từng đồng.
- [ ] Bấm nút xóa món -> Món hàng được gỡ khỏi giỏ hàng.
- [ ] Tải lại trang (F5) -> Giỏ hàng vẫn giữ nguyên các món đã chọn.
- [ ] Bỏ trống ô họ tên hoặc SĐT rồi bấm Đặt hàng -> Báo lỗi nhắc nhở, không cho gửi đơn rác.
- [ ] Điền đủ thông tin và bấm "Xác nhận đặt hàng" -> Gửi `POST /api/orders`, lưu thành công đơn hàng vào bảng `techstore_orders` trên Aiven Cloud.
- [ ] Màn hình thành công xuất hiện với đúng mã đơn hàng và số tiền COD.
- [ ] Giỏ hàng tự động dọn sạch về 0 sau khi đặt hàng thành công.
- [ ] Mở Prisma Studio (`http://localhost:5555`) thấy dòng đơn hàng mới xuất hiện trong database.
