<template>
  <div id="app" class="app-container">
    <!-- Navigation Header -->
    <header class="header">
      <div class="header-inner">
        <!-- Logo -->
        <div class="brand" @click="resetFilters">
          <div class="brand-icon">⚡</div>
          <div class="brand-text">
            <span class="brand-title">TechStore</span>
            <span class="brand-subtitle">Digital & Electronics</span>
          </div>
        </div>

        <!-- Search Bar in Header -->
        <div v-if="currentView === 'store'" class="search-container">
          <span class="search-icon">🔍</span>
          <input 
            v-model="searchKeyword" 
            type="text" 
            placeholder="Tìm theo tên sản phẩm, chip, cấu hình..." 
            class="search-input"
          />
          <button 
            v-if="searchKeyword" 
            type="button" 
            class="btn-clear-search" 
            @click="searchKeyword = ''"
          >
            ✕
          </button>
        </div>

        <!-- Header Actions -->
        <div class="header-actions">
          <!-- View Mode Toggle (Cửa Hàng vs Quản Trị) -->
          <div class="view-mode-toggle">
            <button 
              type="button" 
              class="btn-toggle-mode" 
              :class="{ active: currentView === 'store' }"
              @click="currentView = 'store'"
            >
              🛍️ Cửa Hàng
            </button>
            <button 
              type="button" 
              class="btn-toggle-mode" 
              :class="{ active: currentView === 'admin' }"
              @click="currentView = 'admin'"
            >
              ⚙️ Quản Trị
            </button>
          </div>

          <!-- Cart Pill Button -->
          <div 
            v-if="currentView === 'store'"
            id="btn-cart" 
            class="cart-pill" 
            title="Mở Giỏ Hàng" 
            @click="isCartOpen = true"
          >
            <span class="cart-icon">🛒</span>
            <span class="cart-badge">{{ totalCartQuantity }}</span>
          </div>

          <!-- Slice Indicator Badge -->
          <div class="slice-badge">
            <span class="badge-dot"></span>
            Lát 6: Đăng nhập Admin Bảo mật
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- 1. GIAO DIỆN CỬA HÀNG (STORE VIEW) -->
      <div v-if="currentView === 'store'">
        <!-- Hero Banner -->
        <section class="store-hero">
          <div class="hero-badge">🌟 Thiết bị công nghệ chính hãng • Hỗ trợ giao hàng COD toàn quốc</div>
        <h1 class="hero-title">Thiết Bị Điện Tử & Công Nghệ Hàng Đầu</h1>
        <p class="hero-desc">
          Khám phá các sản phẩm Apple, Samsung, Dell, Logitech chính hãng. Dữ liệu thời gian thực được đồng bộ trực tiếp từ <strong>Aiven Cloud MySQL</strong>.
        </p>
      </section>

      <!-- Category Filter Tabs & Controls -->
      <section class="controls-section">
        <div class="category-tabs">
          <button 
            v-for="cat in categories" 
            :key="cat" 
            type="button" 
            class="tab-btn" 
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat"
          >
            {{ cat }}
            <span class="cat-count" v-if="cat === 'Tất cả'">{{ products.length }}</span>
            <span class="cat-count" v-else>{{ countByCategory(cat) }}</span>
          </button>
        </div>

        <!-- Sort Option Dropdown -->
        <div class="sort-wrap">
          <label for="sort-select" class="sort-label">Sắp xếp:</label>
          <select id="sort-select" v-model="sortOption" class="sort-select">
            <option value="default">Mặc định</option>
            <option value="price_asc">Giá: Thấp đến Cao</option>
            <option value="price_desc">Giá: Cao đến Thấp</option>
          </select>
        </div>
      </section>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="loader-spinner"></div>
        <p>Đang tải dữ liệu sản phẩm từ Aiven Cloud...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <span class="error-icon">⚠️</span>
        <h3>Không thể tải danh sách sản phẩm</h3>
        <p>{{ error }}</p>
        <button type="button" class="btn-retry" @click="fetchProducts">Thử lại ngay</button>
      </div>

      <!-- Products Grid -->
      <section v-else-if="filteredProducts.length > 0" class="products-grid">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product"
          @view-details="openModal"
          @buy-click="openModal"
        />
      </section>

        <!-- Empty Filter State -->
        <div v-else class="empty-state">
          <div class="empty-icon">🔎</div>
          <h3>Không tìm thấy sản phẩm phù hợp</h3>
          <p>Không có sản phẩm nào khớp với từ khóa "<strong>{{ searchKeyword }}</strong>" trong danh mục này.</p>
          <button type="button" class="btn-reset" @click="resetFilters">Xóa bộ lọc & Xem tất cả</button>
        </div>
      </div>

      <!-- 2. GIAO DIỆN QUẢN TRỊ (ADMIN PORTAL VIEW) -->
      <template v-else-if="currentView === 'admin'">
        <!-- Cổng Đăng Nhập Bảo Mật nếu chưa đăng nhập -->
        <AdminLogin 
          v-if="!isAdminLoggedIn"
          @login-success="handleAdminLoginSuccess"
          @back-to-store="currentView = 'store'"
        />

        <!-- Bảng điều khiển Quản Trị Toàn Quyền khi đã đăng nhập -->
        <AdminPortal 
          v-else
          :current-admin="currentAdmin"
          @logout="handleAdminLogout"
          @product-added="onProductAdded"
        />
      </template>

      <!-- Toast Notification for Add to Cart -->
      <transition name="fade">
        <div v-if="toastMessage" class="toast-notification">
          <span>✅ {{ toastMessage }}</span>
        </div>
      </transition>

      <!-- Product Specification Modal -->
      <ProductModal 
        :product="selectedProduct" 
        @close="selectedProduct = null"
        @buy-click="addToCart"
      />

      <!-- Cart & COD Drawer (Slice 4) -->
      <CartDrawer 
        :is-open="isCartOpen" 
        :cart="cart"
        @close="isCartOpen = false"
        @increase-qty="increaseQty"
        @decrease-qty="decreaseQty"
        @remove-item="removeItem"
        @order-success="handleOrderSuccess"
      />

      <!-- Order Success Celebration Modal -->
      <OrderSuccessModal 
        :order="placedOrder"
        @close="placedOrder = null"
      />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <p>© 2026 TechStore • Xây dựng theo phương pháp <strong>Vibe Coding</strong> với Vue 2.7, Node.js & Aiven MySQL.</p>
        <div class="footer-meta">
          <span>Backend API: <code>http://localhost:5000/api/orders</code></span>
          <span>Database: <code>Aiven Cloud (techstore_db)</code></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import ProductModal from './components/ProductModal.vue';
import CartDrawer from './components/CartDrawer.vue';
import OrderSuccessModal from './components/OrderSuccessModal.vue';
import AdminPortal from './components/AdminPortal.vue';
import AdminLogin from './components/AdminLogin.vue';
import { API_BASE_URL, API_ENDPOINTS } from './config/api.js';

export default {
  name: 'App',
  components: {
    ProductCard,
    ProductModal,
    CartDrawer,
    OrderSuccessModal,
    AdminPortal,
    AdminLogin
  },
  data() {
    return {
      currentView: 'store',
      isAdminLoggedIn: false,
      currentAdmin: null,
      products: [],
      categories: ['Tất cả'],
      selectedCategory: 'Tất cả',
      searchKeyword: '',
      sortOption: 'default',
      loading: true,
      error: null,
      selectedProduct: null,
      isCartOpen: false,
      cart: [],
      placedOrder: null,
      toastMessage: ''
    };
  },
  computed: {
    totalCartQuantity() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    filteredProducts() {
      let result = [...this.products];

      // 1. Lọc theo danh mục
      if (this.selectedCategory !== 'Tất cả') {
        result = result.filter((p) => p.category === this.selectedCategory);
      }

      // 2. Tìm kiếm theo từ khóa
      if (this.searchKeyword.trim()) {
        const kw = this.searchKeyword.trim().toLowerCase();
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(kw) ||
            p.description.toLowerCase().includes(kw) ||
            (p.specs && JSON.stringify(p.specs).toLowerCase().includes(kw))
        );
      }

      // 3. Sắp xếp giá
      if (this.sortOption === 'price_asc') {
        result.sort((a, b) => Number(a.price) - Number(b.price));
      } else if (this.sortOption === 'price_desc') {
        result.sort((a, b) => Number(b.price) - Number(a.price));
      }

      return result;
    }
  },
  watch: {
    cart: {
      deep: true,
      handler(newCart) {
        localStorage.setItem('techstore_cart', JSON.stringify(newCart));
      }
    }
  },
  mounted() {
    // Khôi phục giỏ hàng từ localStorage nếu có
    try {
      const saved = localStorage.getItem('techstore_cart');
      if (saved) {
        this.cart = JSON.parse(saved);
      }
    } catch (e) {
      this.cart = [];
    }

    // Khôi phục phiên làm việc Admin nếu còn hiệu lực
    try {
      const savedToken = localStorage.getItem('techstore_admin_token');
      const savedAdmin = localStorage.getItem('techstore_admin_user');
      if (savedToken && savedAdmin) {
        this.currentAdmin = JSON.parse(savedAdmin);
        this.isAdminLoggedIn = true;
      }
    } catch (e) {
      this.isAdminLoggedIn = false;
      this.currentAdmin = null;
    }

    this.fetchCategories();
    this.fetchProducts();
  },
  methods: {
    async fetchCategories() {
      try {
        const res = await fetch(API_ENDPOINTS.CATEGORIES);
        const json = await res.json();
        if (json.status === 'ok') {
          this.categories = json.data;
        }
      } catch (err) {
        console.warn('Chưa lấy được categories:', err.message);
      }
    },
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch(API_ENDPOINTS.PRODUCTS);
        const json = await res.json();
        if (json.status === 'ok') {
          this.products = json.data;
        } else {
          this.error = json.message || 'Lỗi lấy danh sách sản phẩm';
        }
      } catch (err) {
        this.error = `Không thể kết nối đến Backend tại ${API_BASE_URL}`;
      } finally {
        this.loading = false;
      }
    },
    async onProductAdded() {
      await Promise.all([this.fetchProducts(), this.fetchCategories()]);
    },
    countByCategory(cat) {
      return this.products.filter((p) => p.category === cat).length;
    },
    openModal(product) {
      this.selectedProduct = product;
    },
    resetFilters() {
      this.selectedCategory = 'Tất cả';
      this.searchKeyword = '';
      this.sortOption = 'default';
    },
    addToCart(product) {
      const addQty = Math.max(1, parseInt(product.quantity, 10) || 1);
      const existing = this.cart.find((i) => i.productId === product.id);
      if (existing) {
        existing.quantity += addQty;
      } else {
        this.cart.push({
          productId: product.id,
          name: product.name,
          price: Number(product.price),
          image: product.image,
          quantity: addQty
        });
      }

      this.showToast(`Đã thêm ${addQty}x "${product.name}" vào giỏ hàng!`);
      if (this.selectedProduct) {
        this.selectedProduct = null;
      }
      // Mở ngăn kéo giỏ hàng để khách dễ theo dõi
      this.isCartOpen = true;
    },
    increaseQty(productId) {
      const item = this.cart.find((i) => i.productId === productId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQty(productId) {
      const item = this.cart.find((i) => i.productId === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem(productId) {
      this.cart = this.cart.filter((i) => i.productId !== productId);
    },
    handleOrderSuccess(orderResponse) {
      // 1. Đóng giỏ hàng
      this.isCartOpen = false;
      // 2. Làm sạch giỏ hàng
      this.cart = [];
      localStorage.removeItem('techstore_cart');
      // 3. Mở modal thành công
      const orderData = (orderResponse && orderResponse.data) ? orderResponse.data : orderResponse;
      this.placedOrder = orderData;
    },
    showToast(msg) {
      this.toastMessage = msg;
      setTimeout(() => {
        this.toastMessage = '';
      }, 3000);
    },
    handleAdminLoginSuccess({ token, admin }) {
      this.isAdminLoggedIn = true;
      this.currentAdmin = admin;
      this.showToast(`Chào mừng ${admin.fullName} (${admin.username}) đã đăng nhập Quản Trị!`);
    },
    handleAdminLogout() {
      localStorage.removeItem('techstore_admin_token');
      localStorage.removeItem('techstore_admin_user');
      this.isAdminLoggedIn = false;
      this.currentAdmin = null;
      this.currentView = 'store';
      this.showToast('Đã đăng xuất khỏi cổng Quản Trị an toàn.');
    }
  }
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  border-bottom: 1px solid var(--border-color);
  background-color: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  flex-shrink: 0;
}

.brand-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: var(--shadow-glow);
}

.brand-title {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #ffffff;
  display: block;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: var(--text-dim);
  display: block;
}

/* Search Container */
.search-container {
  flex: 1;
  max-width: 520px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 14px;
  font-size: 14px;
  color: var(--text-dim);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 10px 36px 10px 40px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-main);
  font-family: inherit;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
  background-color: var(--bg-card-hover);
}

.search-input::placeholder {
  color: var(--text-dim);
}

.btn-clear-search {
  position: absolute;
  right: 12px;
  background: none;
  color: var(--text-dim);
  font-size: 14px;
  padding: 4px;
}

.btn-clear-search:hover {
  color: var(--text-main);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.view-mode-toggle {
  display: flex;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 3px;
  gap: 3px;
}

.btn-toggle-mode {
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-toggle-mode:hover {
  color: var(--text-main);
}

.btn-toggle-mode.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
}

.cart-pill {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cart-pill:hover {
  border-color: var(--color-accent);
  background-color: var(--bg-card-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.cart-icon {
  font-size: 20px;
}

.cart-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: #ffffff;
  font-size: 0.725rem;
  font-weight: 800;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--bg-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.slice-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(56, 189, 248, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
}

/* Main Content */
.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 60px;
  width: 100%;
}

/* Hero Section */
.store-hero {
  text-align: center;
  margin-bottom: 36px;
}

.hero-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
  background-color: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.25);
  padding: 4px 14px;
  border-radius: var(--radius-full);
  margin-bottom: 14px;
}

.hero-title {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #ffffff 40%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 680px;
  margin: 0 auto;
}

/* Controls: Category Tabs & Sort */
.controls-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.category-tabs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 8px 18px;
  border-radius: var(--radius-full);
  background-color: var(--bg-card);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab-btn:hover {
  background-color: var(--bg-card-hover);
  color: var(--text-main);
  border-color: rgba(255, 255, 255, 0.15);
}

.tab-btn.active {
  background-color: var(--color-primary);
  color: #ffffff;
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.cat-count {
  font-size: 0.725rem;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 2px 7px;
  border-radius: var(--radius-full);
}

.sort-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sort-label {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.sort-select {
  background-color: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 0.85rem;
  outline: none;
  cursor: pointer;
}

.sort-select:focus {
  border-color: var(--color-accent);
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

/* Loading & Empty States */
.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  margin: 20px 0;
}

.loader-spinner {
  width: 44px;
  height: 44px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-icon,
.error-icon {
  font-size: 42px;
  margin-bottom: 12px;
}

.empty-state h3,
.error-state h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.empty-state p,
.error-state p {
  font-size: 0.9rem;
  color: var(--text-muted);
  max-width: 450px;
  margin: 0 auto 20px;
}

.btn-reset,
.btn-retry {
  padding: 10px 22px;
  background: var(--color-primary);
  color: #ffffff;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.9rem;
}

/* Toast */
.toast-notification {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: #0f172a;
  border: 1px solid var(--color-success);
  border-left: 5px solid var(--color-success);
  padding: 14px 22px;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: var(--text-main);
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 2500;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-secondary);
  padding: 30px 20px;
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.85rem;
  color: var(--text-dim);
}

.footer-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-meta code {
  color: var(--color-accent);
}

/* Responsive for Mobile 375px */
@media (max-width: 768px) {
  .header-inner {
    flex-wrap: wrap;
    padding: 8px 12px;
    gap: 8px;
  }
  .brand {
    gap: 6px;
    flex-shrink: 0;
  }
  .brand-icon {
    width: 34px;
    height: 34px;
    font-size: 16px;
  }
  .brand-title {
    font-size: 1.05rem;
  }
  .brand-subtitle {
    display: none;
  }
  .header-actions {
    gap: 6px;
    margin-left: auto;
  }
  .view-mode-toggle {
    padding: 2px;
    gap: 2px;
  }
  .btn-toggle-mode {
    padding: 5px 8px;
    font-size: 0.725rem;
  }
  .cart-pill {
    width: 34px;
    height: 34px;
  }
  .search-container {
    order: 3;
    flex: 0 0 100% !important;
    width: 100% !important;
    max-width: 100% !important;
    margin-top: 4px;
  }
  .slice-badge {
    display: none;
  }
  .hero-title {
    font-size: 1.75rem;
  }
  .products-grid {
    grid-template-columns: 1fr;
  }
  .controls-section {
    flex-direction: column;
    align-items: stretch;
  }
  .sort-wrap {
    justify-content: space-between;
  }
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
