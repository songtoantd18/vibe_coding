# Task: Slice 3 — Giao diện Cửa hàng (Frontend Catalog)

## 1. Mục tiêu (Goal)
Xây dựng giao diện danh mục sản phẩm hoàn chỉnh cho TechStore trên nền tảng **Vue 2.7 (Vite)**, kết nối trực tiếp với REST API Backend để hiển thị, tìm kiếm, lọc danh mục và xem bảng thông số kỹ thuật chi tiết của sản phẩm.

---

## 2. Phạm vi công việc (Scope)

### A. Giao diện Cửa hàng (Catalog UI)
1. **Thanh điều hướng & Đầu trang (Header & Banner):**
   - Logo thương hiệu TechStore, slogan công nghệ.
   - Thanh tìm kiếm sản phẩm thông minh (Search bar) với icon và nút xóa nhanh.
   - Thanh chọn danh mục (Category Tabs): `Tất cả`, `Điện thoại`, `Laptop`, `Phụ kiện`.

2. **Lưới thẻ sản phẩm (Product Grid):**
   - Hiển thị danh sách sản phẩm lấy từ `GET http://localhost:5000/api/products`.
   - Mỗi thẻ bao gồm:
     - Badge danh mục nổi bật.
     - Ảnh sản phẩm chất lượng cao (hiệu ứng hover phóng to nhẹ).
     - Tên sản phẩm rõ ràng, dễ đọc.
     - Giá bán định dạng chuẩn tiền tệ Việt Nam (`xx.xxx.xxx đ`).
     - Tóm tắt tính năng chính.
     - Nút **"Xem thông số"** và nút **"Chọn mua"**.

3. **Bảng Thông số kỹ thuật chi tiết (Product Specs Modal):**
   - Bấm vào thẻ sản phẩm hoặc nút "Xem thông số" -> Mở modal chi tiết.
   - Hiển thị bảng cấu hình 2 cột (Key - Value): Màn hình, Vi xử lý (CPU), Bộ nhớ RAM, Ổ cứng, Dung lượng Pin, Hệ thống Camera, Thời hạn bảo hành...
   - Có nút đóng modal (dấu X, bấm ra ngoài nền mờ, hoặc bấm phím Escape).

4. **Trạng thái rỗng & Đang tải (States):**
   - Hiển thị spinner đẹp mắt khi đang tải dữ liệu từ Backend.
   - Khi tìm kiếm từ khóa không có kết quả -> Hiển thị thông báo thân thiện *"Không tìm thấy sản phẩm phù hợp"* kèm gợi ý thử từ khóa khác.

5. **Chuẩn Responsive:**
   - Desktop: Lưới 3 cột rộng rãi.
   - Tablet: Lưới 2 cột.
   - Mobile 375px: Lưới 1 cột, phông chữ tối thiểu 16px, không bị cuộn ngang.

### B. KHÔNG làm trong Lát 3:
- Chưa làm lưu trữ giỏ hàng Vuex và trang checkout đặt hàng COD (dành riêng cho Lát 4).
- Chưa làm trang quản trị Admin thêm sửa xóa sản phẩm (dành riêng cho Lát 5).

---

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)

- [ ] Mở `http://localhost:3000` thấy hiển thị đủ 6 sản phẩm đồ điện tử từ Aiven MySQL.
- [ ] Giá tiền hiển thị chuẩn định dạng Việt Nam có dấu chấm và chữ đ (ví dụ: `25.990.000 đ`).
- [ ] Nhập từ khóa tìm kiếm (ví dụ "dell" hoặc "airpods") -> Lưới sản phẩm lọc đúng sản phẩm mong muốn.
- [ ] Bấm chọn danh mục "Laptop" -> Chỉ hiển thị các máy laptop. Bấm "Tất cả" -> Hiển thị lại toàn bộ 6 sản phẩm.
- [ ] Bấm vào sản phẩm -> Mở Modal hiển thị bảng thông số kỹ thuật 2 cột chi tiết.
- [ ] Bấm ra ngoài hoặc bấm nút X -> Đóng Modal mượt mà.
- [ ] Kiểm tra trên màn hình điện thoại (375px) không bị tràn khung, không cuộn ngang.
- [ ] Mở phím F12 Console hoàn toàn không có lỗi đỏ.
