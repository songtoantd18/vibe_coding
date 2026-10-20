<template>
  <div v-if="isOpen" class="drawer-backdrop" @click.self="$emit('close')">
    <div class="drawer-container">
      <!-- Drawer Header -->
      <div class="drawer-header">
        <div class="drawer-title-wrap">
          <span class="drawer-icon">🛒</span>
          <h2 class="drawer-title">Giỏ Hàng Của Bạn</h2>
          <span class="item-count-badge">{{ totalItems }} món</span>
        </div>
        <button type="button" class="btn-close-drawer" aria-label="Đóng" @click="$emit('close')">
          ✕
        </button>
      </div>

      <!-- Drawer Body -->
      <div class="drawer-body">
        <!-- Empty Cart View -->
        <div v-if="cart.length === 0" class="empty-cart-view">
          <div class="empty-cart-icon">🛍️</div>
          <h3>Giỏ hàng đang trống</h3>
          <p>Bạn chưa chọn sản phẩm nào. Hãy khám phá danh mục và chọn sản phẩm ưng ý nhé!</p>
          <button type="button" class="btn-continue" @click="$emit('close')">
            Tiếp Tục Mua Sắm
          </button>
        </div>

        <!-- Cart Has Items View -->
        <div v-else class="cart-content">
          <!-- Items List -->
          <div class="cart-items-list">
            <div v-for="item in cart" :key="item.productId" class="cart-item">
              <img :src="item.image" :alt="item.name" class="item-thumb" />
              <div class="item-info">
                <h4 class="item-name" :title="item.name">{{ item.name }}</h4>
                <div class="item-unit-price">{{ formatPrice(item.price) }}</div>
                <div class="qty-and-subtotal">
                  <div class="qty-controls">
                    <button 
                      type="button" 
                      class="btn-qty" 
                      :disabled="item.quantity <= 1"
                      @click="$emit('decrease-qty', item.productId)"
                    >
                      −
                    </button>
                    <span class="qty-num">{{ item.quantity }}</span>
                    <button 
                      type="button" 
                      class="btn-qty" 
                      @click="$emit('increase-qty', item.productId)"
                    >
                      +
                    </button>
                  </div>
                  <span class="item-subtotal">{{ formatPrice(item.price * item.quantity) }}</span>
                </div>
              </div>
              <button 
                type="button" 
                class="btn-remove" 
                title="Xóa món này" 
                @click="$emit('remove-item', item.productId)"
              >
                🗑️
              </button>
            </div>
          </div>

          <!-- Checkout Form Section (COD) -->
          <div class="checkout-form-section">
            <h3 class="checkout-title">Thông Tin Giao Hàng (COD)</h3>
            <p class="checkout-subtitle">Thanh toán tiền mặt khi nhận hàng tận nơi</p>

            <form @submit.prevent="submitOrder">
              <!-- Name -->
              <div class="form-group">
                <label for="order-name">Họ và tên người nhận <span class="req">*</span></label>
                <input 
                  id="order-name" 
                  v-model="form.customerName" 
                  type="text" 
                  placeholder="Ví dụ: Nguyễn Văn An" 
                  required 
                />
              </div>

              <!-- Phone -->
              <div class="form-group">
                <label for="order-phone">Số điện thoại <span class="req">*</span></label>
                <input 
                  id="order-phone" 
                  v-model="form.phone" 
                  type="tel" 
                  placeholder="Ví dụ: 0912345678" 
                  required 
                />
              </div>

              <!-- Address -->
              <div class="form-group">
                <label for="order-address">Địa chỉ nhận hàng cụ thể <span class="req">*</span></label>
                <input 
                  id="order-address" 
                  v-model="form.address" 
                  type="text" 
                  placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/TP" 
                  required 
                />
              </div>

              <!-- Notes -->
              <div class="form-group">
                <label for="order-notes">Ghi chú giao hàng (nếu có)</label>
                <input 
                  id="order-notes" 
                  v-model="form.notes" 
                  type="text" 
                  placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi đến..." 
                />
              </div>

              <!-- Payment Method Info -->
              <div class="payment-method-badge">
                <span class="badge-icon">💵</span>
                <div>
                  <strong>Phương thức thanh toán: COD</strong>
                  <p>Kiểm tra hàng trước khi thanh toán tiền mặt cho shipper</p>
                </div>
              </div>

              <!-- Error Alert -->
              <div v-if="errorMessage" class="error-alert">
                ⚠️ {{ errorMessage }}
              </div>

              <!-- Summary & Submit -->
              <div class="order-summary">
                <div class="summary-row">
                  <span>Tạm tính:</span>
                  <span>{{ formatPrice(totalAmount) }}</span>
                </div>
                <div class="summary-row">
                  <span>Phí giao hàng:</span>
                  <span class="text-free">MIỄN PHÍ TOÀN QUỐC</span>
                </div>
                <div class="summary-row total-row">
                  <span>Tổng tiền thanh toán:</span>
                  <span class="total-price">{{ formatPrice(totalAmount) }}</span>
                </div>
              </div>

              <button 
                type="submit" 
                class="btn-submit-order" 
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="btn-spinner"></span>
                <span v-else>🚀 Xác Nhận Đặt Hàng COD</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartDrawer',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    cart: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: {
        customerName: '',
        phone: '',
        address: '',
        notes: ''
      },
      isSubmitting: false,
      errorMessage: ''
    };
  },
  computed: {
    totalItems() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalAmount() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
      if (e.key === 'Escape' && this.isOpen) {
        this.$emit('close');
      }
    },
    async submitOrder() {
      this.errorMessage = '';

      if (!this.form.customerName.trim()) {
        this.errorMessage = 'Vui lòng nhập họ và tên người nhận.';
        return;
      }
      if (!this.form.phone.trim() || this.form.phone.trim().length < 9) {
        this.errorMessage = 'Vui lòng nhập số điện thoại hợp lệ.';
        return;
      }
      if (!this.form.address.trim()) {
        this.errorMessage = 'Vui lòng nhập địa chỉ nhận hàng.';
        return;
      }

      this.isSubmitting = true;
      try {
        const payload = {
          customerName: this.form.customerName.trim(),
          phone: this.form.phone.trim(),
          address: this.form.address.trim(),
          notes: this.form.notes.trim(),
          items: this.cart.map((i) => ({
            productId: i.productId,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
            image: i.image
          }))
        };

        const res = await fetch('http://localhost:5000/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (res.ok && data.status === 'ok') {
          // Reset form
          this.form = { customerName: '', phone: '', address: '', notes: '' };
          this.$emit('order-success', data);
        } else {
          this.errorMessage = data.message || 'Đã xảy ra lỗi khi tạo đơn hàng.';
        }
      } catch (err) {
        this.errorMessage = 'Không thể kết nối máy chủ Backend. Vui lòng kiểm tra lại.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
.drawer-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 8, 17, 0.8);
  backdrop-filter: blur(6px);
  z-index: 1500;
  display: flex;
  justify-content: flex-end;
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.drawer-container {
  width: 100%;
  max-width: 480px;
  height: 100%;
  background-color: var(--bg-card);
  border-left: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.6);
  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.drawer-header {
  padding: 18px 20px;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-title-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.drawer-icon {
  font-size: 20px;
}

.drawer-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
}

.item-count-badge {
  font-size: 0.725rem;
  background-color: var(--color-primary);
  color: #ffffff;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-weight: 700;
}

.btn-close-drawer {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 14px;
}

.btn-close-drawer:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.drawer-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

/* Empty View */
.empty-cart-view {
  text-align: center;
  padding: 60px 20px;
}

.empty-cart-icon {
  font-size: 48px;
  margin-bottom: 14px;
}

.empty-cart-view h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.empty-cart-view p {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.btn-continue {
  padding: 10px 20px;
  background-color: var(--color-primary);
  color: #ffffff;
  border-radius: var(--radius-sm);
  font-weight: 600;
}

/* Cart Items */
.cart-items-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  padding: 12px;
}

.item-thumb {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  background-color: #050811;
  flex-shrink: 0;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-main);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
}

.item-unit-price {
  font-size: 0.775rem;
  color: var(--text-dim);
  margin-bottom: 8px;
}

.qty-and-subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.qty-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.btn-qty {
  width: 22px;
  height: 22px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-main);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 12px;
}

.btn-qty:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.qty-num {
  font-size: 0.85rem;
  font-weight: 700;
  min-width: 18px;
  text-align: center;
}

.item-subtotal {
  font-size: 0.95rem;
  font-weight: 800;
  color: #38bdf8;
}

.btn-remove {
  background: none;
  font-size: 16px;
  padding: 6px;
  opacity: 0.6;
}

.btn-remove:hover {
  opacity: 1;
  transform: scale(1.1);
}

/* Checkout Form */
.checkout-form-section {
  border-top: 2px dashed rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.checkout-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.checkout-subtitle {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.req {
  color: #ef4444;
}

.form-group input {
  width: 100%;
  padding: 9px 12px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-main);
  font-family: inherit;
  font-size: 0.875rem;
  outline: none;
}

.form-group input:focus {
  border-color: var(--color-accent);
}

.payment-method-badge {
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 16px 0;
}

.payment-method-badge .badge-icon {
  font-size: 22px;
}

.payment-method-badge strong {
  font-size: 0.85rem;
  color: var(--color-success);
}

.payment-method-badge p {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.error-alert {
  background-color: rgba(239, 68, 68, 0.15);
  border: 1px solid #ef4444;
  color: #fca5a5;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.825rem;
  margin-bottom: 12px;
}

/* Order Summary */
.order-summary {
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: 14px;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.text-free {
  color: var(--color-success);
  font-weight: 700;
}

.total-row {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
}

.total-price {
  font-size: 1.3rem;
  color: #38bdf8;
  font-weight: 800;
}

.btn-submit-order {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
}

.btn-submit-order:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
}

.btn-submit-order:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-spinner {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
