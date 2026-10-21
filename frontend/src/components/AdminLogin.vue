<template>
  <div class="admin-login-wrapper">
    <div class="login-card">
      <!-- Shield Icon & Glowing Header -->
      <div class="card-header">
        <div class="shield-badge">
          <span class="shield-icon">🛡️</span>
          <div class="shield-pulse"></div>
        </div>
        <h2 class="card-title">Cổng Quản Trị Bảo Mật</h2>
        <p class="card-subtitle">
          Khu vực bảo mật dành riêng cho Quản trị viên TechStore. Vui lòng xác thực tài khoản để tiếp tục.
        </p>
      </div>

      <!-- Error Alert -->
      <transition name="shake">
        <div v-if="errorMessage" class="login-error-alert">
          <span class="error-icon">⚠️</span>
          <span class="error-text">{{ errorMessage }}</span>
        </div>
      </transition>

      <!-- Login Form -->
      <form class="login-form" @submit.prevent="handleLogin">
        <!-- Username Field -->
        <div class="form-group">
          <label for="admin-username" class="form-label">Tài khoản Quản trị</label>
          <div class="input-wrap">
            <span class="input-icon">👤</span>
            <input 
              id="admin-username"
              v-model="username" 
              type="text" 
              placeholder="Nhập tên đăng nhập..."
              class="form-input"
              autocomplete="username"
              required
              :disabled="loading"
            />
          </div>
        </div>

        <!-- Password Field -->
        <div class="form-group">
          <label for="admin-password" class="form-label">Mật khẩu bảo mật</label>
          <div class="input-wrap">
            <span class="input-icon">🔒</span>
            <input 
              id="admin-password"
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="Nhập mật khẩu..."
              class="form-input"
              autocomplete="current-password"
              required
              :disabled="loading"
            />
            <button 
              type="button" 
              class="btn-toggle-eye" 
              :title="showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>

        <!-- Quick Demo Fill Button -->
        <div class="demo-hint-box" @click="fillDemoAccount">
          <span class="hint-tag">⚡ Dùng thử:</span>
          <span class="hint-code">admin / admin123</span>
          <span class="hint-action">(Bấm để điền nhanh)</span>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          class="btn-submit-login" 
          :disabled="loading"
        >
          <span v-if="loading" class="spinner-sm"></span>
          <span v-else>🔐 Đăng Nhập Quản Trị</span>
        </button>

        <!-- Back to Store Action -->
        <button 
          type="button" 
          class="btn-back-store" 
          @click="$emit('back-to-store')"
        >
          ← Quay lại Cửa Hàng
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { API_ENDPOINTS } from '../config/api.js';

export default {
  name: 'AdminLogin',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      loading: false,
      errorMessage: ''
    };
  },
  methods: {
    fillDemoAccount() {
      this.username = 'admin';
      this.password = 'admin123';
      this.errorMessage = '';
    },
    async handleLogin() {
      this.errorMessage = '';
      if (!this.username.trim() || !this.password) {
        this.errorMessage = 'Vui lòng nhập đầy đủ tài khoản và mật khẩu.';
        return;
      }

      this.loading = true;
      try {
        const res = await fetch(API_ENDPOINTS.ADMIN_LOGIN, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.username.trim(),
            password: this.password
          })
        });

        const data = await res.json();

        if (res.ok && data.status === 'ok') {
          // Lưu token và thông tin admin vào localStorage
          localStorage.setItem('techstore_admin_token', data.token);
          localStorage.setItem('techstore_admin_user', JSON.stringify(data.admin));

          this.$emit('login-success', {
            token: data.token,
            admin: data.admin
          });
        } else {
          this.errorMessage = data.message || 'Tên đăng nhập hoặc mật khẩu không chính xác!';
        }
      } catch (err) {
        console.error('❌ Lỗi kết nối đăng nhập:', err);
        this.errorMessage = 'Không thể kết nối đến máy chủ xác thực. Vui lòng thử lại!';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.admin-login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 40px 16px;
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 20px;
  padding: 36px 32px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.12);
  animation: fadeInDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-header {
  text-align: center;
  margin-bottom: 24px;
}

.shield-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(99, 102, 241, 0.25));
  border: 1px solid rgba(56, 189, 248, 0.4);
  border-radius: 50%;
  margin-bottom: 16px;
}

.shield-icon {
  font-size: 32px;
  z-index: 2;
}

.shield-pulse {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 1px solid rgba(56, 189, 248, 0.5);
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.8; }
}

.card-title {
  color: #f8fafc;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0 0 8px;
}

.card-subtitle {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

.login-error-alert {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #fca5a5;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.875rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  color: #cbd5e1;
  font-size: 0.825rem;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  font-size: 1rem;
  opacity: 0.7;
  pointer-events: none;
}

.form-input {
  width: 100%;
  height: 48px;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(71, 85, 105, 0.6);
  border-radius: 12px;
  padding: 0 44px 0 42px;
  color: #f8fafc;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
}

.form-input:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
  background: rgba(30, 41, 59, 0.95);
}

.form-input::placeholder {
  color: #64748b;
}

.btn-toggle-eye {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 4px 6px;
  opacity: 0.75;
  transition: opacity 0.2s ease;
}

.btn-toggle-eye:hover {
  opacity: 1;
}

.demo-hint-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(56, 189, 248, 0.08);
  border: 1px dashed rgba(56, 189, 248, 0.35);
  border-radius: 10px;
  padding: 10px 14px;
  margin-bottom: 22px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.demo-hint-box:hover {
  background: rgba(56, 189, 248, 0.16);
  border-color: #38bdf8;
}

.hint-tag {
  color: #38bdf8;
  font-size: 0.75rem;
  font-weight: 700;
}

.hint-code {
  color: #f8fafc;
  font-family: monospace;
  font-size: 0.85rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 8px;
  border-radius: 4px;
}

.hint-action {
  color: #94a3b8;
  font-size: 0.75rem;
}

.btn-submit-login {
  width: 100%;
  height: 50px;
  background: linear-gradient(135deg, #0284c7, #2563eb);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
  transition: all 0.2s ease;
}

.btn-submit-login:hover:not(:disabled) {
  background: linear-gradient(135deg, #0ea5e9, #1d4ed8);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
}

.btn-submit-login:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.btn-back-store {
  width: 100%;
  margin-top: 14px;
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s ease;
}

.btn-back-store:hover {
  color: #f8fafc;
}

.spinner-sm {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 480px) {
  .login-card {
    padding: 28px 20px;
  }
  .card-title {
    font-size: 1.3rem;
  }
}
</style>
