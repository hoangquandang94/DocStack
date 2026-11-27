---
id: cicd-docker-guide
title: Docker & CI/CD Pipeline
sidebar_position: 1
---

# 🚀 Cẩm Nang Docker & CI/CD Cho Toàn Team

Tài liệu này cung cấp hướng dẫn đóng gói ứng dụng bằng Docker và thiết lập pipeline tự động hóa kiểm thử/triển khai.

---

## 1. Dockerfile Đa Tầng (Multi-stage Build) Cho .NET

Sử dụng Dockerfile multi-stage giúp giảm kích thước image từ ~800MB xuống còn ~100MB:

```dockerfile
# Giai đoạn 1: Build source code
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY ["MyProject.WebApi/MyProject.WebApi.csproj", "MyProject.WebApi/"]
RUN dotnet restore "MyProject.WebApi/MyProject.WebApi.csproj"

COPY . .
WORKDIR "/src/MyProject.WebApi"
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# Giai đoạn 2: Runtime image siêu nhẹ
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "MyProject.WebApi.dll"]
```

---

## 2. Docker Compose Khởi Tạo Môi Trường Local Nhanh

File `docker-compose.yml` chạy trọn bộ CSDL và Cache cho Developer mới vào team:

```yaml
version: '3.8'

services:
  sqlserver:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=YourStrong@Password2026
    ports:
      - "1433:1433"
    volumes:
      - sql_data:/var/opt/mssql

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  sql_data:
```

Chỉ cần chạy lệnh:
```bash
docker compose up -d
```
Cả team đã có ngay database và redis sẵn sàng code!
