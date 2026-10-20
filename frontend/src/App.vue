<template>
  <div id="app" class="app-container">
    <!-- Navigation Bar -->
    <header class="header">
      <div class="header-inner">
        <div class="brand">
          <div class="brand-icon">⚡</div>
          <div class="brand-text">
            <span class="brand-title">TechStore</span>
            <span class="brand-subtitle">E-commerce Platform</span>
          </div>
        </div>
        <div class="slice-badge">
          <span class="badge-dot"></span>
          Lát 1: Nền tảng Monorepo
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1 class="hero-title">Khởi Tạo Nền Tảng Dự Án Thành Công</h1>
        <p class="hero-desc">
          Kiến trúc Monorepo kết nối giữa <strong>Vue 2.7 (Vite)</strong>, <strong>Express.js</strong> và 
          <strong>Aiven Cloud MySQL</strong> thông qua <strong>Prisma ORM</strong>.
        </p>
      </section>

      <!-- Architecture Status Grid -->
      <section class="status-grid">
        <!-- Card 1: Frontend -->
        <div class="status-card active">
          <div class="card-icon">💻</div>
          <div class="card-info">
            <h3>Frontend Client</h3>
            <p class="card-tech">Vue 2.7.16 + Vite 5</p>
            <div class="card-meta">
              <span class="pill pill-green">Đang chạy</span>
              <span class="pill pill-gray">Port 3000</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Backend -->
        <div class="status-card" :class="{ active: isBackendUp }">
          <div class="card-icon">⚙️</div>
          <div class="card-info">
            <h3>Backend Server</h3>
            <p class="card-tech">Node.js + Express.js</p>
            <div class="card-meta">
              <span class="pill" :class="isBackendUp ? 'pill-green' : 'pill-yellow'">
                {{ isBackendUp ? 'Đã kết nối' : 'Cổng 5000' }}
              </span>
              <span class="pill pill-gray">CORS Enabled</span>
            </div>
          </div>
        </div>

        <!-- Card 3: Database -->
        <div class="status-card" :class="{ active: isDbUp }">
          <div class="card-icon">🗄️</div>
          <div class="card-info">
            <h3>Cloud Database</h3>
            <p class="card-tech">Aiven MySQL (Prisma ORM)</p>
            <div class="card-meta">
              <span class="pill" :class="isDbUp ? 'pill-green' : 'pill-yellow'">
                {{ isDbUp ? 'Đã thông SSL' : 'Singapore (sgp)' }}
              </span>
              <span class="pill pill-gray">SSL Required</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Health Check Test Section -->
      <section class="test-section">
        <div class="test-header">
          <div>
            <h2>Kiểm Tra Nhịp Tim Hệ Thống (Health Check)</h2>
            <p class="test-subtitle">
              Bấm nút bên dưới để Frontend gửi yêu cầu tới <code>GET /api/health</code> của Backend và kiểm tra kết nối tới Aiven Cloud MySQL.
            </p>
          </div>
          <button 
            id="btn-health-check" 
            class="btn-primary" 
            :disabled="loading" 
            @click="runHealthCheck"
          >
            <span v-if="loading" class="spinner"></span>
            <span v-else>🩺 Kiểm Tra Kết Nối Ngay</span>
          </button>
        </div>

        <!-- Result Box -->
        <div v-if="checkResult" class="result-box" :class="checkResult.status === 'ok' ? 'success' : 'error'">
          <div class="result-top">
            <div class="result-status-tag">
              <span class="status-indicator"></span>
              <strong>{{ checkResult.status === 'ok' ? 'HỆ THỐNG SỐNG KHỎE (200 OK)' : 'CẢNH BÁO KẾT NỐI' }}</strong>
            </div>
            <div class="result-latency" v-if="checkResult.latencyMs !== undefined">
              Độ trễ: <strong>{{ checkResult.latencyMs }}ms</strong>
            </div>
          </div>

          <div class="result-details">
            <div class="detail-row">
              <span class="detail-label">Dịch vụ:</span>
              <span class="detail-val">{{ checkResult.service }}</span>
            </div>
            <div class="detail-row" v-if="checkResult.database">
              <span class="detail-label">Cơ sở dữ liệu:</span>
              <span class="detail-val">{{ checkResult.database.provider }} ({{ checkResult.database.status }})</span>
            </div>
            <div class="detail-row" v-if="checkResult.database">
              <span class="detail-label">Máy chủ Cloud:</span>
              <span class="detail-val code-text">{{ checkResult.database.host }}</span>
            </div>
            <div class="detail-row" v-if="checkResult.error">
              <span class="detail-label text-error">Chi tiết lỗi:</span>
              <span class="detail-val text-error">{{ checkResult.error }}</span>
            </div>
          </div>

          <!-- Raw JSON view -->
          <details class="json-details">
            <summary>Xem dữ liệu JSON gốc trả về</summary>
            <pre class="json-code">{{ JSON.stringify(checkResult, null, 2) }}</pre>
          </details>
        </div>
      </section>

      <!-- Checklist Section -->
      <section class="checklist-section">
        <h3>📋 Tiêu Chí Nghiệm Thu Lát 1 (Acceptance Criteria)</h3>
        <div class="checklist-items">
          <label class="check-item">
            <input type="checkbox" checked disabled />
            <span>Monorepo <code>frontend/</code> (Vue 2.7 Vite) và <code>backend/</code> (Express) độc lập, sạch sẽ.</span>
          </label>
          <label class="check-item">
            <input type="checkbox" checked disabled />
            <span>Biến môi trường bí mật Aiven MySQL được nạp qua file <code>backend/.env</code> và bảo vệ bởi <code>.gitignore</code>.</span>
          </label>
          <label class="check-item">
            <input type="checkbox" :checked="isBackendUp" disabled />
            <span>Backend Express phản hồi endpoint <code>GET /api/health</code> không có lỗi.</span>
          </label>
          <label class="check-item">
            <input type="checkbox" :checked="isDbUp" disabled />
            <span>Prisma ORM kết nối thành công tới máy chủ đám mây Aiven Cloud MySQL (SSL accept).</span>
          </label>
          <label class="check-item">
            <input type="checkbox" checked disabled />
            <span>Giao diện chuẩn Responsive: hiển thị hoàn hảo trên máy tính và điện thoại 375px.</span>
          </label>
        </div>
      </section>

      <!-- Next Step Banner -->
      <section class="next-step-box">
        <div class="next-step-icon">🚀</div>
        <div>
          <h4>Sẵn sàng chuyển sang Lát 2: Dữ liệu & API Sản phẩm</h4>
          <p>
            Sau khi nghiệm thu Lát 1 và lưu checkpoint Git, Lát 2 sẽ khởi tạo bảng <code>techstore_products</code> trên Aiven MySQL và viết API lấy danh sách sản phẩm.
          </p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2026 TechStore Project • Được xây dựng theo phương pháp <strong>Vibe Coding</strong></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loading: false,
      isBackendUp: false,
      isDbUp: false,
      checkResult: null
    };
  },
  mounted() {
    // Tự động kiểm tra một lần khi vừa mở trang
    this.runHealthCheck();
  },
  methods: {
    async runHealthCheck() {
      this.loading = true;
      try {
        const response = await fetch('http://localhost:5000/api/health');
        const data = await response.json();
        this.checkResult = data;
        if (response.ok && data.status === 'ok') {
          this.isBackendUp = true;
          this.isDbUp = data.database && data.database.status === 'connected';
        } else {
          this.isBackendUp = true;
          this.isDbUp = false;
        }
      } catch (err) {
        this.isBackendUp = false;
        this.isDbUp = false;
        this.checkResult = {
          status: 'error',
          service: 'Không thể kết nối đến Backend tại http://localhost:5000',
          error: 'Vui lòng kiểm tra xem Backend Express đã được bật bằng lệnh "npm run dev" trong thư mục backend/ chưa.'
        };
      } finally {
        this.loading = false;
      }
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
  background-color: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--shadow-glow);
}

.brand-title {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--text-main);
  display: block;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: var(--text-muted);
  display: block;
}

.slice-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  font-size: 0.825rem;
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
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
}

.hero-section {
  text-align: center;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.8px;
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

/* Status Cards Grid */
.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 36px;
}

.status-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: all 0.25s ease;
}

.status-card.active {
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.card-icon {
  font-size: 28px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-info h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.card-tech {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.card-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pill {
  font-size: 0.725rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: var(--radius-full);
}

.pill-green {
  background-color: var(--color-success-bg);
  color: var(--color-success);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.pill-yellow {
  background-color: rgba(245, 158, 11, 0.15);
  color: var(--color-warning);
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.pill-gray {
  background-color: rgba(255, 255, 255, 0.06);
  color: var(--text-muted);
}

/* Test Section */
.test-section {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 30px;
  margin-bottom: 36px;
  box-shadow: var(--shadow-card);
}

.test-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.test-header h2 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.test-subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.test-subtitle code {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--color-accent);
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Result Box */
.result-box {
  background-color: var(--bg-primary);
  border-radius: var(--radius-md);
  padding: 20px;
  border-left: 4px solid var(--color-primary);
}

.result-box.success {
  border-left-color: var(--color-success);
  background-color: rgba(16, 185, 129, 0.05);
}

.result-box.error {
  border-left-color: var(--color-error);
  background-color: var(--color-error-bg);
}

.result-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.result-status-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-success);
}

.result-box.error .status-indicator {
  background-color: var(--color-error);
}

.result-latency {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.result-latency strong {
  color: var(--color-accent);
}

.result-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.detail-row {
  display: flex;
  font-size: 0.9rem;
}

.detail-label {
  width: 150px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.detail-val {
  color: var(--text-main);
  word-break: break-all;
}

.code-text {
  font-family: monospace;
  color: var(--color-accent);
}

.text-error {
  color: #fca5a5;
}

.json-details {
  margin-top: 12px;
  font-size: 0.85rem;
}

.json-details summary {
  color: var(--text-dim);
  cursor: pointer;
  margin-bottom: 8px;
}

.json-details summary:hover {
  color: var(--text-muted);
}

.json-code {
  background-color: #050811;
  padding: 14px;
  border-radius: var(--radius-sm);
  color: #38bdf8;
  font-family: monospace;
  font-size: 0.8rem;
  overflow-x: auto;
}

/* Checklist Section */
.checklist-section {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 26px;
  margin-bottom: 30px;
}

.checklist-section h3 {
  font-size: 1.15rem;
  margin-bottom: 18px;
}

.checklist-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.check-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.925rem;
  color: var(--text-muted);
  line-height: 1.4;
  cursor: default;
}

.check-item input[type="checkbox"] {
  accent-color: var(--color-success);
  width: 18px;
  height: 18px;
  margin-top: 2px;
}

.check-item code {
  color: var(--color-accent);
  background-color: rgba(0, 0, 0, 0.25);
  padding: 1px 5px;
  border-radius: 4px;
}

/* Next Step Box */
.next-step-box {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(56, 189, 248, 0.05));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.next-step-icon {
  font-size: 36px;
  background-color: rgba(59, 130, 246, 0.2);
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.next-step-box h4 {
  font-size: 1.05rem;
  color: var(--text-main);
  margin-bottom: 4px;
}

.next-step-box p {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.next-step-box code {
  color: var(--color-accent);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  padding: 20px;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-dim);
}

/* Responsive for Mobile 375px */
@media (max-width: 640px) {
  .hero-title {
    font-size: 1.6rem;
  }
  .test-header {
    flex-direction: column;
    align-items: stretch;
  }
  .btn-primary {
    justify-content: center;
  }
  .detail-row {
    flex-direction: column;
    gap: 2px;
  }
  .detail-label {
    width: 100%;
    font-size: 0.8rem;
  }
  .next-step-box {
    flex-direction: column;
    text-align: center;
  }
}
</style>
