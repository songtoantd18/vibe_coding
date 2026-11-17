# GIẢI MÃ: VERCEL-LABS/AGENT-SKILLS & KHÁI NIỆM "AGENT SKILLS" TRONG LẬP TRÌNH AI

> **Liên kết tham khảo**: [https://github.com/vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)  
> **Hệ sinh thái đi kèm**: [https://github.com/vercel-labs/skills](https://github.com/vercel-labs/skills) | [skills.sh](https://skills.sh)

---

## 1. Tóm tắt nhanh: Đây là cái gì?

Nói một cách dân dã và dễ hiểu nhất:
* Nếu bạn coi các công cụ lập trình AI hiện nay (như **Cursor, Claude Code, Windsurf, GitHub Copilot, Antigravity**) là những **"Thực tập sinh AI thông minh nhưng còn non nớt"**.
* Thì **`vercel-labs/agent-skills`** chính là **"Bộ cẩm nang bí kíp / Bộ quy chuẩn đào tạo thực chiến"** do các kỹ sư hàng đầu của Vercel (công ty đứng sau Next.js) biên soạn.
* Khi bạn cài một "Skill" vào cho AI, con AI sẽ **ngay lập tức biết cách làm việc chuẩn mực như một kỹ sư Senior của Vercel**: từ cách viết code React tối ưu, cách thiết kế giao diện UI/UX đẹp mắt chuẩn accessibility, đến cách tối ưu hiệu năng website.

---

## 2. Bối cảnh: Tại sao lại sinh ra "Agent Skills"?

### Vấn đề của lập trình AI truyền thống
Trước đây, khi bạn yêu cầu AI viết code:
1. **Kiến thức chung chung**: AI được train trên dữ liệu khổng lồ của internet, nhưng trên internet thì có cả code chuẩn lẫn code rác, code cũ (outdated) lẫn code mới. AI rất dễ sinh code lỗi thời hoặc code chạy được nhưng hiệu năng kém.
2. **Hiện tượng "Mất trí" & Nhắc lại mệt mỏi**: Mỗi lần mở đoạn chat mới, bạn lại phải gõ một đoạn prompt dài ngoằng: *"Hãy viết React chuẩn TypeScript, không dùng any, chia nhỏ component, tuân thủ UI clean, không được re-render thừa..."*.
3. **Không đồng bộ trong đội ngũ**: Lập trình viên A ra lệnh cho AI một kiểu, lập trình viên B ra lệnh một kiểu, dẫn đến codebase của công ty trở thành một "nồi lẩu thập cẩm".

### Giải pháp: Chuẩn hóa "Agent Skills"
Thay vì nhắc đi nhắc lại thủ công, cộng đồng phát triển đưa ra khái niệm **Agent Skill**:
* Đóng gói toàn bộ kiến thức chuyên sâu, quy tắc (rules), quy trình (playbooks) và thậm chí là các script kiểm tra code vào một thư mục chuẩn (chứa file cốt lõi là `SKILL.md`).
* Bất cứ khi nào AI nhận nhiệm vụ, nó sẽ **tự động đọc "Skill" tương ứng** để tuân thủ 100% quy chuẩn mà không cần con người phải nhắc.

---

## 3. Khái niệm cốt lõi: "AI Agent" và "Skill" là gì?

```
┌─────────────────────────────────────────────────────────────┐
│                       AI CODING AGENT                       │
│    (Cursor, Claude Code, Windsurf, Codex, Antigravity...)   │
└──────────────────────────────┬──────────────────────────────┘
                               │
            Được trang bị thêm các "Kỹ năng chuyên môn"
                               ▼
 ┌────────────────────────────────────────────────────────────┐
 │              KHO KỸ NĂNG: vercel-labs/agent-skills         │
 ├────────────────────────────────────────────────────────────┤
 │  • react-best-practices      -> Viết code React đỉnh cao   │
 │  • web-design-guidelines     -> Thiết kế UI/UX & A11y chuẩn│
 │  • vercel-optimize           -> Tối ưu hiệu năng, caching  │
 │  • composition-patterns      -> Kiến trúc component sạch   │
 │  • react-view-transitions    -> Hiệu ứng chuyển cảnh mượt  │
 └────────────────────────────────────────────────────────────┘
```

1. **AI Agent (Đặc vụ AI)**: Không phải là chatbot thông thường chỉ biết gõ chữ trả lời, mà là AI có khả năng **hành động**: tự đọc file, tự tạo file, sửa code, chạy lệnh terminal, debug và chạy test trong dự án của bạn.
2. **Skill (Kỹ năng)**: Là một gói tài nguyên dạy cho Agent biết:
   * **Khi nào** nên áp dụng kỹ năng này?
   * **Cách tư duy** và các bước thực hiện từng công đoạn.
   * **Những điều cấm kỵ** (Anti-patterns) không được làm.
   * **Checklist kiểm tra** trước khi bàn giao code cho lập trình viên.

---

## 4. Trong kho `vercel-labs/agent-skills` có những kỹ năng gì?

Kho GitHub này của Vercel tập hợp các bộ kỹ năng thực chiến dành cho phát triển web hiện đại:

| Tên Skill | Mô tả chức năng | Giúp AI làm được gì? |
| :--- | :--- | :--- |
| **`web-design-guidelines`** | Bộ tiêu chuẩn thiết kế web | Dạy AI cách thiết kế giao diện: khoảng cách (spacing), typography, màu sắc tương phản, hỗ trợ người khuyết tật (A11y), responsive di động. |
| **`react-best-practices`** | Quy chuẩn lập trình React | Dạy AI cách tổ chức hook, tránh re-render vô ích, tối ưu memory, áp dụng React Server Components chuẩn chỉ. |
| **`vercel-optimize`** | Cẩm nang tối ưu Vercel | Dạy AI cách cấu hình Edge Middleware, Incremental Static Regeneration (ISR), Caching header, Image Optimization. |
| **`composition-patterns`** | Kiến trúc Component | Dạy AI cách chia nhỏ component (Compound components, Render props, Slots) để code dễ bảo trì, mở rộng. |
| **`react-view-transitions`**| Chuyển cảnh giao diện | Hướng dẫn AI cách dùng Web API `View Transitions` mới nhất để làm animation đổi trang mượt mà như app native. |
| **`react-native-guidelines`**| Lập trình di động | Bộ quy chuẩn tối ưu riêng cho ứng dụng mobile bằng React Native. |
| **`writing-guidelines`** | Phong cách hành văn | Dạy AI cách viết tài liệu kỹ thuật, thông báo lỗi (error messages), microcopy rõ ràng, chuyên nghiệp. |

---

## 5. Cách sử dụng trong thực tế: CLI `npx skills`

Vercel Labs không chỉ tạo ra các file tài liệu mà còn xây dựng một công cụ dòng lệnh (CLI) giống như `npm` dành riêng cho AI Agent, đó là **`npx skills`** (được ví như "NPM cho AI Skills"):

### Cài đặt một Skill vào AI của bạn:
Bạn mở terminal của dự án và chạy:

```bash
# Cài đặt bộ kỹ năng thiết kế Web vào Agent Claude Code hoặc Cursor
npx skills add vercel-labs/agent-skills --skill web-design-guidelines

# Hoặc cài toàn bộ các kỹ năng của Vercel
npx skills add vercel-labs/agent-skills
```

### Sử dụng tức thời (On-the-fly):
Nếu bạn chỉ muốn AI dùng kỹ năng này để rà soát một lần mà không muốn lưu cố định vào máy:
```bash
npx skills use vercel-labs/agent-skills@web-design-guidelines --agent claude-code
```

### Tìm kiếm kỹ năng khác từ cộng đồng:
```bash
npx skills find
```
*(Bạn có thể duyệt chợ kỹ năng toàn cầu tại trang web **[skills.sh](https://skills.sh)**)*.

---

## 6. Tại sao đây lại là tương lai của việc dùng AI Coding?

1. **Chuẩn hóa quy trình doanh nghiệp**: Công ty của bạn hoàn toàn có thể tự tạo một repo tương tự (ví dụ: `my-company/agent-skills`). Trong đó quy định: coding convention công ty, kiến trúc microservices nội bộ. Mọi lập trình viên mới vào chỉ cần bảo AI tải bộ skill đó về là AI tự code đúng chuẩn công ty.
2. **Tiết kiệm dung lượng bộ nhớ AI (Context Window)**: Thay vì nhồi nhét hàng nghìn dòng luật vào file prompt hệ thống khiến AI bị "ngợp", AI chỉ mở đúng file Skill cần thiết khi đụng tới tác vụ đó.
3. **Tương thích đa nền tảng**: Cùng một bộ Skill viết theo định dạng chuẩn, cả **Cursor, Claude Code, Windsurf, Copilot** đều có thể đọc hiểu và thực thi như nhau.

---

## 7. Tổng kết

* **`vercel-labs/agent-skills`** là kho tri thức mẫu mực được Vercel đóng gói sẵn để "nâng cấp trình độ" cho các công cụ AI Coding.
* Nó giúp biến AI từ một người "chỉ biết viết code chung chung" thành một "chuyên gia tuân thủ nghiêm ngặt các quy chuẩn kỹ thuật cao cấp của Next.js và Vercel".

