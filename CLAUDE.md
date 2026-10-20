# Chỉ thị dành cho AI Agent (CLAUDE.md / AGENTS.md)

> 🤖 **Dành riêng cho AI:** File này quy định các nguyên tắc bất biến mà mọi AI Agent phải tuân thủ khi làm việc trong repository này. Hãy đọc kỹ trước khi đề xuất bất kỳ dòng code nào.

---

## 1. Tổng quan dự án
- **Dự án:** TechStore — Website thương mại điện tử bán đồ điện tử (MVP Demo).
- **Mục tiêu hiện tại:** Xây dựng sản phẩm theo phương pháp Vibe Coding, tuân thủ nghiêm ngặt 5 lát cắt trong [PLAN.md](PLAN.md).
- **Cấu trúc thư mục:**
  - `frontend/`: Ứng dụng client Vue 2.7 (dùng Vite để build/dev).
  - `backend/`: API server Node.js + Express.
  - `backend/prisma/`: Chứa file `schema.prisma` và script seed dữ liệu kết nối Aiven Cloud MySQL (`techstore_db`).

---

## 2. Quy tắc ứng xử bắt buộc của AI
1. **Lập kế hoạch trước khi code (Plan First):** 
   - Với mọi yêu cầu lớn, AI phải liệt kê danh sách file dự kiến tạo/sửa và tóm tắt giải pháp trước. Chỉ tiến hành khi người dùng phê duyệt.
2. **Tuân thủ ranh giới lát cắt (Slice Boundary):** 
   - Đang làm lát nào chỉ tập trung vào lát đó. Ví dụ: Đang làm Lát 1 (Foundation) thì **nghiêm cấm** viết trước giỏ hàng, form đặt hàng hay danh mục sản phẩm.
3. **Không bịa đặt (No Hallucination):** 
   - Không tự ý bịa giá tiền, thông số kỹ thuật (RAM, CPU, Pin) không có thật. Dùng cấu trúc chuẩn và để placeholder hoặc hỏi người dùng.
4. **Không tự ý cài thêm thư viện:** 
   - Mọi package npm mới (ngoài Express, CORS, Vue 2, Vite, Vuex) đều phải giải thích lý do và hỏi ý kiến trước khi cài.
5. **Bảo toàn code cũ (Regression Prevention):** 
   - Khi sửa lỗi, chỉ sửa tối thiểu trong phạm vi cho phép. Tuyệt đối không xóa code cũ hoặc sửa test để "lách" cho test pass.

---

## 3. Các lệnh cơ bản dự kiến (Development Commands)
- **Backend:**
  - Cài đặt: `cd backend && npm install`
  - Chạy cả Server và Prisma Studio song song: `npm run dev` (Express tại :5000 và Studio tại :5555)
  - Chạy riêng Server: `npm run server`
  - Chạy riêng Prisma Studio: `npm run studio`
  - Health check: `GET http://localhost:5000/api/health`
- **Frontend:**
  - Cài đặt: `cd frontend && npm install`
  - Chạy dev server: `npm run dev` (chạy trên cổng `3000` hoặc `8080`)
- **Git Checkpoint:**
  - Xem thay đổi: `git status` và `git diff`
  - Tuyệt đối không tự ý chạy `git reset --hard` hay `git push --force`.
