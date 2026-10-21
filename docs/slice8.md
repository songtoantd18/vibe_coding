# Task: Slice 8 — Đánh Giá & Chấm Sao Sản Phẩm (Reviews & Ratings)

## 1. Mục tiêu (Goal)
Tăng độ tin cậy và trải nghiệm tương tác của khách hàng bằng hệ thống đánh giá sản phẩm thực tế:
1. Cho phép khách hàng chấm điểm từ 1 đến 5 sao (⭐) kèm tên và lời nhận xét chân thực cho từng sản phẩm.
2. Hiển thị điểm sao trung bình và số lượng đánh giá trực tiếp trên thẻ sản phẩm ở ngoài trang chủ (ví dụ: `⭐ 4.9 (18)`).
3. Trong modal chi tiết sản phẩm, cung cấp khu vực xem danh sách bình luận đã có và form viết đánh giá mới trực quan.
4. Đánh giá được lưu trữ vĩnh viễn trên Aiven Cloud MySQL và đồng bộ tức thì cho tất cả người dùng khác.

---

## 2. Phạm vi công việc (Scope)

### A. Database & Schema (Prisma + Aiven MySQL)
- Tạo mới model `Review` trong `schema.prisma`:
  ```prisma
  model Review {
    id        Int      @id @default(autoincrement())
    productId Int
    author    String
    rating    Int      // 1 đến 5
    comment   String   @db.Text
    createdAt DateTime @default(now())
    product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  }
  ```
- Chạy `npx prisma db push` để tạo bảng `techstore_reviews` trên Aiven MySQL.

### B. Backend API (Node.js & Express)
1. **API Lấy danh sách đánh giá của 1 sản phẩm:**
   * `GET /api/products/:id/reviews`: Trả về danh sách review mới nhất kèm điểm trung bình `averageRating` và `totalReviews`.
2. **API Gửi đánh giá mới:**
   * `POST /api/products/:id/reviews`: Nhận `{ author, rating, comment }`.
   * Validate: Tên người đánh giá không được để trống, rating nằm trong khoảng từ 1 đến 5, comment ít nhất 5 ký tự.
   * Lưu review vào MySQL và trả về dữ liệu vừa tạo.

### C. Frontend (Vue 2.7)
1. **Thẻ sản phẩm (`ProductCard.vue`):**
   * Hiển thị điểm sao trung bình màu vàng cam sang trọng bên cạnh giá tiền: `⭐ 4.8 (12 đánh giá)`.
2. **Modal chi tiết sản phẩm (`ProductModal.vue`):**
   * Thêm tab hoặc section "Đánh Giá & Nhận Xét":
     * Bộ chọn sao tương tác (Hover hoặc click để chọn từ 1 đến 5 sao).
     * Form gửi đánh giá (Tên khách hàng, nội dung nhận xét).
     * Danh sách các bình luận trước đó với ngày tháng và số sao trực quan.
3. **Phản hồi người dùng:**
   * Toast thông báo "Cảm ơn bạn đã gửi đánh giá!" sau khi gửi thành công.
   * Danh sách cập nhật tức thì không cần tải lại trang.

---

## 3. Tiêu chí nghiệm thu (Acceptance Criteria)
- [ ] Bảng `Review` được tạo trên Aiven MySQL và có quan hệ với `Product`.
- [ ] Thẻ sản phẩm hiển thị đúng điểm sao trung bình tính từ các đánh giá thực tế.
- [ ] Khách gửi đánh giá 5 sao kèm bình luận ➔ Lưu thành công vào DB và xuất hiện ngay lập tức trong modal.
- [ ] Có validate chặn gửi nếu chưa chọn số sao hoặc để trống tên.
- [ ] Giao diện chấm sao mượt mà, chuẩn Cyber Tech dark style đồng bộ.
