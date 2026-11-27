---
id: frontend-overview
title: Chuẩn Phát Triển Frontend
sidebar_position: 1
---

# 🎨 Hướng Dẫn Phát Triển Frontend & Tích Hợp API

Tài liệu hướng dẫn Frontend Developer tích hợp trơn tru với Backend .NET và thiết kế giao diện đồng nhất.

---

## 1. Chuẩn Giao Tiếp API Với .NET Backend

- Sử dụng thư viện `axios` hoặc `fetch` có cấu hình Interceptor để tự động gắn Bearer Token vào header:

```typescript
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

---

## 2. Xử Lý Response Theo Chuẩn Backend

Dựa trên chuẩn `ApiResponse<T>` từ .NET Backend:

```typescript
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors?: string[];
  timestamp: string;
}

export interface UserDto {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

export async function fetchUserProfile(): Promise<UserDto> {
  const response = await apiClient.get<ApiResponse<UserDto>>('/users/me');
  if (!response.data.success) {
    throw new Error(response.data.message || 'Lấy thông tin người dùng thất bại');
  }
  return response.data.data;
}
```
