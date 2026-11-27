---
id: overview-guidelines
title: Tiêu Chuẩn Kiến Trúc .NET
sidebar_position: 1
---

# ⚡ Chuẩn Phát Triển .NET Backend Trong Team

Chào mừng các Developer .NET. Nhằm duy trì chất lượng mã nguồn cao và khả năng mở rộng (Maintainability & Scalability), toàn bộ dự án backend của team áp dụng **Clean Architecture** kết hợp mẫu **CQRS** (MediatR).

---

## 1. Cấu Trúc Solution Chuẩn (Clean Architecture)

```text
src/
├── Core/
│   ├── Domain/                 # Entity, Value Object, Domain Events, Enums
│   └── Application/            # CQRS Commands, Queries, DTOs, Validators (FluentValidation), Interfaces
├── Infrastructure/
│   ├── Infrastructure/         # Email, Storage, External APIs, Background Jobs
│   └── Persistence/            # EF Core DbContext, Migrations, Repositories, Dapper Queries
└── Presentation/
    └── WebApi/                 # Controllers / Minimal APIs, Middlewares, Program.cs
```

---

## 2. Chuẩn Thiết Kế REST API Response

Tất cả API trả về định dạng chuẩn bọc qua wrapper `ApiResponse<T>`:

```csharp
public class ApiResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public T? Data { get; set; }
    public List<string>? Errors { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;

    public static ApiResponse<T> Ok(T data, string message = "Success") 
        => new() { Success = true, Message = message, Data = data };

    public static ApiResponse<T> Fail(string error) 
        => new() { Success = false, Errors = new() { error } };
}
```

---

## 3. Quy Tắc Sử Dụng ORM (EF Core vs Dapper)

| Nhu cầu | Lựa chọn đề xuất | Lý do |
| :--- | :--- | :--- |
| **Ghi dữ liệu (Write / Command)** | **Entity Framework Core** | Hỗ trợ Change Tracking, Unit of Work, Migration và Transaction an toàn. |
| **Đọc dữ liệu phức tạp (Read / Query)** | **Dapper** | Tối ưu hiệu năng đọc cực đại, kiểm soát câu lệnh SQL thuần khiết. |
| **Đọc danh sách đơn giản** | **EF Core `.AsNoTracking()`** | Đủ nhanh và dễ duy trì. |

---

## 4. Global Exception Handling (Middleware)

Không dùng `try-catch` tùy tiện trong Controller. Tất cả Exception chưa xử lý sẽ được bắt tự động qua `GlobalExceptionHandlerMiddleware` trả về chuẩn **RFC 7807 (Problem Details)**:

```csharp
app.UseExceptionHandler(exceptionHandlerApp =>
{
    exceptionHandlerApp.Run(async context =>
    {
        context.Response.ContentType = "application/problem+json";
        var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
        var exception = exceptionHandlerPathFeature?.Error;

        var statusCode = exception switch
        {
            NotFoundException => StatusCodes.Status404NotFound,
            ValidationException => StatusCodes.Status400BadRequest,
            UnauthorizedAccessException => StatusCodes.Status401Unauthorized,
            _ => StatusCodes.Status500InternalServerError
        };

        context.Response.StatusCode = statusCode;
        await context.Response.WriteAsJsonAsync(new
        {
            Status = statusCode,
            Title = exception?.Message ?? "An unexpected error occurred.",
            TraceId = Activity.Current?.Id ?? context.TraceIdentifier
        });
    });
});
```
