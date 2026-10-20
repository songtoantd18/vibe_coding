# Sổ tay dự án (NOTES.md): TechStore E-commerce

> 📌 **Mục đích file này:** Đây là "bộ nhớ ngoài" của bạn. Lưu lại những quyết định quan trọng, điều cấm, danh sách để sau và mẫu kiểm tra nhanh để khi mở phiên chat mới với AI, bạn không phải giải thích lại từ đầu.

---

## 1. Quyết định kỹ thuật đã chốt (Architectural Decisions)
- **Kiến trúc:** Monorepo gồm 2 thư mục độc lập `frontend/` và `backend/`.
- **Frontend:** Vue 2 (Vue 2.7 với Vite để chạy nhanh, nhẹ).
- **Backend:** Node.js với Express.js, CORS.
- **Lưu trữ MVP (Zero-config):** Dùng file JSON nội bộ (`backend/data/products.json`, `backend/data/orders.json`). Đảm bảo lưu vĩnh viễn trên ổ cứng, không cài database phức tạp ở giai đoạn 1.
- **Nâng cấp sau MVP:** Khi 5 lát cắt chạy trơn tru mới cài Prisma + MySQL.
- **Thanh toán:** COD (thanh toán khi nhận hàng), mua hàng vãng lai không cần đăng nhập.

---

## 2. Quy tắc cốt lõi khi làm việc với AI
1. **Lập kế hoạch trước:** Bắt AI trình bày kế hoạch các file sẽ sửa và chờ bạn duyệt trước khi viết code.
2. **Không tự bịa:** Thiếu thông tin (giá, cấu hình máy, số điện thoại) thì AI phải hỏi hoặc để chỗ trống, không tự điền bừa.
3. **Một phiên = Một lát cắt:** Xong 1 lát cắt -> Kiểm tra -> `git commit` checkpoint -> Mở phiên mới.
4. **Quy tắc 2 vòng:** AI sửa 1 lỗi quá 2 lần không được -> Dừng lại, quay về commit cũ (`git restore` hoặc `git revert`), mở phiên mới với mô tả lỗi 5 dòng.

---

## 3. Danh sách kiểm nhanh sau mỗi lần sửa (Regression Checklist)
*Chạy thử danh sách này mất 1-2 phút sau mỗi lần AI sửa code để đảm bảo không bị hỏng cái cũ:*
- [ ] Backend: Gọi `http://localhost:5000/api/health` trả về `{ "status": "ok" }`.
- [ ] Frontend: Trang mở bình thường trên trình duyệt, phím F12 Console không có chữ đỏ.
- [ ] Xem trên mobile (F12 chọn màn hình 375px): Không bị cuộn ngang, bố cục không vỡ.
- [ ] Tính năng chính của lát cắt hiện tại hoạt động đúng như mong đợi.

---

## 4. Những tính năng "ĐỂ SAU" (Backlog - Tránh phình phạm vi)
*Ghi vào đây khi bạn nảy ra ý tưởng mới trong lúc làm, KHÔNG đưa ngay vào MVP:*
- Đăng ký / Đăng nhập tài khoản khách hàng.
- Thanh toán online qua VNPay / MoMo / ZaloPay.
- Đánh giá sản phẩm, bình luận, điểm thưởng.
- Mã giảm giá (Voucher), bộ lọc nâng cao theo khoảng giá.
- Tích hợp đơn vị vận chuyển (Giao Hàng Nhanh, Viettel Post).
