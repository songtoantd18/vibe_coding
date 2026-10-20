<template>
  <div v-if="product" class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-dialog">
      <!-- Modal Header -->
      <div class="modal-header">
        <div class="modal-title-wrap">
          <span class="modal-category">{{ product.category }}</span>
          <h2 class="modal-title">{{ product.name }}</h2>
        </div>
        <button type="button" class="btn-close" aria-label="Đóng" @click="$emit('close')">
          ✕
        </button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <!-- Left: Image & Quick Info -->
        <div class="modal-media-col">
          <div class="modal-image-wrap">
            <img :src="product.image" :alt="product.name" class="modal-image" />
          </div>
          <div class="modal-price-box">
            <span class="modal-price-label">Giá niêm yết:</span>
            <span class="modal-price-val">{{ formatPrice(product.price) }}</span>
            <div class="guarantee-badge">
              <span>🛡️ Chính hãng 100% • Hỗ trợ COD toàn quốc</span>
            </div>
          </div>
          <button type="button" class="btn-buy-modal" @click="$emit('buy-click', product)">
            🛒 Thêm Vào Giỏ Hàng
          </button>
        </div>

        <!-- Right: Description & Specs Table -->
        <div class="modal-info-col">
          <!-- Description -->
          <div class="info-section">
            <h3 class="section-title">Đặc điểm nổi bật</h3>
            <p class="modal-desc">{{ product.description }}</p>
          </div>

          <!-- Specs Table (Bảng 2 cột chuẩn kỹ thuật) -->
          <div v-if="product.specs" class="info-section">
            <h3 class="section-title">Bảng Thông Số Kỹ Thuật Chi Tiết</h3>
            <div class="specs-table-container">
              <table class="specs-table">
                <tbody>
                  <tr v-if="product.specs.screen">
                    <td class="spec-label">Màn hình</td>
                    <td class="spec-value">{{ product.specs.screen }}</td>
                  </tr>
                  <tr v-if="product.specs.cpu">
                    <td class="spec-label">Bộ vi xử lý (CPU)</td>
                    <td class="spec-value highlight">{{ product.specs.cpu }}</td>
                  </tr>
                  <tr v-if="product.specs.ram">
                    <td class="spec-label">Bộ nhớ RAM</td>
                    <td class="spec-value">{{ product.specs.ram }}</td>
                  </tr>
                  <tr v-if="product.specs.storage">
                    <td class="spec-label">Ổ cứng / Bộ nhớ</td>
                    <td class="spec-value">{{ product.specs.storage }}</td>
                  </tr>
                  <tr v-if="product.specs.camera">
                    <td class="spec-label">Camera</td>
                    <td class="spec-value">{{ product.specs.camera }}</td>
                  </tr>
                  <tr v-if="product.specs.battery">
                    <td class="spec-label">Dung lượng Pin & Sạc</td>
                    <td class="spec-value">{{ product.specs.battery }}</td>
                  </tr>
                  <tr v-if="product.specs.weight">
                    <td class="spec-label">Trọng lượng</td>
                    <td class="spec-value">{{ product.specs.weight }}</td>
                  </tr>
                  <tr v-if="product.specs.connectivity">
                    <td class="spec-label">Kết nối & Cổng giao tiếp</td>
                    <td class="spec-value">{{ product.specs.connectivity }}</td>
                  </tr>
                  <tr v-if="product.specs.features">
                    <td class="spec-label">Tính năng đặc biệt</td>
                    <td class="spec-value">{{ product.specs.features }}</td>
                  </tr>
                  <tr v-if="product.specs.switch">
                    <td class="spec-label">Loại Switch</td>
                    <td class="spec-value">{{ product.specs.switch }}</td>
                  </tr>
                  <tr v-if="product.specs.layout">
                    <td class="spec-label">Layout phím</td>
                    <td class="spec-value">{{ product.specs.layout }}</td>
                  </tr>
                  <tr v-if="product.specs.compatibility">
                    <td class="spec-label">Tương thích HĐH</td>
                    <td class="spec-value">{{ product.specs.compatibility }}</td>
                  </tr>
                  <tr v-if="product.specs.warranty">
                    <td class="spec-label">Chế độ bảo hành</td>
                    <td class="spec-value text-accent">{{ product.specs.warranty }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductModal',
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    formatPrice(val) {
      if (!val) return '0 đ';
      return Number(val).toLocaleString('vi-VN') + ' đ';
    },
    handleKeyDown(e) {
      if (e.key === 'Escape') {
        this.$emit('close');
      }
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 8, 17, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-dialog {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

@keyframes slideUp {
  from { transform: translateY(20px) scale(0.98); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
}

.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  background-color: var(--bg-secondary);
}

.modal-category {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
  display: block;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.3;
}

.btn-close {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 16px;
  flex-shrink: 0;
}

.btn-close:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 28px;
}

.modal-media-col {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.modal-image-wrap {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: var(--radius-md);
  overflow: hidden;
  background-color: #050811;
  border: 1px solid var(--border-color);
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-price-box {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 14px 16px;
}

.modal-price-label {
  font-size: 0.8rem;
  color: var(--text-dim);
  display: block;
  margin-bottom: 2px;
}

.modal-price-val {
  font-size: 1.5rem;
  font-weight: 800;
  color: #38bdf8;
  display: block;
  margin-bottom: 8px;
}

.guarantee-badge {
  font-size: 0.75rem;
  color: var(--color-success);
  line-height: 1.4;
}

.btn-buy-modal {
  padding: 14px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
}

.btn-buy-modal:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
}

.modal-info-col {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.section-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.modal-desc {
  font-size: 0.9rem;
  color: var(--text-main);
  line-height: 1.6;
}

.specs-table-container {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.specs-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.specs-table tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.specs-table tr:last-child {
  border-bottom: none;
}

.specs-table tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.02);
}

.spec-label {
  padding: 10px 14px;
  width: 40%;
  color: var(--text-dim);
  font-weight: 500;
  vertical-align: top;
}

.spec-value {
  padding: 10px 14px;
  width: 60%;
  color: var(--text-main);
  font-weight: 600;
}

.spec-value.highlight {
  color: #38bdf8;
}

.text-accent {
  color: var(--color-success);
}

@media (max-width: 768px) {
  .modal-body {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
