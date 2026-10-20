# Project Brief: E-commerce Website

**Trạng thái:** Draft — Chờ xác nhận

## 1. Một câu

Website thương mại điện tử bán nhiều loại đồ điện tử, giúp khách hàng cá nhân mua sắm thuận tiện thông qua việc xem, tìm kiếm, lọc sản phẩm, quản lý giỏ hàng và đặt hàng với hình thức thanh toán khi nhận hàng (COD).

## 2. Người dùng

- **Người dùng chính:** Khách hàng cá nhân nói chung.
- **Người dùng quản trị:** Quản trị viên của shop.
- **Cách mua hàng hiện tại:** Chưa xác định.
- **Khó khăn cụ thể của khách hàng:** Chưa xác định ngoài nhu cầu mua hàng thuận tiện.

## 3. Việc chính

1. Khách hàng xem danh sách, danh mục, chi tiết sản phẩm; tìm kiếm và lọc sản phẩm.
2. Khách hàng thêm sản phẩm vào giỏ hàng, thay đổi số lượng, xóa sản phẩm và đặt hàng COD bằng thông tin người nhận, địa chỉ giao hàng.
3. Quản trị viên thêm, xem, sửa, xóa sản phẩm; xem đơn hàng và cập nhật trạng thái xử lý.

## 4. KHÔNG làm trong bản đầu

Các nội dung chưa được xác nhận hoặc chưa có yêu cầu cụ thể:

- Đăng ký, đăng nhập tài khoản khách hàng: không bắt buộc để mua hàng.
- Thanh toán trực tuyến: chưa có trong yêu cầu đã xác nhận; hình thức thanh toán được chọn là COD.
- Các chức năng khác như đánh giá sản phẩm, mã giảm giá, yêu thích, thông báo và tích hợp vận chuyển: chưa xác định, không tự động đưa vào phạm vi.
- Các chức năng quản trị ngoài quản lý sản phẩm và xử lý đơn hàng: chưa xác định.

## 5. Trang / màn hình

Các màn hình dự kiến theo những chức năng đã xác nhận:

- Trang danh sách sản phẩm và danh mục.
- Trang chi tiết sản phẩm.
- Khu vực giỏ hàng.
- Trang đặt hàng, nhập thông tin người nhận và địa chỉ giao hàng.
- Trang quản trị sản phẩm.
- Trang quản trị đơn hàng.

Cách bố trí cụ thể, cấu trúc điều hướng và danh sách màn hình con: chưa xác định.

## 6. Phong cách

- **Phong cách:** Hiện đại, tối giản, tập trung vào sản phẩm.
- **Màu sắc:** Chưa xác định.
- **Font chữ:** Chưa xác định.
- **Website tham khảo:** Chưa cung cấp.
- **Yêu cầu hiển thị:** Sử dụng được trên máy tính và điện thoại.

## 7. Ràng buộc kỹ thuật

- **Frontend:** Vue 2.
- **Backend:** Node.js (Express.js).
- **Lưu trữ dữ liệu MVP:** File JSON nội bộ (`data/products.json`, `data/orders.json`). Đảm bảo dữ liệu vẫn còn sau khi khởi động lại ứng dụng, không cần cài đặt database server phức tạp.
- **MySQL / Prisma:** Chuyển sang giai đoạn nâng cấp sau khi luồng mua hàng MVP đã chạy thông suốt.
- **Môi trường phát triển ban đầu:** Chạy trên máy tính cá nhân.
- **Đăng nhập khách hàng:** Không bắt buộc (mua hàng vãng lai - Guest checkout).
- **Thanh toán:** COD (thanh toán khi nhận hàng).
- **Bảo vệ trang quản trị:** Cơ chế xác thực và phân quyền chưa xác định.
- **Thư viện, framework backend, ORM, cách lưu ảnh và cấu hình môi trường:** Chưa xác định.
- **Dữ liệu mẫu và nguồn hình ảnh sản phẩm:** Chưa xác định.

## 8. Thế nào là xong (tiêu chí nghiệm thu)

- [ ] Khách hàng xem được danh sách và chi tiết sản phẩm.
- [ ] Chức năng tìm kiếm và lọc sản phẩm hoạt động đúng theo các tiêu chí đã thống nhất.
- [ ] Khách hàng thêm sản phẩm vào giỏ hàng, thay đổi số lượng và xóa sản phẩm được.
- [ ] Quản trị viên thêm, xem, sửa và xóa sản phẩm được.
- [ ] Quản trị viên xem đơn hàng và cập nhật trạng thái đơn được.
- [ ] Dữ liệu sản phẩm và đơn hàng vẫn còn sau khi khởi động lại ứng dụng.
- [ ] Giao diện sử dụng được trên máy tính và điện thoại.

**Lưu ý:** Đây là các tiêu chí nghiệm thu ở mức chức năng. Các điều kiện kiểm tra chi tiết, dữ liệu đầu vào, kết quả mong đợi và kích thước màn hình cụ thể sẽ được xác định sau khi brief được duyệt.
