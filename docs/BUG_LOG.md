# Nhật ký lỗi & Cách xử lý (BUG_LOG.md)

> 🛡️ **Mục đích file này:** Ghi lại mọi lỗi hóc búa bạn và AI từng gặp phải. Đây là tài sản bảo hiểm giúp bạn và AI không bao giờ dẫm lại vết xe đổ cũ, đồng thời giúp AI mới nắm bắt được các cạm bẫy kỹ thuật của dự án.

---

## 1. Mẫu báo lỗi 5 dòng chuẩn (Dùng khi báo lỗi cho AI)
*Copy mẫu này khi gặp lỗi để AI chẩn đoán nguyên nhân thay vì đoán mò:*

```text
LỖI: [Một câu mô tả ngắn gọn lỗi gì xảy ra]
TÁI HIỆN: [Bước 1 -> Bước 2 -> Bước 3 để gây ra lỗi]
MONG ĐỢI: [Kết quả đúng đáng ra phải có]
THỰC TẾ: [Kết quả sai đang bị + Chép nguyên văn dòng lỗi đỏ ở F12 Console hoặc Terminal]
BỐI CẢNH: [Trình duyệt gì, lần cuối chạy đúng là khi nào, vừa sửa file gì xong]

Yêu cầu: Nêu 2-3 nguyên nhân có thể trước khi sửa code. Chỉ sửa file liên quan, không đụng file khác.
```

---

## 2. Bảng theo dõi lịch sử lỗi (Bug Tracking Table)

| STT | Lát cắt | Hiện tượng (Symptom) | Nguyên nhân gốc rễ (Root Cause) | Cách khắc phục & Phòng ngừa (Resolution) |
| :---: | :---: | :--- | :--- | :--- |
| *Ví dụ* | *Lát 1* | *Frontend gọi API `/api/health` báo lỗi đỏ CORS ở Console* | *Backend Express chưa bật middleware `cors()`* | *Cài `cors`, thêm `app.use(cors())` vào `backend/server.js`* |
| *(Trống)*| | *(Sẽ ghi thêm khi gặp lỗi trong quá trình làm)* | | |

---

## 3. Ba thất bại kinh điển cần cảnh giác
1. **AI xóa nhầm file:** Đừng bảo AI viết lại từ đầu. Dùng `git log --oneline` tìm commit cũ và khôi phục file bằng `git restore <tên-file>`.
2. **Deploy xong bị trang trắng (White Screen):** 90% do sai đường dẫn tài nguyên (dùng đường dẫn tuyệt đối máy tính `C:/...` thay vì đường dẫn tương đối `./`).
3. **Vòng xoáy sửa lỗi (Sửa 1 lỗi đẻ 3 lỗi):** Áp dụng quy tắc 2 vòng. Sửa 2 lần không được thì dừng ngay, hoàn tác code về commit gần nhất, mở phiên chat mới.
