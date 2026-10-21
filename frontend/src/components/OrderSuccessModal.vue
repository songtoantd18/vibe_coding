<template>
  <div v-if="order" class="success-backdrop" @click.self="$emit('close')">
    <div class="success-dialog">
      <!-- Animated Check Icon -->
      <div class="success-icon-wrap">
        <div class="icon-circle">✓</div>
      </div>

      <h2 class="success-title">Đặt Hàng Thành Công!</h2>
      <p class="success-subtitle">
        Cảm ơn bạn đã tin tưởng mua sắm tại <strong>TechStore</strong>.
      </p>

      <!-- Order Details Card -->
      <div class="order-info-card">
        <div class="info-row">
          <span class="info-label">Mã đơn hàng:</span>
          <span class="order-code-badge">{{ order.orderCode }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Người nhận:</span>
          <span class="info-value font-bold">{{ order.customerName }} ({{ order.phone }})</span>
        </div>
        <div class="info-row">
          <span class="info-label">Địa chỉ giao hàng:</span>
          <span class="info-value">{{ order.address }}</span>
        </div>
        <div v-if="order.notes" class="info-row">
          <span class="info-label">Ghi chú:</span>
          <span class="info-value text-dim">{{ order.notes }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Hình thức thanh toán:</span>
          <span class="payment-tag">💵 COD (Thanh toán khi nhận hàng)</span>
        </div>
        <div class="info-row total-highlight">
          <span class="info-label">Tổng tiền COD:</span>
          <span class="final-total">{{ formatPrice(order.totalAmount) }}</span>
        </div>
      </div>

      <!-- Items List Brief -->
      <div v-if="order.items && order.items.length" class="order-items-preview">
        <h4>Sản phẩm đã đặt ({{ order.items.length }} món):</h4>
        <div class="items-list">
          <div v-for="item in order.items" :key="item.productId" class="mini-item">
            <span class="mini-item-name">{{ item.name }} <strong class="mini-item-qty">× {{ item.quantity }}</strong></span>
            <span class="mini-item-price">{{ formatPrice(item.price * item.quantity) }}</span>
          </div>
        </div>
      </div>

      <!-- Instruction Note -->
      <div class="notice-box">
        📞 Tổng đài viên TechStore sẽ liên hệ số <strong>{{ order.phone }}</strong> trong vòng 15–30 phút để xác nhận và chuẩn bị đóng gói giao hàng.
      </div>

      <!-- Action Button -->
      <button type="button" class="btn-done" @click="$emit('close')">
        Tiếp Tục Khám Phá Sản Phẩm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccessModal',
  props: {
    order: {
      type: Object,
      default: null
    }
  },
  methods: {
    formatPrice(val) {
      if (!val) return '0 đ';
      return Number(val).toLocaleString('vi-VN') + ' đ';
    }
  }
};
</script>

<style scoped>
.success-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 8, 17, 0.85);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.25s ease;
  box-sizing: border-box;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.success-dialog {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px 28px;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  animation: popIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
}

@keyframes popIn {
  from { transform: scale(0.92); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.success-icon-wrap {
  margin-bottom: 16px;
}

.icon-circle {
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  border-radius: 50%;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 0 24px rgba(16, 185, 129, 0.4);
}

.success-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 6px;
}

.success-subtitle {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.order-info-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 18px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  gap: 12px;
}

.info-label {
  color: var(--text-dim);
  flex-shrink: 0;
}

.info-value {
  color: var(--text-main);
  text-align: right;
  word-break: break-word;
}

.font-bold {
  font-weight: 700;
}

.order-code-badge {
  font-family: monospace;
  font-size: 1.05rem;
  font-weight: 800;
  background-color: rgba(56, 189, 248, 0.15);
  color: var(--color-accent);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 3px 10px;
  border-radius: 6px;
  word-break: break-all;
}

.payment-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-success);
}

.total-highlight {
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  padding-top: 12px;
  margin-top: 4px;
}

.final-total {
  font-size: 1.35rem;
  font-weight: 800;
  color: #38bdf8;
}

.order-items-preview {
  text-align: left;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  padding: 12px;
  margin-bottom: 18px;
}

.order-items-preview h4 {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  font-size: 0.825rem;
  color: var(--text-main);
}

.mini-item-name {
  flex: 1;
  word-break: break-word;
  line-height: 1.4;
}

.mini-item-qty {
  color: var(--color-accent);
  white-space: nowrap;
}

.mini-item-price {
  flex-shrink: 0;
  font-weight: 700;
  color: #38bdf8;
  white-space: nowrap;
}

.notice-box {
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: var(--radius-sm);
  padding: 12px;
  font-size: 0.825rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 22px;
  text-align: left;
  word-break: break-word;
}

.btn-done {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
}

.btn-done:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
}

/* ====================================================
   RESPONSIVE DESIGN (TABLET & MOBILE 320px - 480px)
   ==================================================== */
@media (max-width: 480px) {
  .success-backdrop {
    padding: 12px;
  }

  .success-dialog {
    padding: 22px 16px;
    max-height: 94vh;
    border-radius: 16px;
  }

  .icon-circle {
    width: 58px;
    height: 58px;
    font-size: 28px;
  }

  .success-title {
    font-size: 1.3rem;
  }

  .success-subtitle {
    font-size: 0.875rem;
    margin-bottom: 18px;
  }

  .order-info-card {
    padding: 14px 12px;
    gap: 12px;
    margin-bottom: 16px;
  }

  /* Responsive Info Rows: Stack vertically on small screens */
  .info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .info-label {
    font-size: 0.775rem;
    color: var(--text-dim);
  }

  .info-value {
    text-align: left;
    width: 100%;
    font-size: 0.85rem;
  }

  .order-code-badge {
    align-self: flex-start;
    font-size: 0.95rem;
  }

  .payment-tag {
    align-self: flex-start;
    font-size: 0.8rem;
  }

  /* Total price stays distinct on mobile */
  .info-row.total-highlight {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
  }

  .info-row.total-highlight .info-label {
    font-size: 0.85rem;
  }

  .final-total {
    font-size: 1.15rem;
  }

  .mini-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 6px 0;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
  }

  .mini-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .mini-item-price {
    align-self: flex-end;
    font-size: 0.825rem;
  }

  .notice-box {
    padding: 10px 12px;
    font-size: 0.775rem;
    margin-bottom: 16px;
  }

  .btn-done {
    padding: 12px;
    font-size: 0.875rem;
  }
}

/* Extra small mobile screens (320px - 340px) */
@media (max-width: 340px) {
  .success-backdrop {
    padding: 8px 6px;
  }

  .success-dialog {
    padding: 16px 10px;
    border-radius: 12px;
  }

  .success-title {
    font-size: 1.15rem;
  }

  .order-info-card {
    padding: 10px 8px;
    gap: 10px;
  }

  .final-total {
    font-size: 1.05rem;
  }
}
