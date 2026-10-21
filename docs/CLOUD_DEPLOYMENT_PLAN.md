# 📋 KẾ HOẠCH DEPLOY TOÀN DIỆN: CÁCH A (RENDER + VERCEL + AIVEN MYSQL)

> 🎯 **Mục tiêu:** Đưa toàn bộ hệ thống TechStore lên Internet chạy 24/7 vĩnh viễn, người dùng ở bất kỳ đâu cũng truy cập được qua link HTTPS công khai.
> 👤 **Dành cho người không biết kỹ thuật (Vibe Coding):** AI tự động chuẩn bị 100% cấu hình, code và hạ tầng. Bạn chỉ cần thực hiện 3 bước bấm chuột đơn giản trên giao diện web.

---

## 🏛️ 1. Bức Tranh Kiến Trúc: Các Thành Phần Kết Nối Như Thế Nào?

```
 [📱 Điện thoại / Máy tính Khách hàng]
                  │
                  ▼
   [🎨 FRONTEND - Vercel Cloud]
   Link: https://<tên-repo-hoặc-tùy-chọn>.vercel.app
   Nhiệm vụ: Chứa giao diện Vue 2, tải cực nhanh
                  │
                  │ (Gọi API qua biến VITE_API_URL)
                  ▼
   [⚙️ BACKEND - Render Cloud]
   Link: https://techstore-backend-<mã-ngẫu-nhiên>.onrender.com
   Nhiệm vụ: Chạy máy chủ Express Node.js 24/7 xử lý đơn hàng, sản phẩm
                  │
                  │ (Kết nối bảo mật SSL qua biến DATABASE_URL)
                  ▼
   [🗄️ DATABASE - Aiven Cloud MySQL]
   Nhiệm vụ: Két sắt lưu vĩnh viễn 8 sản phẩm & các đơn hàng COD
```

---

## 🤖 2. Phân Chia Công Việc: AI Tự Làm vs Bạn Làm Gì?

| Hạng mục | Ai làm? | Chi tiết công việc |
| :--- | :---: | :--- |
| **Cấu hình code Backend** | 🤖 AI làm 100% | Cấu hình `package.json`, Prisma build tự động, cổng PORT động, CORS mở. |
| **Cấu hình code Frontend** | 🤖 AI làm 100% | Viết `src/config/api.js` tự động nhận URL cloud, tạo `vercel.json` chống lỗi 404. |
| **Đóng gói & Đẩy lên GitHub** | 🤖 AI làm 100% | Đã push toàn bộ mã nguồn sạch lên `https://github.com/songtoantd18/vibe_coding`. |
| **Tạo Web Service trên Render** | 👤 Bạn click chuột (2 phút) | Đăng nhập Render bằng GitHub, chọn repo, dán chuỗi kết nối MySQL. |
| **Tạo Website trên Vercel** | 👤 Bạn click chuột (1 phút) | Đăng nhập Vercel bằng GitHub, chọn repo, dán link Render vào là xong. |

---

## 👣 3. Chi Tiết Từng Bước Thực Hiện

### GIAI ĐOẠN 1: BẬT BACKEND TRÊN RENDER (2 PHÚT)
1. **Truy cập:** Mở trình duyệt vào [https://render.com](https://render.com) ➔ Bấm **Sign In** ➔ Chọn **Continue with GitHub**.
2. **Tạo dịch vụ:** Bấm nút **"New +"** (màu xanh góc phải) ➔ Chọn **"Web Service"**.
3. **Chọn mã nguồn:** Chọn repository **`songtoantd18/vibe_coding`** ➔ Bấm **Connect**.
4. **Điền 5 ô đơn giản:**
   * **Name:** `techstore-backend`
   * **Region:** `Singapore`
   * **Root Directory:** `backend`
   * **Build Command:** `npm install && npm run build`
   * **Start Command:** `npm start`
   * **Instance Type:** Chọn ô `Free` ($0/tháng)
5. **Cắm kết nối Database:** Kéo xuống phần **Environment Variables** ➔ Bấm **Add Environment Variable**:
   * Ô bên trái (Key): Gõ `DATABASE_URL`
   * Ô bên phải (Value): Dán chuỗi kết nối Aiven MySQL trong file `backend/.env` của bạn.
6. **Kích hoạt:** Bấm nút **"Create Web Service"**.
   * Render sẽ tự động dựng server trong 1–2 phút.
   * Xong xuôi, Render cấp cho bạn link Backend, ví dụ:  
     👉 **`https://techstore-backend-xxxx.onrender.com`**

---

### GIAI ĐOẠN 2: BẬT FRONTEND TRÊN VERCEL (1 PHÚT)
1. **Truy cập:** Mở [https://vercel.com](https://vercel.com) ➔ Đăng nhập bằng GitHub.
2. **Thêm dự án:** Bấm **"Add New..."** ➔ Chọn **"Project"** ➔ Bấm **Import** repo `vibe_coding`.
3. **Cấu hình thư mục:**
   * Tại mục **Root Directory**, bấm nút **Edit** ➔ Gõ hoặc chọn thư mục: `frontend`.
4. **Kết nối về Backend:** Mở rộng phần **Environment Variables**:
   * Key: `VITE_API_URL`
   * Value: Dán link Render vừa có ở Giai đoạn 1 (Ví dụ: `https://techstore-backend-xxxx.onrender.com`).
5. **Kích hoạt:** Bấm **"Deploy"**.
   * Vercel tự động build trong 30 giây và bắn pháo hoa chúc mừng!
   * Cấp cho bạn đường link website chính thức, ví dụ:  
     👉 **`https://vibe-coding-xxxx.vercel.app`**

---

### GIAI ĐOẠN 3: NGHIỆM THU TRỰC TIẾP TRÊN INTERNET
1. Lấy điện thoại thật mở đường link Vercel.
2. Thử duyệt sản phẩm, bấm "Chọn mua", nhập họ tên đặt đơn COD.
3. Chuyển sang tab **⚙️ Quản Trị** kiểm tra đơn mới và cập nhật trạng thái.
4. Mọi thứ hoạt động hoàn hảo 24/7 kể cả khi bạn tắt hoàn toàn máy tính cá nhân!
