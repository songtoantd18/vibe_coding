# 🚀 Hướng Dẫn Deploy Lên Cloud (Internet Công Khai)

Tài liệu hướng dẫn chi tiết từng bước đưa hệ thống **TechStore Full-Stack** lên Internet hoàn toàn miễn phí:
* **Database:** Đang chạy sẵn trên **Aiven Cloud MySQL** (không cần làm gì thêm).
* **Backend API:** Deploy lên **Render.com** (hoặc **Railway**).
* **Frontend:** Deploy lên **Vercel** (hoặc **Netlify**).

---

## 📦 Bước 1: Deploy Backend lên Render (Express + Prisma)

1. Truy cập [https://render.com](https://render.com) và đăng nhập bằng tài khoản GitHub.
2. Bấm nút **"New +"** ➔ Chọn **"Web Service"**.
3. Chọn repository GitHub chứa dự án `vibe` của bạn.
4. Điền các thông số cấu hình:
   * **Name:** `techstore-backend` (hoặc tên tùy thích)
   * **Region:** `Singapore` (để gần Aiven Cloud và Việt Nam nhất, độ trễ thấp)
   * **Root Directory:** `backend`
   * **Environment:** `Node`
   * **Build Command:** `npm install && npm run build`
   * **Start Command:** `npm start`
   * **Instance Type:** `Free`
5. Thêm biến môi trường (**Environment Variables**):
   * Key: `DATABASE_URL`
   * Value: `mysql://avnadmin:<YOUR_AIVEN_PASSWORD>@mysql-nestjs12ff5041-mysqlnestjs.h.aivencloud.com:15462/techstore_db?ssl-mode=REQUIRED` *(Sao chép chính xác từ file `backend/.env` của bạn)*
6. Bấm **"Create Web Service"**.
   * Render sẽ tự động clone mã nguồn, chạy `prisma generate` và khởi động server Express.
   * Sau khi hoàn tất, Render sẽ cấp cho bạn một URL có dạng:  
     👉 **`https://techstore-backend-xxxx.onrender.com`**
7. Kiểm tra kết nối: Mở trình duyệt gõ `https://techstore-backend-xxxx.onrender.com/api/health` ➔ Thấy trả về `status: "ok"` là Backend đã sẵn sàng!

---

## 🎨 Bước 2: Deploy Frontend lên Vercel (Vue 2 + Vite)

1. Truy cập [https://vercel.com](https://vercel.com) và đăng nhập bằng GitHub.
2. Bấm **"Add New..."** ➔ Chọn **"Project"**.
3. Chọn repository `vibe`.
4. Điền cấu hình dự án:
   * **Framework Preset:** `Vite`
   * **Root Directory:** Bấm **Edit** và chọn thư mục `frontend`.
   * **Build and Output Settings:** Giữ mặc định (`npm run build` và thư mục `dist`).
5. Thêm biến môi trường (**Environment Variables**):
   * Key: `VITE_API_URL`
   * Value: Dán URL Backend Render vừa có ở Bước 1 (Ví dụ: `https://techstore-backend-xxxx.onrender.com` — *Lưu ý: Không thêm dấu `/` ở cuối*).
6. Bấm **"Deploy"**.
   * Vercel sẽ tự động build Vite trong khoảng 30–45 giây và cấp cho bạn một tên miền HTTPS miễn phí cực đẹp, ví dụ:  
     👉 **`https://techstore-vibe.vercel.app`**

---

## ✅ Bước 3: Nghiệm thu trên Internet

1. Mở link Vercel trên máy tính hoặc điện thoại bất kỳ.
2. Thử đặt 1 đơn hàng COD trên điện thoại thật.
3. Chuyển sang tab **Quản Trị**: Xem đơn hàng mới xuất hiện ngay lập tức và thử cập nhật trạng thái đơn sang **"Đang giao"**.
4. Mọi dữ liệu được đồng bộ xuyên suốt từ Điện thoại ➔ Vercel ➔ Render API ➔ Aiven Cloud MySQL!
