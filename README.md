# ⚡ TechStore — Nền Tảng Thương Mại Điện Tử Thiết Bị Số & Công Nghệ

> Dự án E-commerce Full-Stack hoàn chỉnh được xây dựng và kiểm thử theo phương pháp **Vibe Coding** với kiến trúc 5 lát cắt (5 Slices). Kết nối trực tiếp cơ sở dữ liệu thực tế **Aiven Cloud MySQL** thông qua **Prisma ORM**.

---

## 🚀 Điểm Nhấn Nổi Bật

1. **Chuẩn phương pháp Vibe Coding:**
   - Dự án được chia nhỏ thành 5 lát cắt phát triển độc lập (Slices), mỗi lát cắt có tài liệu đặc tả, kiểm thử và nghiệm thu cụ thể (`docs/slice1.md` ➔ `docs/slice5.md`).
2. **Dữ liệu thật trên Cloud MySQL:**
   - Sử dụng **Aiven Cloud MySQL** được quản lý chặt chẽ bằng **Prisma ORM**.
   - Toàn bộ thao tác xem sản phẩm, đặt hàng COD và cập nhật trạng thái đơn được đồng bộ thời gian thực vào database đám mây.
3. **Giao diện Cyber Tech Dark Theme cao cấp:**
   - Thiết kế chuẩn công nghệ cao cấp, tương thích 100% màn hình từ Desktop màn ảnh rộng đến Mobile siêu nhỏ (320px – 375px).
   - Tự động chuyển đổi giao diện bảng sang **Card View** trên thiết bị di động.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

* **Frontend:**
  * **Vue 2.7** + **Vite** (Build cực nhanh, Hot Module Replacement tức thì).
  * **CSS thuần (Vanilla CSS Design System)**: Tối ưu hiệu năng, Glassmorphism, Micro-animations, Dark Mode đồng bộ.
  * **LocalStorage**: Lưu trữ giỏ hàng an toàn giữa các phiên duyệt web.
* **Backend:**
  * **Node.js** + **Express.js** RESTful API.
  * **Prisma ORM**: Định nghĩa schema, migrations và truy vấn dữ liệu an toàn kiểu (Type-safe).
* **Database:**
  * **Aiven Cloud MySQL** (Cơ sở dữ liệu đám mây bảo mật qua SSL).

---

## 🗺️ Hành Trình 5 Lát Cắt (5 Development Slices)

| Lát | Tên lát cắt | Trọng tâm công việc | Trạng thái |
| :---: | :--- | :--- | :---: |
| **Lát 1** | **Khởi tạo nền tảng (Foundation)** | Monorepo (Vue + Express), Health Check API, kết nối Aiven Cloud MySQL qua Prisma | 🟢 Hoàn thành |
| **Lát 2** | **Dữ liệu & API Sản phẩm (Catalog API)** | Schema Prisma, bảng `techstore_products`, REST API tra cứu, lọc và tìm kiếm | 🟢 Hoàn thành |
| **Lát 3** | **Giao diện Cửa hàng (Storefront UI)** | Lưới sản phẩm, bộ lọc danh mục, modal chi tiết thông số kỹ thuật (Specs Modal) | 🟢 Hoàn thành |
| **Lát 4** | **Giỏ hàng & Đặt hàng COD (Cart & Checkout)** | Drawer giỏ hàng, xác nhận thêm món, form thông tin COD, lưu đơn vào MySQL, modal thành công | 🟢 Hoàn thành |
| **Lát 5** | **Quản trị & Đóng gói (Admin Portal)** | Dashboard KPI doanh thu, bảng/card quản lý đơn hàng, đổi trạng thái đơn, thêm sản phẩm mới | 🟢 Hoàn thành |

---

## 📂 Cấu Trúc Thư Mục Dự Án

```
vibe/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma        # Schema định nghĩa bảng Product & Order
│   ├── src/
│   │   └── prisma.js            # Khởi tạo Prisma Client kết nối Aiven MySQL
│   ├── server.js                # Toàn bộ REST API Backend (Products, Orders, Health)
│   ├── package.json
│   └── .env                     # Chuỗi kết nối DATABASE_URL Aiven Cloud
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminPortal.vue        # Trang quản trị đơn hàng & thêm sản phẩm
│   │   │   ├── CartDrawer.vue         # Drawer giỏ hàng & form đặt COD
│   │   │   ├── OrderSuccessModal.vue  # Modal thông báo đặt hàng COD thành công
│   │   │   └── ProductModal.vue       # Modal thông số kỹ thuật & số lượng mua
│   │   ├── App.vue                    # Component gốc & Header chuyển Cửa Hàng ⟷ Quản Trị
│   │   ├── main.js
│   │   └── style.css                  # Toàn bộ Design System & biến màu sắc Dark Theme
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── docs/
    ├── PLAN.md                  # Kế hoạch tổng thể dự án
    ├── slice1.md ➔ slice5.md    # Tài liệu đặc tả & tiêu chí nghiệm thu từng lát cắt
```

---

## 🏃 Hướng Dẫn Khởi Chạy Dự Án

### 1. Khởi động Backend (Express API & Prisma)
```bash
cd backend
npm install
npm run dev
```
* Backend API hoạt động tại: `http://localhost:5000`
* Kiểm tra kết nối Aiven MySQL: `http://localhost:5000/api/health`

### 2. Khởi động Frontend (Vue 2 + Vite)
```bash
cd frontend
npm install
npm run dev
```
* Mở trình duyệt tại: `http://localhost:3000`

### 3. (Tùy chọn) Mở Prisma Studio để xem dữ liệu trực quan
```bash
cd backend
npx prisma studio
```
* Giao diện quản lý trực tiếp database tại: `http://localhost:5555`

---

## 📡 Danh Sách API Chính (Backend Endpoints)

| Method | Endpoint | Mô tả |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Kiểm tra nhịp tim hệ thống và độ trễ kết nối Aiven MySQL |
| `GET` | `/api/categories` | Lấy danh sách tất cả danh mục sản phẩm |
| `GET` | `/api/products` | Lấy danh sách sản phẩm (hỗ trợ `?category=...&search=...&sort=...`) |
| `GET` | `/api/products/:id` | Lấy thông tin chi tiết và thông số kỹ thuật 1 sản phẩm |
| `POST` | `/api/products` | Thêm sản phẩm mới vào MySQL (Dành cho Admin) |
| `POST` | `/api/orders` | Tạo đơn hàng mới với phương thức COD và lưu vào database |
| `GET` | `/api/orders` | Lấy toàn bộ danh sách đơn hàng đã đặt (Dành cho Admin) |
| `PATCH` | `/api/orders/:id/status` | Cập nhật trạng thái đơn (`PENDING`, `SHIPPED`, `DELIVERED`, `CANCELLED`) |

---

## 👨‍💻 Tác Quyền & Đóng Góp
Dự án được xây dựng bởi **Song Toàn** theo phương pháp **Vibe Coding** với sự hỗ trợ của trợ lý lập trình **Antigravity AI**.
Mọi mã nguồn đều sẵn sàng mở rộng và đóng gói cho các giai đoạn tiếp theo.
