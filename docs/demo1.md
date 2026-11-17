# Quy trình PR → PO (Mua hàng công ty bán máy tính)

> Phạm vi: từ lúc phát sinh nhu cầu đến lúc phát hành PO. Nhận hàng, hóa đơn, thanh toán nằm ngoài tài liệu này.
> Ghi chú: các ngưỡng tiền, trạng thái và quy tắc dưới đây là **đề xuất/giả định cho ví dụ**, cần xác nhận với doanh nghiệp.

## 1. Tổng quan luồng

```
[1. Nhu cầu] → [2. Kiểm tra tồn kho] → (đủ) → Xuất kho dùng
                      │
                    (thiếu)
                      ▼
               [3. Tạo PR] → [4. Duyệt PR] → [5. Xác định nguồn cung]
                                                   │
                                  ┌────────────────┴───────────────┐
                              Đã có giá/hợp đồng               Chưa có giá
                                  │                                │
                                  │                         [6. RFQ → Báo giá → Đánh giá]
                                  └────────────────┬───────────────┘
                                                   ▼
                                            [7. Tạo PO] → [8. Duyệt PO] → [9. Gửi PO cho NCC]
```

## 2. Chi tiết từng bước

### Bước 1–2. Phát sinh nhu cầu & kiểm tra tồn kho
| Loại nhu cầu | Nguồn | Ví dụ |
|---|---|---|
| Thủ công | Nhân viên/phòng ban | Mua màn hình, bàn ghế cho văn phòng |
| Tự động | Kế hoạch sản xuất/lắp ráp (MRP), đơn bán hàng giao thẳng từ NCC, bảo trì | Tồn linh kiện dưới mức tối thiểu → hệ thống tự đề xuất |

Quy tắc: nếu tồn kho khả dụng đủ thì xuất kho (có thể tạo reservation); chỉ **phần thiếu** mới sinh PR.

### Bước 3. Tạo PR (Purchase Requisition)
Trường quan trọng:
- **Header:** số PR, người yêu cầu, phòng ban, ngày tạo, loại nhu cầu (thủ công/tự động), nhóm hàng (Purchasing Group), trạng thái.
- **Item:** mã vật tư hoặc mô tả ngắn, **số lượng**, **đơn vị tính**, ngày cần hàng, plant/kho nhận, giá dự kiến, nguồn tham chiếu (đơn bán/lệnh SX/bảo trì), account assignment (nếu mua tiêu hao: cost center).

Quy tắc:
- PR chưa có giá trị pháp lý với NCC.
- Một PR có nhiều dòng; mỗi dòng có thể khác plant/ngày cần.
- Gom/tách theo nhóm hàng (nội thất riêng, vật tư riêng) là **chính sách đề xuất** để dễ quản lý; tiêu chí cụ thể cần hỏi khách hàng.

### Bước 4. Duyệt PR
Duyệt theo cấp, mỗi cấp một hạn mức (ví dụ minh họa):

| Cấp | Hạn mức duyệt |
|---|---|
| Trưởng phòng | đến 20 triệu |
| Phó giám đốc | đến 80 triệu |
| Giám đốc | trên 80 triệu |

Kết quả: Approved / Rejected (có lý do) / Returned (trả sửa).

### Bước 5. Xác định nguồn cung
Thứ tự ưu tiên đề xuất: Hợp đồng khung → Info Record (giá đã thỏa thuận) → PO gần nhất → nhập tay.
- Có nguồn và giá → bỏ qua RFQ, sang bước 7.
- Chưa có giá/mặt hàng mới/giá trị lớn → bước 6.
- NCC bị khóa (chất lượng kém) không được chọn.

### Bước 6. RFQ / Báo giá / Đánh giá (khi cần)
1. Tạo RFQ từ PR, gửi nhiều NCC, đặt hạn chót nộp.
2. NCC nộp báo giá (đơn giá, chiết khấu, phí vận chuyển, bảo hành, thời gian giao). Nếu đấu thầu kín: không ai xem giá trước ngày mở thầu.
3. Đánh giá: so sánh **tổng chi phí thực tế** (giá + vận chuyển + thuế − chiết khấu) cùng tiêu chí kỹ thuật, bảo hành, hậu mãi, tiến độ.
4. Chọn báo giá thắng; báo từ chối các NCC còn lại.

### Bước 7. Tạo PO (Purchase Order)
Trường quan trọng:
- **Header:** số PO, NCC, công ty/pháp nhân, tổ chức mua hàng, nhóm mua hàng, tiền tệ, điều khoản thanh toán, điều kiện giao hàng, trạng thái.
- **Item:** mã vật tư/mô tả, số lượng, đơn vị, đơn giá, thuế, plant/kho nhận, ngày giao, **tham chiếu PR (header+dòng) và báo giá**.

Quy tắc **số lượng mở (open quantity):**
```
Open Qty = SL trên dòng PR − Σ SL đã đặt trên các PO
```
- Không cho đặt vượt Open Qty.
- Cho phép tạo nhiều PO từng phần (VD: PR 10 laptop → PO 6 cho NCC A + PO 4 cho NCC B).
- Dòng PR chuyển Closed khi Open Qty = 0.

### Bước 8. Duyệt PO
- Theo ma trận hạn mức giá trị (tương tự bước 4, theo cấu hình doanh nghiệp).
- PO chưa duyệt: không được gửi NCC.
- Sửa PO đã duyệt làm tăng giá trị/số lượng vượt ngưỡng → số PO **giữ nguyên**, trạng thái quay về chờ duyệt, ghi lịch sử thay đổi.

### Bước 9. Gửi PO cho NCC
Gửi email/in/EDI; ghi nhận NCC xác nhận ngày giao.

## 3. Trạng thái chứng từ

**PR:** `Draft → Pending Approval → Approved → In Sourcing → Partially Ordered → Ordered/Closed`
(nhánh: `Rejected`, `Cancelled`)

**PO:** `Draft → Pending Approval → Released → Sent → (sang nhận hàng)`
(nhánh: `Blocked` khi sửa vượt ngưỡng, `Cancelled`)

Ràng buộc toàn vẹn:
- PR đã có RFQ/PO hoạt động: không xóa, không giảm số lượng dưới số đã đặt; muốn hủy phải đóng RFQ/PO liên quan trước.
- Báo giá đã nhận từ NCC không bị sửa, chỉ lưu tham khảo.
- Mọi chứng từ lưu ID chứng từ trước (PR → RFQ → Quotation → PO) để truy vết.

## 4. Ngoại lệ thường gặp
| Tình huống | Xử lý đề xuất |
|---|---|
| NCC chỉ đủ một phần hàng | Tạo PO từng phần, Open Qty còn lại chờ NCC khác |
| PR bị hủy khi đang chào giá | Chặn xóa; đóng RFQ trước |
| Giá báo giá cao hơn dự kiến PR | Cảnh báo, có thể yêu cầu duyệt thêm |
| Vượt hạn mức duyệt | Chuyển lên cấp cao hơn |
| NCC bị khóa | Chặn chọn NCC |

## 5. Câu hỏi cần hỏi khách hàng
1. Ngưỡng duyệt PR/PO theo cấp là bao nhiêu? Có duyệt song song/theo nhóm hàng không?
2. Khi nào bắt buộc RFQ (ngưỡng giá trị, mặt hàng mới)?
3. Tiêu chí gom PR thành PO: theo NCC, nhóm hàng, plant, hay ngày giao?
4. Có cho tạo PO từng phần và đóng dòng PR thủ công không?
5. PO chưa duyệt có được phép nhận hàng không?
