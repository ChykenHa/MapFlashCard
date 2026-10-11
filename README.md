# MapFlashCard - Bản Đồ Số & Học Tập 34 Tỉnh Thành Việt Nam
### Mô hình chuyển đổi số dạy học theo Nghị quyết số 202/2025/QH15 của Quốc hội

---

## Giới thiệu tổng quan
Ứng dụng **MapFlashCard** được thiết kế nhằm phục vụ công tác giảng dạy, học tập và kiểm tra đánh giá môn Địa lý trong bối cảnh sắp xếp các đơn vị hành chính cấp tỉnh của Việt Nam theo **Nghị quyết số 202/2025/QH15** (toàn quốc còn 34 đơn vị hành chính cấp tỉnh: 6 Thành phố trực thuộc Trung ương và 28 Tỉnh).

Dự án áp dụng triết lý thiết kế **Tối giản (Minimalist & Clean UX/UI)**, phối màu đơn sắc **Deep Indigo (Xanh chàm địa lý)** sang trọng, không biểu tượng rườm rà, tạo cảm giác học thuật, sư phạm và tập trung thị giác tối đa cho học sinh.

---

## Các Tính Năng Trọng Tâm

1. **Thẻ Ghi Nhớ (Flashcard Spaced Repetition)**:
   - Học tập 34 đơn vị hành chính với cơ chế lật thẻ không gian 3 chiều.
   - Phân loại học tập: Cần ôn lại / Đã ghi nhớ, tự động lưu tiến trình học vào thiết bị.
   - Thơ mẹo ghi nhớ độc quyền cho từng địa phương.

2. **Bản Đồ Kép (Dual Map View)**:
   - **Bản đồ Hành chính NQ 202 (Vector SVG)**: Thể hiện chuẩn xác 100% đường ranh giới sáp nhập của 34 tỉnh thành và 2 quần đảo Hoàng Sa, Trường Sa.
   - **Google Maps Vệ Tinh (GPS Thực Địa)**: Tích hợp hình ảnh vệ tinh độ phân giải cao, tự động điều hướng theo tọa độ GPS trung tâm hành chính của 34 tỉnh.

3. **Luyện Vị Trí (Challenge Arena)**:
   - Trò chơi tương tác nhanh xác định vị trí các tỉnh mới và quần đảo trên bản đồ số, rèn luyện phản xạ không gian.

4. **Trắc Nghiệm Địa Lý Thông Minh (Quiz Engine)**:
   - Ngân hàng **150 câu hỏi** phân loại theo: Chủ trương NQ 202, 6 Thành phố TW, 9 Tỉnh giữ nguyên trạng, 19 Tỉnh hợp nhất mới, Di sản & Kỷ lục.
   - Tùy chọn độ dài bài thi: **10 câu** (Nhanh), **15 câu** (Chuẩn), **20 câu** (Thử thách).
   - Tự động hoán vị ngẫu nhiên 4 đáp án A, B, C, D loại bỏ đoán mò.
   - Bảng tổng kết đánh giá năng lực và phân hạng danh hiệu chuyên môn.

5. **Trợ Lý AI Gia Sư Địa Lý (Google Gemini 3.5 Flash)**:
   - Giải đáp câu hỏi chuyên sâu về ý nghĩa sáp nhập, kinh tế biển, di sản văn hóa và giải thích chi tiết các câu hỏi trắc nghiệm địa lý.

---

## Hướng Dẫn Cài Đặt & Chạy Cục Bộ

1. Mở thư mục dự án trong Terminal / PowerShell:
```bash
cd f:\Địa
```

2. Khởi chạy máy chủ cục bộ bằng Node.js:
```bash
node server.js
```

3. Mở trình duyệt và truy cập:
```
http://127.0.0.1:3456/
```

---

## Hướng Dẫn Đưa Lên GitHub & Triển Khai Miễn Phí (GitHub Pages)

### Bước 1: Khởi tạo Git cục bộ và Commit
Mở PowerShell tại thư mục dự án và chạy:
```bash
git init
git add .
git commit -m "feat: he thong ban do so va trac nghiem 34 tinh thanh viet nam 2026"
```

### Bước 2: Tạo Repository trên GitHub
1. Đăng nhập vào [GitHub](https://github.com/) và bấm nút **New Repository**.
2. Đặt tên kho (ví dụ: `dia-ly-so-viet-nam-2026`), để chế độ **Public**, không cần tích chọn README.
3. Nhấn **Create repository**.

### Bước 3: Đẩy mã nguồn lên GitHub
Sao chép URL kho của bạn và chạy 3 lệnh sau:
```bash
git branch -M main
git remote add origin https://github.com/TÊN_TÀI_KHOẢN/TÊN_KHO.git
git push -u origin main
```

### Bước 4: Bật tính năng trực tuyến (GitHub Pages)
1. Trong trang kho GitHub, chọn tab **Settings**.
2. Ở thanh bên trái, chọn mục **Pages**.
3. Tại phần **Branch**, chọn nhánh `main` và thư mục `/ (root)`.
4. Nhấn **Save**.
5. Sau 1–2 phút, trang web của bạn sẽ hoạt động trực tiếp tại địa chỉ:
   `https://TÊN_TÀI_KHOẢN.github.io/TÊN_KHO/`
