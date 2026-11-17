rồi ví dụ tôi được giao đề bài là hãy làm phân tích hệ thống mua hàng của 1 công ty bán máy tính đi 
1./ reservation (đặt chỗ vật tư)
chúng ta cần xác đinh được  yêu cầu mua hàng này là thuộc loại nào vì có 2 loại thủ công ( ví dụ tôi muốn mua màn hình để dùng cho công việc của mình, hay mua bàn ghế hay furniture kiểu ấy , nhu cầu còn  người còn tự động ở đây là gì (có nghĩa là bên sản xuất lên kế hoạch sản xuât xi măng thì hệ thống tự kiểm tra và check là số lượng gần hết rồi nên hệ thống tự tạo luôn để phù hợp với sản xuất, cũng tương tự với (sale distribution,bên bán hàng, và bên bảo trì) (chỗ này chưa biết field nào là quan trọng bạn bổ sung thêm cho tôi ))ở đây cũng sẽ có 1 số trường cần thiết như số lượng, đơn vị tính
2./ tạo purchase request 
tại đây gom nhiều cái purchase requistiton vào thành 1 purchase request (cái này giống như gom nhóm lại để dễ quản lí, và phải có 1 cái là nhóm nào mua gì cụ thể , ví dụ bên nội thất thì sẽ có nhóm mua riêng, bên vật liệu là mua riêng chứ k thể gom 1 đơn mà có nội thất mà lại có nguyên vật liệu được ) khó quản lý 
sau khi duyệt xong sẽ duyệt qua các cấp doa các cấp level ở mỗi cấp sẽ có 1 khoảng tiền riêng ví dụ trưởng phòng duyệt được 20tr phó giám đóc được 80tr kiểu vậy
3./ RFQ (request for quotation) 
chúng ta sẽ tạo 1 bidding (đấu thầu ) từ purchase request ví dụ bên tôi muốn mua 10 cái laptop, thì tôi sẽ tạo 1 bidding để đấu thầu (nghĩa là gửi yêu cầu báo giá cho các bên ) để các bên cạnh tranh về giá cả , bảo hành,hậu mãi ,  để các bên đưa ra giá chào thầu, và sau khi xem x
4./ 
Tiêu chí
Giai đoạn Bidding (Đấu thầu / Mời thầu)
Giai đoạn Quotation (Nhập & Xử lý Báo giá)
Bản chất
Giai đoạn Mở gói thầu (Outgoing / Strategic Sourcing): Doanh nghiệp chủ động phát hành hồ sơ mời thầu ra thị trường [191, 325–326].
Giai đoạn Phản hồi & Xử lý (Incoming / Operational Execution): Dữ liệu báo giá do các Nhà cung cấp nộp về [326–327].
Chủ thể thực hiện
Phòng Thu mua / Hội đồng Đấu thầu của Doanh nghiệp.
Các Nhà cung cấp bên ngoài (Vendors) nộp vào hệ thống.
Nội dung xử lý
- Ban hành Hồ sơ Mời thầu (RFP / RFQ Package).<br>- Quy định Tiêu chí Đánh giá (Kỹ thuật 40%, Giá 60%).<br>- Quy định Hạn chót nộp thầu (Bidding Deadline).<br>- Danh sách NCC được mời tham gia [191, 325–326].
- Đơn giá, chiết khấu, điều kiện giao hàng của từng NCC [326–327].<br>- Bảng so sánh ma trận giá (Price Matrix - T-code ME49) [326–327].<br>- Kết quả Chấp nhận (Awarded) hay Từ chối (Rejected).
Hệ thống xử lý
Thường nằm trên Portal Mua hàng (Supplier Portal / E-Bidding Module) để NCC tương tác trực tiếp.
Nằm trực tiếp trong Lõi ERP (Core MM) để chuẩn bị sinh PO / Contract.
2. Lý do Kỹ thuật & Quản trị để Tách biệt 2 Phân hệ
A. Phân nhiệm & Kiểm soát An toàn Thông tin (Segregation of Duties & Security)
Quy tắc Chào giá Kín (Sealed Bidding): Trong quy trình Bidding chuẩn, khi gói thầu đang trong thời gian mở (Bidding Open), Nhà cung cấp A không được thấy giá của Nhà cung cấp B, và Ngay cả nhân viên Mua hàng nội bộ cũng KHÔNG ĐƯỢC XEM giá của các NCC cho đến khi chạm đúng thời điểm Mở thầu (Unsealing / Opening Date).
Việc tách riêng Module Bidding giúp hệ thống khóa dữ liệu báo giá kín cho đến khi kết thúc thời gian nộp thầu mới "xả" dữ liệu sang Module Quotation để Kế toán/Hội đồng thẩm định tiến hành mở thầu và so sánh [326–327].
B. Engine Trạng thái Chứng từ (Document State Engine) Riêng biệt

[Yêu cầu Mua hàng (PR)]
           │
           ▼
 ┌────────────────────────────────────────────────────────┐
 │ 1. MODULE BIDDING (Phòng Thu mua)                      │
 │    - Lập Gói thầu / Tiêu chí chấm điểm                 │
 │    - Phát hành Mời thầu (Publish RFQ)                  │
 └─────────────────────────┬──────────────────────────────┘
                           │
                           ▼
 ┌────────────────────────────────────────────────────────┐
 │ 2. SUPPLIER PORTAL (Dành cho các Nhà cung cấp)         │
 │    - NCC A, B, C nộp Báo giá kín (Quotations)          │
 └─────────────────────────┬──────────────────────────────┘
                           │ (Hết hạn nộp -> Mở thầu)
                           ▼
 ┌────────────────────────────────────────────────────────┐
 │ 3. MODULE QUOTATION & EVALUATION (Hội đồng Thẩm định)  │
 │    - Chấm điểm Kỹ thuật & So sánh Giá (ME49)           │
 │    - Chọn Báo giá Thắng (Accepted) & Từ chối (Rejected)│
 └─────────────────────────┬──────────────────────────────┘
                           │
                           ▼
 [LÕI ERP (MM Core): Tự động sinh PO / Hợp đồng (Contract)]



 1. PHÁT SINH NHU CẦU
   Sales Order / Production Order / Bảo trì / Phòng ban
                     |
                     v
2. KIỂM TRA TỒN KHO
   Reservation + ATP Check
          |
          +----------------------+
          |                      |
       Đủ hàng                Thiếu hàng
          |                      |
          v                      v
     Xuất kho sử dụng       3. TẠO PR
                            Purchase Requisition
                                   |
                                   v
                            4. PHÊ DUYỆT PR
                                   |
                                   v
                            5. TÌM NHÀ CUNG CẤP
                                   |
                         +---------+---------+
                         |                   |
                    Đã có giá             Chưa có giá
                         |                   |
                         |                   v
                         |             6. RFQ / BIDDING
                         |                   |
                         |                   v
                         |             7. QUOTATION
                         |                   |
                         |                   v
                         |             8. ĐÁNH GIÁ BÁO GIÁ
                         |                   |
                         +---------+---------+
                                   |
                                   v
                            9. TẠO PO
                                   |
                                   v
                            10. PHÊ DUYỆT PO
                                   |
                                   v
                            11. GỬI PO CHO NCC
                                   |
                                   v
                            12. NHẬN HÀNG / NGHIỆM THU
                                   |
                                   v
                            13. KIỂM TRA HÓA ĐƠN
                                   |
                                   v
                            14. THANH TOÁN
                                   |
                                   v
                            15. HOÀN TẤT QUY TRÌNH