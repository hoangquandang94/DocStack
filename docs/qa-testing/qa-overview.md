---
id: qa-overview
title: Quy Trình Kiểm Thử QA
sidebar_position: 1
---

# 🧪 Tiêu Chuẩn Kiểm Thử & Quản Lý Lỗi (QA/QC)

Tài liệu hướng dẫn Tester/QA phối hợp hiệu quả với BA và Developer.

---

## 1. Mẫu Báo Cáo Lỗi (Bug Report Template)

Khi log bug lên Jira / Trello / Azure DevOps, hãy tuân thủ mẫu chuẩn sau:

- **Tiêu đề (Summary)**: `[Module] - Hành động gây lỗi - Kết quả sai lệch`
  - *Ví dụ*: `[Orders] - Bấm nút Xuất Hóa Đơn Excel báo lỗi 500 khi ngày kết thúc là hôm nay`
- **Mức độ nghiêm trọng (Severity)**: Blocker / Critical / Major / Minor.
- **Môi trường (Environment)**: Staging (Browser: Chrome 132, OS: Windows 11).
- **Các bước tái hiện (Steps to Reproduce)**:
  1. Đăng nhập tài khoản Manager `test@company.com`.
  2. Truy cập menu Quản lý Đơn hàng -> Danh sách đơn.
  3. Chọn bộ lọc ngày: `01/01/2026 - Hôm nay`.
  4. Bấm nút "Xuất Excel".
- **Kết quả thực tế (Actual Result)**: Màn hình hiển thị toast đỏ "Lỗi hệ thống 500", console hiển thị `NullReferenceException`.
- **Kết quả mong đợi (Expected Result)**: File `.xlsx` được tải về máy thành công với danh sách đơn hàng đã lọc.
- **Đính kèm**: Ảnh chụp màn hình, Network log HAR file.
