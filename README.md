# 📚 DocStack - Kho Tri Thức & Tài Liệu Nội Bộ Cho Toàn Team

**DocStack** là trang web lưu trữ tài liệu, quy trình phát triển và cẩm nang hướng dẫn kỹ thuật dành cho toàn bộ các vị trí trong team phần mềm: **BA, .NET Backend Dev, Frontend Dev, DevOps & QA/Tester**.

Dự án được xây dựng dựa trên [Docusaurus 3](https://docusaurus.io/) – nền tảng tài liệu kỹ thuật mã nguồn mở phổ biến hàng đầu thế giới (hơn 55k+ Stars trên GitHub).

---

## 🌟 Tính Năng Nổi Bật

- 🎯 **Phân loại chuyên môn rõ ràng**:
  - **BA (Business Analyst)**: Hướng dẫn viết User Story, tiêu chí chấp nhận Acceptance Criteria (Gherkin format), template đặc tả SRS/BRD.
  - **.NET Backend Developer**: Tiêu chuẩn Clean Architecture, mẫu CQRS + MediatR, tối ưu EF Core & Dapper, chuẩn hóa REST API và Middleware tập trung.
  - **Frontend Developer**: Chuẩn tích hợp API, gọi token xác thực và mapping response.
  - **DevOps & CI/CD**: Dockerfile tối ưu đa tầng, Docker Compose chạy nhanh CSDL Local (SQL Server & Redis).
  - **QA & Testing**: Tiêu chuẩn ghi nhận lỗi Bug Report, quy trình kiểm thử.
- 🔍 **Offline Local Search**: Tích hợp sẵn plugin tìm kiếm từ khóa cực nhanh ngay trên máy nội bộ mà không phụ thuộc vào bên thứ 3.
- 📊 **Hỗ trợ sơ đồ Mermaid**: Vẽ flowchart, sequence diagram, kiến trúc trực tiếp bằng cú pháp Markdown đơn giản.
- 🌙 **Dark/Light Mode**: Tự động chuyển đổi giao diện sáng/tối.
- 🚀 **Sẵn sàng triển khai**: Đã cấu hình sẵn **GitHub Pages Actions** (CI/CD) và **Dockerfile / Docker Compose** để triển khai lên bất kỳ server nào.

---

## 🚀 Khởi Chạy Local Để Soạn Thảo Tài Liệu

### 1. Yêu Cầu Cài Đặt
- **Node.js** phiên bản `>= 18.0.0` (Khuyến nghị LTS).

### 2. Cài Đặt Thư Viện (Nếu mới clone từ repo)
```bash
npm install
```

### 3. Chạy Môi Trường Phát Triển (Hot-Reload)
```bash
npm start
```
Trang web sẽ tự động mở tại: `http://localhost:3000`

### 4. Build Bản Production
```bash
npm run build
```
Kết quả bản tĩnh sẽ nằm trong thư mục `build/`.

---

## 🐳 Triển Khai Bằng Docker

Bạn có thể chạy website dưới dạng một container Nginx độc lập:

```bash
docker compose up -d --build
```
Truy cập: `http://localhost:3000`

---

## 📝 Hướng Dẫn Thêm Hoặc Sửa Tài Liệu

Tất cả tài liệu được quản lý dưới dạng Markdown (`.md` hoặc `.mdx`) trong thư mục `docs/`:

```text
docs/
├── getting-started/          # Giới thiệu & Onboarding
├── ba/                       # Tài liệu Nghiệp vụ BA
├── dotnet-backend/           # Tiêu chuẩn .NET Core / Clean Architecture
├── frontend/                 # Tiêu chuẩn Frontend
├── devops-ci-cd/             # Hướng dẫn DevOps, Docker, CI/CD
└── qa-testing/               # Quy trình QA, Test case, Bug Report
```

Để thêm một bài viết mới:
1. Tạo file `.md` trong thư mục phù hợp (ví dụ `docs/dotnet-backend/caching-with-redis.md`).
2. Khai báo header ở đầu file:
   ```markdown
   ---
   id: caching-with-redis
   title: Hướng Dẫn Caching Với Redis
   sidebar_position: 2
   ---

   # Nội dung tài liệu ở đây...
   ```
3. Lưu lại, Docusaurus sẽ tự động cập nhật thanh điều hướng bên trái và công cụ tìm kiếm!
