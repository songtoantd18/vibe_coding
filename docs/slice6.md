# Task: Slice 6 — Đăng Nhập Admin Bảo Mật (Admin Authentication & Route Protection)

## 1. Mục tiêu (Goal)
Bảo vệ toàn diện khu vực **Quản Trị (Admin Portal)** bằng hệ thống xác thực tài khoản & mật khẩu:
1. Ngăn chặn người dùng vãng lai tự ý truy cập xem danh sách đơn hàng hoặc thêm/sửa sản phẩm.
2. Bấm vào nút "⚙️ Quản Trị" sẽ hiển thị form/modal đăng nhập Admin công nghệ cao (Cyber Dark Glassmorphism) nếu chưa đăng nhập.
3. Nhập đúng tài khoản & mật khẩu quản trị viên ➔ Mở khóa toàn quyền quản trị và lưu phiên làm việc an toàn (Session Token).
4. Cung cấp nút "🚪 Đăng Xuất" để kết thúc phiên làm việc an toàn bất kỳ lúc nào.

---

## 2. Phạm vi công việc (Scope)

### A. Backend API (Node.js & Express)
1. **API Đăng nhập Admin:**
   * `POST /api/admin/login`: Nhận `{ username, password }`.
   * Kiểm tra thông tin đăng nhập quản trị viên (mặc định tài khoản: `admin`, mật khẩu an toàn được quản lý qua biến môi trường hoặc cấu hình bảo mật).
   * Trả về kết quả Envelope chuẩn theo `VIBE_CODING_RULES.md`:
     * Thành công: `{ success: true, token: "techstore_admin_...", admin: { username: "admin", role: "SUPER_ADMIN" } }`.
     * Thất bại: `{ success: false, message: "Tên đăng nhập hoặc mật khẩu không chính xác!" }`.
2. **API Kiểm tra phiên đăng nhập (Health check session):**
   * `GET /api/admin/verify`: Xác thực token gửi lên trong header `Authorization: Bearer <token>`.

### B. Frontend Quản trị (Vue 2.7 & Component)
1. **Giao diện Đăng nhập Admin (`AdminLoginModal.vue` / Tích hợp trong `AdminPortal.vue`):**
   * Thiết kế chuẩn Cyber Tech Dark Theme đồng bộ với toàn hệ thống.
   * Ô nhập Username, Password có icon bảo mật và nút bật/tắt ẩn hiện mật khẩu (`👁️`).
   * Hiển thị thông báo lỗi trực quan nếu nhập sai.
   * Nút bấm đăng nhập có hiệu ứng loading mượt mà.
2. **Quản lý trạng thái đăng nhập:**
   * Lưu token vào `localStorage` (`techstore_admin_token`).
   * Khi tải lại trang (F5) hoặc mở tab mới: Tự động duy trì trạng thái đăng nhập nếu token hợp lệ.
3. **Thanh Header Admin:**
   * Hiển thị badge: `🟢 Đang đăng nhập: Admin`.
   * Thêm nút `🚪 Đăng xuất`: Xóa sạch token khỏi `localStorage` và đưa giao diện về trạng thái khóa bảo mật.

---

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

- [ ] Chưa đăng nhập ➔ Bấm "⚙️ Quản Trị" ở Header sẽ hiển thị ngay màn hình khóa / Form Đăng nhập Admin, không để lộ bảng đơn hàng.
- [ ] Nhập sai tài khoản hoặc mật khẩu ➔ Hiển thị thông báo lỗi màu đỏ rõ ràng, không đăng nhập được.
- [ ] Nhập đúng tài khoản (`admin`) và mật khẩu ➔ Mở khóa tức thì vào trang Dashboard Quản Trị với đầy đủ KPI, Bảng đơn hàng và Form thêm sản phẩm.
- [ ] F5 (Tải lại trang) ➔ Hệ thống vẫn ghi nhớ trạng thái đã đăng nhập của Admin (không bắt đăng nhập lại).
- [ ] Bấm nút "🚪 Đăng xuất" ➔ Đăng xuất an toàn, khóa ngay quyền truy cập và đưa về giao diện Cửa Hàng.
- [ ] Giao diện form đăng nhập chuẩn responsive co giãn mượt mà từ Desktop tới Mobile 320px.
