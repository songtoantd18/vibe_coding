<template>
  <div class="admin-portal">
    <!-- Admin Header Bar -->
    <div class="admin-header-bar">
      <div class="admin-title-wrap">
        <span class="admin-badge">ADMIN PORTAL</span>
        <h2 class="admin-heading">Quản Trị Hệ Thống TechStore</h2>
      </div>
      <div class="admin-controls-group">
        <div class="admin-tabs">
          <button 
            type="button" 
            class="tab-btn" 
            :class="{ active: currentTab === 'orders' }"
            @click="currentTab = 'orders'"
          >
            📋 Quản Lý Đơn Hàng ({{ orders.length }})
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            :class="{ active: currentTab === 'add-product' }"
            @click="currentTab = 'add-product'"
          >
            ✨ Thêm Sản Phẩm Mới
          </button>
        </div>

        <!-- Admin User Pill & Logout Button -->
        <div class="admin-user-bar">
          <div class="admin-user-pill" :title="'Đang đăng nhập quyền: ' + (currentAdmin ? currentAdmin.role : 'ADMIN')">
            <span class="user-status-dot"></span>
            <span class="user-name">👤 {{ currentAdmin ? currentAdmin.username : 'Admin' }}</span>
          </div>
          <button 
            type="button" 
            class="btn-logout" 
            title="Đăng xuất khỏi phiên quản trị" 
            @click="$emit('logout')"
          >
            🚪 Đăng xuất
          </button>
        </div>
      </div>
    </div>

    <!-- KPI Metric Cards -->
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon">📦</div>
        <div class="kpi-info">
          <span class="kpi-label">Tổng đơn hàng</span>
          <span class="kpi-val">{{ orders.length }}</span>
        </div>
      </div>
      <div class="kpi-card highlight-pending">
        <div class="kpi-icon">⏳</div>
        <div class="kpi-info">
          <span class="kpi-label">Chờ xử lý (Pending)</span>
          <span class="kpi-val">{{ pendingOrdersCount }}</span>
        </div>
      </div>
      <div class="kpi-card highlight-shipped">
        <div class="kpi-icon">🚚</div>
        <div class="kpi-info">
          <span class="kpi-label">Đang giao hàng</span>
          <span class="kpi-val">{{ shippedOrdersCount }}</span>
        </div>
      </div>
      <div class="kpi-card highlight-revenue">
        <div class="kpi-icon">💰</div>
        <div class="kpi-info">
          <span class="kpi-label">Doanh thu dự kiến</span>
          <span class="kpi-val revenue">{{ formatPrice(totalRevenue) }}</span>
        </div>
      </div>
    </div>

    <!-- Alert / Toast Message in Admin -->
    <transition name="fade">
      <div v-if="adminAlert.message" class="admin-alert" :class="adminAlert.type">
        <span>{{ adminAlert.message }}</span>
        <button type="button" class="btn-alert-close" @click="adminAlert.message = ''">✕</button>
      </div>
    </transition>

    <!-- ============================================== -->
    <!-- TAB 1: ORDER MANAGEMENT                       -->
    <!-- ============================================== -->
    <div v-if="currentTab === 'orders'" class="orders-section">
      <!-- Toolbar Filters -->
      <div class="orders-toolbar">
        <div class="status-filter-group">
          <button 
            v-for="st in statusOptions" 
            :key="st.key" 
            type="button" 
            class="status-btn"
            :class="{ active: selectedStatusFilter === st.key }"
            @click="selectedStatusFilter = st.key"
          >
            {{ st.label }}
          </button>
        </div>
        <button type="button" class="btn-refresh" :disabled="loadingOrders" @click="fetchOrders">
          <span :class="{ spinning: loadingOrders }">🔄</span> Làm mới
        </button>
      </div>

      <!-- Orders Loading State -->
      <div v-if="loadingOrders" class="orders-loading">
        <div class="spinner"></div>
        <span>Đang nạp danh sách đơn hàng từ Aiven MySQL...</span>
      </div>

      <!-- Orders Empty State -->
      <div v-else-if="filteredOrders.length === 0" class="orders-empty">
        <span class="empty-icon">📭</span>
        <h3>Không có đơn hàng nào</h3>
        <p>Không tìm thấy đơn hàng nào phù hợp với bộ lọc hiện tại.</p>
      </div>

      <!-- Orders Table (Desktop & Tablet >= 768px) -->
      <div v-else class="orders-table-wrap desktop-table">
        <table class="orders-table">
          <thead>
            <tr>
              <th>Mã Đơn</th>
              <th>Thời Gian</th>
              <th>Khách Hàng & SĐT</th>
              <th>Địa Chỉ Giao Hàng</th>
              <th>Sản Phẩm Đặt</th>
              <th>Tổng Tiền COD</th>
              <th>Trạng Thái</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in filteredOrders" :key="order.id" class="order-row">
              <td class="col-code">
                <span class="code-badge">{{ order.orderCode }}</span>
              </td>
              <td class="col-date">
                {{ formatDate(order.createdAt) }}
              </td>
              <td class="col-customer">
                <div class="customer-name">{{ order.customerName }}</div>
                <div class="customer-phone">📞 {{ order.phone }}</div>
              </td>
              <td class="col-address">
                <div class="address-text">{{ order.address }}</div>
                <div v-if="order.notes" class="notes-text">📝 <em>{{ order.notes }}</em></div>
              </td>
              <td class="col-items">
                <div class="items-summary">
                  <div v-for="(it, idx) in order.items" :key="idx" class="item-line">
                    <span class="it-name">• {{ it.name }}</span>
                    <strong class="it-qty">×{{ it.quantity }}</strong>
                  </div>
                </div>
              </td>
              <td class="col-total">
                <span class="price-val">{{ formatPrice(order.totalAmount) }}</span>
              </td>
              <td class="col-status">
                <span class="status-badge" :class="getStatusBadgeClass(order.status)">
                  {{ getStatusText(order.status) }}
                </span>
              </td>
              <td class="col-actions">
                <select 
                  class="select-status" 
                  :value="order.status"
                  :disabled="updatingOrderId === order.id"
                  @change="updateOrderStatus(order.id, $event.target.value)"
                >
                  <option value="PENDING">⏳ Chờ xử lý</option>
                  <option value="SHIPPED">🚚 Đang giao</option>
                  <option value="DELIVERED">✅ Đã giao</option>
                  <option value="CANCELLED">❌ Đã hủy</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Orders Mobile Cards (Mobile < 768px down to 320px) -->
      <div v-if="filteredOrders.length > 0" class="orders-mobile-cards">
        <div v-for="order in filteredOrders" :key="'mob-' + order.id" class="order-card-mobile">
          <div class="order-card-top">
            <div class="order-card-code-wrap">
              <span class="code-badge">{{ order.orderCode }}</span>
              <span class="order-card-time">{{ formatDate(order.createdAt) }}</span>
            </div>
            <span class="status-badge" :class="getStatusBadgeClass(order.status)">
              {{ getStatusText(order.status) }}
            </span>
          </div>

          <div class="order-card-buyer">
            <div class="buyer-name">👤 {{ order.customerName }}</div>
            <a :href="'tel:' + order.phone" class="buyer-phone">📞 {{ order.phone }}</a>
          </div>

          <div class="order-card-addr">
            📍 {{ order.address }}
            <div v-if="order.notes" class="order-card-notes">📝 <em>{{ order.notes }}</em></div>
          </div>

          <div class="order-card-items-box">
            <div class="items-box-label">Sản phẩm ({{ order.items ? order.items.length : 0 }} món):</div>
            <div v-for="(it, idx) in order.items" :key="idx" class="order-card-item">
              <span class="it-title">• {{ it.name }}</span>
              <span class="it-count">×{{ it.quantity }}</span>
            </div>
          </div>

          <div class="order-card-bottom">
            <div class="order-card-money">
              <span class="money-label">Tổng COD:</span>
              <span class="money-val">{{ formatPrice(order.totalAmount) }}</span>
            </div>
            <div class="order-card-select-wrap">
              <label class="select-label-sm">Đổi trạng thái:</label>
              <select 
                class="select-status mobile-select" 
                :value="order.status"
                :disabled="updatingOrderId === order.id"
                @change="updateOrderStatus(order.id, $event.target.value)"
              >
                <option value="PENDING">⏳ Chờ xử lý</option>
                <option value="SHIPPED">🚚 Đang giao</option>
                <option value="DELIVERED">✅ Đã giao</option>
                <option value="CANCELLED">❌ Đã hủy</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================== -->
    <!-- TAB 2: ADD NEW PRODUCT                         -->
    <!-- ============================================== -->
    <div v-if="currentTab === 'add-product'" class="add-product-section">
      <div class="form-container">
        <h3 class="form-title">Thêm Sản Phẩm Mới Vào Database MySQL</h3>
        <p class="form-subtitle">Sản phẩm sẽ được ghi vào bảng <code>techstore_products</code> và xuất hiện ngay ngoài Cửa Hàng.</p>

        <form class="product-form" @submit.prevent="submitNewProduct">
          <div class="form-row">
            <div class="form-field flex-2">
              <label for="prod-name">Tên sản phẩm <span class="req">*</span></label>
              <input 
                id="prod-name" 
                v-model="newProduct.name" 
                type="text" 
                placeholder="Ví dụ: Tai Nghe Sony WH-1000XM5" 
                required 
              />
            </div>
            <div class="form-field flex-1">
              <label for="prod-category">Danh mục <span class="req">*</span></label>
              <select id="prod-category" v-model="newProduct.category" required>
                <option value="Điện thoại">Điện thoại</option>
                <option value="Laptop">Laptop</option>
                <option value="Phụ kiện">Phụ kiện</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-field flex-1">
              <label for="prod-price">Giá niêm yết (VNĐ) <span class="req">*</span></label>
              <input 
                id="prod-price" 
                v-model.number="newProduct.price" 
                type="number" 
                min="0" 
                step="1000" 
                placeholder="Ví dụ: 8490000" 
                required 
              />
              <span v-if="newProduct.price" class="price-hint">💵 Xem trước: {{ formatPrice(newProduct.price) }}</span>
            </div>
            <div class="form-field flex-2">
              <label for="prod-image">URL Hình ảnh (Unsplash / CDN) <span class="req">*</span></label>
              <input 
                id="prod-image" 
                v-model="newProduct.image" 
                type="url" 
                placeholder="https://images.unsplash.com/..." 
                required 
              />
            </div>
          </div>

          <div class="form-field">
            <label for="prod-desc">Mô tả đặc điểm nổi bật <span class="req">*</span></label>
            <textarea 
              id="prod-desc" 
              v-model="newProduct.description" 
              rows="3" 
              placeholder="Mô tả công nghệ, tính năng, đối tượng sử dụng..."
              required
            ></textarea>
          </div>

          <!-- Quick Specs Group (Responsive Grid) -->
          <div class="specs-group-box">
            <h4 class="specs-box-title">Thông Số Kỹ Thuật (Tùy chọn)</h4>
            <div class="specs-grid">
              <div class="form-field">
                <label>CPU / Chip / Vi xử lý</label>
                <input v-model="newProduct.specs.cpu" type="text" placeholder="Ví dụ: Apple M3, Snapdragon 8 Gen 3..." />
              </div>
              <div class="form-field">
                <label>RAM</label>
                <input v-model="newProduct.specs.ram" type="text" placeholder="Ví dụ: 16GB, 8GB..." />
              </div>
              <div class="form-field">
                <label>Bộ nhớ / Ổ cứng</label>
                <input v-model="newProduct.specs.storage" type="text" placeholder="Ví dụ: 256GB SSD..." />
              </div>
              <div class="form-field">
                <label>Màn hình</label>
                <input v-model="newProduct.specs.screen" type="text" placeholder="Ví dụ: 6.7 inch OLED 120Hz..." />
              </div>
              <div class="form-field">
                <label>Pin & Sạc</label>
                <input v-model="newProduct.specs.battery" type="text" placeholder="Ví dụ: 5000 mAh, Sạc nhanh 65W..." />
              </div>
              <div class="form-field">
                <label>Bảo hành</label>
                <input v-model="newProduct.specs.warranty" type="text" placeholder="Ví dụ: 12 tháng chính hãng..." />
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-submit-prod" :disabled="submittingProduct">
              <span v-if="submittingProduct" class="spinner-small"></span>
              <span v-else>🚀 Lưu Sản Phẩm Vào Database MySQL</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL, API_ENDPOINTS } from '../config/api.js';

export default {
  name: 'AdminPortal',
  props: {
    currentAdmin: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      currentTab: 'orders',
      orders: [],
      loadingOrders: false,
      updatingOrderId: null,
      selectedStatusFilter: 'ALL',
      statusOptions: [
        { key: 'ALL', label: 'Tất cả' },
        { key: 'PENDING', label: '⏳ Chờ xử lý' },
        { key: 'SHIPPED', label: '🚚 Đang giao' },
        { key: 'DELIVERED', label: '✅ Đã giao' },
        { key: 'CANCELLED', label: '❌ Đã hủy' }
      ],
      adminAlert: {
        message: '',
        type: 'success'
      },
      submittingProduct: false,
      newProduct: {
        name: '',
        category: 'Điện thoại',
        price: '',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        description: '',
        specs: {
          cpu: '',
          ram: '',
          storage: '',
          screen: '',
          battery: '',
          warranty: '12 tháng chính hãng'
        }
      }
    };
  },
  computed: {
    pendingOrdersCount() {
      return this.orders.filter((o) => o.status === 'PENDING').length;
    },
    shippedOrdersCount() {
      return this.orders.filter((o) => o.status === 'SHIPPED').length;
    },
    totalRevenue() {
      return this.orders
        .filter((o) => o.status !== 'CANCELLED')
        .reduce((sum, o) => sum + (Number(o.totalAmount) || 0), 0);
    },
    filteredOrders() {
      if (this.selectedStatusFilter === 'ALL') {
        return this.orders;
      }
      return this.orders.filter((o) => o.status === this.selectedStatusFilter);
    }
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    formatPrice(val) {
      if (!val) return '0 đ';
      return Number(val).toLocaleString('vi-VN') + ' đ';
    },
    formatDate(dateStr) {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      const hours = String(d.getHours()).padStart(2, '0');
      const mins = String(d.getMinutes()).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${hours}:${mins} - ${day}/${month}/${year}`;
    },
    getStatusBadgeClass(status) {
      switch (status) {
        case 'PENDING': return 'badge-pending';
        case 'SHIPPED': return 'badge-shipped';
        case 'DELIVERED': return 'badge-delivered';
        case 'CANCELLED': return 'badge-cancelled';
        default: return 'badge-pending';
      }
    },
    getStatusText(status) {
      switch (status) {
        case 'PENDING': return '⏳ Chờ xử lý';
        case 'SHIPPED': return '🚚 Đang giao';
        case 'DELIVERED': return '✅ Đã giao';
        case 'CANCELLED': return '❌ Đã hủy';
        default: return status;
      }
    },
    showAlert(msg, type = 'success') {
      this.adminAlert = { message: msg, type };
      setTimeout(() => {
        if (this.adminAlert.message === msg) {
          this.adminAlert.message = '';
        }
      }, 4000);
    },
    async fetchOrders() {
      this.loadingOrders = true;
      try {
        const res = await fetch(API_ENDPOINTS.ORDERS);
        const data = await res.json();
        if (res.ok && data.status === 'ok') {
          this.orders = data.data || [];
        } else {
          this.showAlert('Không thể lấy danh sách đơn hàng: ' + (data.message || ''), 'error');
        }
      } catch (err) {
        this.showAlert(`Lỗi kết nối máy chủ Backend (${API_BASE_URL})`, 'error');
      } finally {
        this.loadingOrders = false;
      }
    },
    async updateOrderStatus(orderId, newStatus) {
      this.updatingOrderId = orderId;
      try {
        const res = await fetch(`${API_ENDPOINTS.ORDERS}/${orderId}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus })
        });
        const data = await res.json();
        if (res.ok && data.status === 'ok') {
          const idx = this.orders.findIndex((o) => o.id === orderId);
          if (idx !== -1) {
            this.$set(this.orders, idx, data.data);
          }
          this.showAlert(`Đã cập nhật đơn hàng #${data.data.orderCode} sang trạng thái: ${this.getStatusText(newStatus)}!`, 'success');
        } else {
          this.showAlert(data.message || 'Lỗi cập nhật trạng thái đơn hàng.', 'error');
        }
      } catch (err) {
        this.showAlert('Lỗi kết nối máy chủ khi cập nhật trạng thái.', 'error');
      } finally {
        this.updatingOrderId = null;
      }
    },
    async submitNewProduct() {
      this.submittingProduct = true;
      try {
        const payload = {
          name: this.newProduct.name.trim(),
          category: this.newProduct.category,
          price: Number(this.newProduct.price),
          image: this.newProduct.image.trim(),
          description: this.newProduct.description.trim(),
          specs: this.newProduct.specs
        };

        const res = await fetch(API_ENDPOINTS.PRODUCTS, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (res.ok && data.status === 'ok') {
          this.showAlert(`🎉 Đã thêm sản phẩm "${data.data.name}" vào Aiven MySQL thành công!`, 'success');
          // Reset form
          this.newProduct = {
            name: '',
            category: 'Điện thoại',
            price: '',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
            description: '',
            specs: { cpu: '', ram: '', storage: '', screen: '', battery: '', warranty: '12 tháng chính hãng' }
          };
          // Báo cho App component biết để load lại danh sách sản phẩm
          this.$emit('product-added');
        } else {
          this.showAlert(data.message || 'Lỗi thêm sản phẩm mới.', 'error');
        }
      } catch (err) {
        this.showAlert(`Không thể kết nối máy chủ Backend (${API_BASE_URL})`, 'error');
      } finally {
        this.submittingProduct = false;
      }
    }
  }
};
</script>

<style scoped>
.admin-portal {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

/* Header Bar */
.admin-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.admin-badge {
  font-size: 0.725rem;
  font-weight: 800;
  color: #38bdf8;
  background-color: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-bottom: 4px;
}

.admin-heading {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-main);
}

.admin-controls-group {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.admin-tabs {
  display: flex;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 4px;
  gap: 4px;
}

.admin-user-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.admin-user-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #38bdf8;
}

.user-status-dot {
  width: 7px;
  height: 7px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}

.user-name {
  color: #f8fafc;
}

.btn-logout {
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: #fca5a5;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.btn-logout:hover {
  background: rgba(239, 68, 68, 0.25);
  color: #ffffff;
  border-color: #ef4444;
  transform: translateY(-1px);
}

.tab-btn {
  padding: 8px 18px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: all 0.2s ease;
}

.tab-btn:hover {
  color: var(--text-main);
}

.tab-btn.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
}

/* KPI Grid */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.kpi-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-sm);
}

.kpi-icon {
  font-size: 32px;
  width: 52px;
  height: 52px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.kpi-info {
  display: flex;
  flex-direction: column;
}

.kpi-label {
  font-size: 0.775rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.kpi-val {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--text-main);
}

.highlight-pending .kpi-val {
  color: #fbbf24;
}

.highlight-shipped .kpi-val {
  color: #38bdf8;
}

.highlight-revenue .kpi-val.revenue {
  color: var(--color-success);
}

/* Alert Notification */
.admin-alert {
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
}

.admin-alert.success {
  background-color: rgba(16, 185, 129, 0.15);
  border: 1px solid #10b981;
  color: #34d399;
}

.admin-alert.error {
  background-color: rgba(239, 68, 68, 0.15);
  border: 1px solid #ef4444;
  color: #fca5a5;
}

.btn-alert-close {
  color: inherit;
  font-size: 14px;
}

/* Orders Section */
.orders-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.status-filter-group {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.status-btn {
  padding: 6px 12px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
}

.status-btn.active {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #ffffff;
}

.btn-refresh {
  padding: 6px 14px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-main);
  font-size: 0.825rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.spinning {
  display: inline-block;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.orders-loading, .orders-empty {
  text-align: center;
  padding: 60px 20px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}

.empty-icon {
  font-size: 40px;
  display: block;
  margin-bottom: 8px;
}

/* Orders Table */
.orders-table-wrap {
  overflow-x: auto;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.85rem;
}

.orders-table th {
  background-color: var(--bg-secondary);
  color: var(--text-dim);
  font-weight: 700;
  padding: 12px 14px;
  border-bottom: 1px solid var(--border-color);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.orders-table td {
  padding: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  vertical-align: middle;
}

.order-row:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.code-badge {
  font-family: monospace;
  font-weight: 800;
  color: #38bdf8;
  background-color: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.25);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
}

.col-date {
  color: var(--text-dim);
  font-size: 0.8rem;
  white-space: nowrap;
}

.customer-name {
  font-weight: 700;
  color: var(--text-main);
}

.customer-phone {
  color: var(--text-muted);
  font-size: 0.775rem;
  margin-top: 2px;
}

.address-text {
  max-width: 200px;
  color: var(--text-main);
  line-height: 1.35;
}

.notes-text {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-top: 2px;
}

.items-summary {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 220px;
}

.item-line {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.8rem;
}

.it-name {
  color: var(--text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.it-qty {
  color: var(--color-accent);
  white-space: nowrap;
}

.col-total .price-val {
  font-weight: 800;
  color: #38bdf8;
  font-size: 0.95rem;
  white-space: nowrap;
}

.status-badge {
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
}

.badge-pending {
  background-color: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.badge-shipped {
  background-color: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.badge-delivered {
  background-color: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge-cancelled {
  background-color: rgba(239, 68, 68, 0.15);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.select-status {
  padding: 5px 8px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-main);
  font-size: 0.775rem;
  outline: none;
  cursor: pointer;
}

.select-status:focus {
  border-color: var(--color-accent);
}

/* ============================================== */
/* TAB 2: ADD PRODUCT FORM STYLES                 */
/* ============================================== */
.form-container {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 28px;
  max-width: 820px;
  margin: 0 auto;
}

.form-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 4px;
}

.form-subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: flex;
  gap: 16px;
}

.flex-1 { flex: 1; }
.flex-2 { flex: 2; }

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
}

.req {
  color: #ef4444;
}

.form-field input, .form-field select, .form-field textarea {
  padding: 10px 14px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-main);
  font-family: inherit;
  font-size: 0.875rem;
  outline: none;
}

.form-field input:focus, .form-field select:focus, .form-field textarea:focus {
  border-color: var(--color-accent);
}

.price-hint {
  font-size: 0.75rem;
  color: var(--color-accent);
  font-weight: 600;
}

.specs-group-box {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.specs-box-title {
  font-size: 0.85rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-submit-prod {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-submit-prod:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
}

.spinner-small {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Quick Specs Grid */
.specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.btn-submit-prod {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-submit-prod:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
}

.spinner-small {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* ============================================== */
/* MOBILE ORDER CARDS (< 768px)                   */
/* ============================================== */
.orders-mobile-cards {
  display: none;
  flex-direction: column;
  gap: 14px;
}

.order-card-mobile {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: var(--shadow-sm);
  transition: border-color 0.2s ease;
}

.order-card-mobile:hover {
  border-color: rgba(56, 189, 248, 0.3);
}

.order-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-card-time {
  font-size: 0.775rem;
  color: var(--text-dim);
}

.order-card-buyer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.buyer-name {
  font-weight: 700;
  color: var(--text-main);
  font-size: 0.95rem;
}

.buyer-phone {
  color: #38bdf8;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
}

.order-card-addr {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.4;
  background-color: var(--bg-secondary);
  padding: 8px 12px;
  border-radius: var(--radius-sm);
}

.order-card-notes {
  font-size: 0.75rem;
  color: #fbbf24;
  margin-top: 4px;
}

.order-card-items-box {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
}

.items-box-label {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
  margin-bottom: 6px;
  font-weight: 700;
}

.order-card-item {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.825rem;
  padding: 2px 0;
}

.it-title {
  color: var(--text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.it-count {
  color: var(--color-accent);
  font-weight: 700;
  white-space: nowrap;
}

.order-card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.order-card-money {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.money-label {
  font-size: 0.775rem;
  color: var(--text-dim);
}

.money-val {
  font-size: 1.05rem;
  font-weight: 800;
  color: #38bdf8;
}

.order-card-code-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.order-card-select-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.select-label-sm {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.mobile-select {
  font-size: 0.8rem;
  padding: 6px 10px;
}

/* ============================================== */
/* RESPONSIVE DESIGN FOR ADMIN                    */
/* ============================================== */
@media (max-width: 1024px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .admin-portal {
    padding: 18px 14px 50px;
  }
  
  /* Chuyển bảng sang Card List trên Mobile */
  .desktop-table {
    display: none !important;
  }

  .orders-mobile-cards {
    display: flex !important;
  }

  .specs-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-row {
    flex-direction: column;
    gap: 12px;
  }

  .form-container {
    padding: 18px;
  }

  .admin-header-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }

  .admin-controls-group {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .admin-tabs {
    width: 100%;
  }

  .admin-user-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .tab-btn {
    flex: 1;
    text-align: center;
    padding: 10px 8px;
    font-size: 0.8rem;
  }

  .orders-toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .status-filter-group {
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    scrollbar-width: none;
    padding-bottom: 4px;
    gap: 6px;
  }

  .status-filter-group::-webkit-scrollbar {
    display: none;
  }

  .status-btn {
    flex-shrink: 0;
    white-space: nowrap;
    padding: 7px 12px;
    font-size: 0.775rem;
  }

  .btn-refresh {
    align-self: flex-end;
  }
}

@media (max-width: 640px) {
  .admin-portal {
    padding: 14px 10px 40px;
  }

  .kpi-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .kpi-card {
    padding: 14px 16px;
    gap: 12px;
  }

  .kpi-icon {
    width: 44px;
    height: 44px;
    font-size: 22px;
  }

  .kpi-val {
    font-size: 1.25rem;
  }

  .highlight-revenue .kpi-val.revenue {
    font-size: 1.15rem;
    word-break: break-all;
  }

  .specs-grid {
    grid-template-columns: 1fr;
  }

  .form-container {
    padding: 14px 12px;
  }

  .btn-refresh {
    width: 100%;
    justify-content: center;
  }

  .order-card-bottom {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .order-card-select-wrap {
    justify-content: space-between;
    width: 100%;
  }

  .mobile-select {
    flex: 1;
    max-width: 200px;
  }
}
</style>
