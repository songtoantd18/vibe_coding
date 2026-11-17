---
name: web-design-guidelines
description: Review and audit UI code against Vercel's Web Interface Guidelines. Use when asked to review UI, build interfaces, audit accessibility, or evaluate components against modern web best practices.
---

# Web Interface Guidelines (Vercel Standard)

Bộ quy chuẩn kỹ thuật thiết kế giao diện Web hiện đại, tập trung vào tính khả dụng (Usability), độ mượt (UX), và chuẩn tiếp cận người khuyết tật (Accessibility - a11y).

---

## 1. Biểu mẫu & Tương tác gửi dữ liệu (Forms & Submissions)
- **Không bao giờ khóa nút Submit trước khi nhập (No Pre-disabling Submit)**: 
  - Nút bấm gửi form (Submit) luôn phải ở trạng thái bấm được. 
  - Cho phép người dùng bấm thử để hệ thống kích hoạt thông báo lỗi cụ thể (inline validation), thay vì để nút xám ngoét khiến người dùng không hiểu vì sao chưa bấm được.
- **Trạng thái đang gửi (In-flight Request)**:
  - Khi bắt đầu gửi: Khóa nút lại, hiển thị vòng xoay tải trang (loading spinner), đổi chữ thành "Đang lưu..." hoặc "Đang xử lý...".
  - Chống bấm đúp (Debounce / Idempotency): Ngăn người dùng vô tình bấm 2 lần sinh 2 đơn hàng.
- **Không chặn người dùng gõ phím (Never Block Typing)**:
  - Trong các ô nhập số điện thoại hoặc số lượng, cho phép gõ tự do và báo lỗi "Chỉ được nhập số" phía dưới, TUYỆT ĐỐI không dùng code để chặn không cho gõ phím vì sẽ gây ức chế và tưởng liệt bàn phím.

---

## 2. Chuẩn tiếp cận (Accessibility - a11y) & Bàn phím
- **Nút bấm chỉ có Icon (Icon-only Buttons)**:
  - Bắt buộc phải có thuộc tính `aria-label` mô tả chức năng.
  - *Ví dụ*: `<button aria-label="Xóa sản phẩm"><TrashIcon /></button>`.
- **Loại bỏ vùng chết (No Dead Zones)**:
  - Với checkbox hoặc radio button, khi bấm vào dòng chữ mô tả (Label) thì checkbox phải tự động được chọn.
  - Luôn bọc thẻ `<label>` hoặc dùng thuộc tính `for="id_input"`.
- **Hỗ trợ bàn phím (Keyboard Navigation)**:
  - Mọi nút, dropdown, modal phải thao tác được bằng phím `Tab`, `Enter`, `Escape`.
  - Giữ lại đường viền nổi bật khi dùng phím (`focus-visible:ring-2`), không xóa viền focus mặc định.

---

## 3. Nội dung, Số liệu & Trình bày (Typography & Numbers)
- **Ưu tiên gợi ý trực tiếp (Inline Helpers over Tooltips)**:
  - Viết câu hướng dẫn rõ ràng ngay dưới ô nhập liệu. Không giấu thông tin quan trọng vào icon dấu hỏi `(?)` bắt người dùng phải rê chuột vào mới thấy.
- **Hiển thị số liệu so sánh (Tabular Numbers)**:
  - Khi hiển thị giá tiền, số lượng hoặc số dư tài khoản trên bảng: luôn bật CSS `font-variant-numeric: tabular-nums` để các chữ số có độ rộng bằng nhau, giúp các hàng thẳng cột đều tăm tắp.
- **Khung xương chờ tải (Stable Skeletons)**:
  - Chiều cao và kích thước của Skeleton (hiệu ứng nhấp nháy khi tải dữ liệu) phải khớp 100% với kích thước của thẻ sản phẩm thật, tránh hiện tượng giật màn hình (Cumulative Layout Shift - CLS) khi dữ liệu tải xong.

---

## 4. Bố cục & Khoảng cách (Spacing & Layout)
- Tuân thủ thang tỷ lệ chia hết cho 4 hoặc 8 (ví dụ: `gap-2` (8px), `gap-4` (16px), `gap-6` (24px)).
- Đảm bảo vùng bấm trên điện thoại (Touch Target) tối thiểu là `44px x 44px`.

