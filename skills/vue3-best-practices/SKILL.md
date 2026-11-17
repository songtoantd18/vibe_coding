---
name: vue3-best-practices
description: Best practices for building robust, performant, and maintainable Vue 3 applications using Composition API, Script Setup, Tailwind CSS, and Pinia. Use when building or refactoring Vue components.
---

# Vue 3 Best Practices & Architecture Standards

Quy chuẩn kỹ thuật xây dựng ứng dụng Vue 3 hiện đại, sạch và tối ưu hiệu năng.

---

## 1. Cú pháp & Cấu trúc Component
- **Luôn dùng `<script setup lang="ts">` (hoặc `js`)**:
  - Tuyệt đối không dùng Options API cũ (`data()`, `methods:`, `computed:`).
  - Sử dụng Composition API với `ref()`, `reactive()`, `computed()`.
- **Đặt tên Component**:
  - Tên component phải là từ ghép (Multi-word) như: `ProductCard.vue`, `BrickList.vue`, `FilterDrawer.vue`.
  - Không đặt tên 1 từ đơn lẻ như `Card.vue`, `Table.vue` để tránh xung đột với thẻ HTML.
- **Props & Emits**:
  - Định nghĩa rõ kiểu dữ liệu và giá trị mặc định cho props: `defineProps<{ title: string; price: number }>()`.
  - Dùng `defineEmits<{ (e: 'update', id: string): void }>()`.

---

## 2. Quản lý trạng thái & Tối ưu hiệu năng
- **Reactivity đúng cách**:
  - Ưu tiên dùng `ref()` cho các biến nguyên thủy (string, number, boolean) và mảng.
  - Tránh gán đè trực tiếp một biến `reactive({ ... })` vì sẽ làm mất tính phản ứng; thay vào đó dùng `Object.assign()` hoặc `ref`.
- **Hạn chế tính toán thừa**:
  - Luôn bọc các phép lọc dữ liệu, tính tổng trong `computed()`, không tính toán trực tiếp trong template.
- **Vòng lặp `v-for`**:
  - Bắt buộc phải có thuộc tính `:key="item.id"`. Tuyệt đối không dùng `:key="index"` khi danh sách có tính năng thêm, xóa, sắp xếp.

---

## 3. Quản lý State toàn cục (State Management)
- Sử dụng **Pinia** cho trạng thái dùng chung toàn app, không dùng Vuex.
- Định nghĩa Store theo cú pháp Setup Store hiện đại (`defineStore('bricks', () => { ... })`).

---

## 4. Tích hợp UI & Style
- Ưu tiên sử dụng Tailwind CSS hoặc scoped styles `<style scoped>` để tránh rò rỉ CSS ra toàn bộ website.

