// Cấu hình URL Backend API tập trung
// Khi chạy local dev: Sử dụng http://localhost:5000
// Khi deploy lên Cloud: Tự động nhận biến VITE_API_URL (ví dụ: https://techstore-api.onrender.com)
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/api/health`,
  CATEGORIES: `${API_BASE_URL}/api/categories`,
  PRODUCTS: `${API_BASE_URL}/api/products`,
  ORDERS: `${API_BASE_URL}/api/orders`
};
