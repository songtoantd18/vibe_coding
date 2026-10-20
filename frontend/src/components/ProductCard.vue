<template>
  <div class="product-card" @click="$emit('view-details', product)">
    <!-- Image & Badge Container -->
    <div class="card-media">
      <span class="category-badge" :class="getCategoryClass(product.category)">
        {{ product.category }}
      </span>
      <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
      <div class="hover-overlay">
        <span>🔍 Bấm để xem thông số chi tiết</span>
      </div>
    </div>

    <!-- Product Info -->
    <div class="card-body">
      <h3 class="product-title" :title="product.name">{{ product.name }}</h3>
      
      <!-- Key Highlights from Specs -->
      <div v-if="product.specs" class="specs-preview">
        <span v-if="product.specs.cpu" class="spec-tag">⚡ {{ product.specs.cpu }}</span>
        <span v-if="product.specs.ram" class="spec-tag">💾 {{ product.specs.ram }}</span>
        <span v-if="product.specs.battery" class="spec-tag">🔋 {{ product.specs.battery }}</span>
      </div>

      <p class="product-desc">{{ product.description }}</p>

      <!-- Price & Actions Footer -->
      <div class="card-footer">
        <div class="price-box">
          <span class="price-label">Giá ưu đãi:</span>
          <span class="price-value">{{ formatPrice(product.price) }}</span>
        </div>
        <div class="action-buttons">
          <button 
            type="button" 
            class="btn-view" 
            @click.stop="$emit('view-details', product)"
          >
            Thông số
          </button>
          <button 
            type="button" 
            class="btn-buy" 
            @click.stop="$emit('buy-click', product)"
          >
            Chọn mua
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(val) {
      if (!val) return '0 đ';
      return Number(val).toLocaleString('vi-VN') + ' đ';
    },
    getCategoryClass(cat) {
      if (cat === 'Điện thoại') return 'cat-phone';
      if (cat === 'Laptop') return 'cat-laptop';
      if (cat === 'Phụ kiện') return 'cat-acc';
      return '';
    }
  }
};
</script>

<style scoped>
.product-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.2);
}

.card-media {
  position: relative;
  width: 100%;
  padding-top: 65%;
  background-color: #050811;
  overflow: hidden;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.06);
}

.hover-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background: rgba(11, 17, 32, 0.85);
  backdrop-filter: blur(4px);
  color: var(--color-accent);
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.25s ease;
}

.product-card:hover .hover-overlay {
  opacity: 1;
  transform: translateY(0);
}

.category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  font-size: 0.725rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cat-phone {
  background-color: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.4);
}

.cat-laptop {
  background-color: rgba(168, 85, 247, 0.2);
  color: #c084fc;
  border: 1px solid rgba(168, 85, 247, 0.4);
}

.cat-acc {
  background-color: rgba(16, 185, 129, 0.2);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.4);
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.8em;
}

.specs-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.spec-tag {
  font-size: 0.72rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-muted);
  padding: 3px 8px;
  border-radius: 6px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-desc {
  font-size: 0.85rem;
  color: var(--text-dim);
  line-height: 1.5;
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-footer {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 14px;
}

.price-box {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
}

.price-label {
  font-size: 0.775rem;
  color: var(--text-dim);
}

.price-value {
  font-size: 1.25rem;
  font-weight: 800;
  color: #38bdf8;
  letter-spacing: -0.5px;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.btn-view {
  flex: 1;
  padding: 8px 12px;
  background-color: rgba(255, 255, 255, 0.06);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 0.825rem;
  font-weight: 600;
}

.btn-view:hover {
  background-color: rgba(255, 255, 255, 0.12);
  border-color: var(--color-accent);
}

.btn-buy {
  flex: 1.2;
  padding: 8px 14px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  border-radius: var(--radius-sm);
  font-size: 0.825rem;
  font-weight: 700;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
}

.btn-buy:hover {
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.5);
  transform: translateY(-1px);
}
</style>
