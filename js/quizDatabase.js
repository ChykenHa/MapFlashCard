/**
 * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM ĐỊA LÝ 34 TỈNH THÀNH VIỆT NAM (NQ 202/2025/QH15)
 * Tổng hợp 120+ câu hỏi đa dạng bao gồm:
 * 1. Chủ trương, căn cứ pháp lý Nghị quyết 202/2025/QH15
 * 2. 6 Thành phố trực thuộc Trung ương sau sắp xếp
 * 3. 9 Tỉnh giữ nguyên trạng
 * 4. 19 Tỉnh hợp nhất mới
 * 5. Kỷ lục địa lý, diện tích, dân số, trung tâm hành chính
 * 6. Di sản văn hóa, kinh tế, du lịch và danh thắng gắn với các đơn vị mới
 */

const QUIZ_DATABASE = [
  // --- CHỦ TRƯƠNG & QUY MÔ TỔNG THỂ (CÂU 1 - 15) ---
  {
    id: 1,
    question: "Nghị quyết của Quốc hội về việc sắp xếp đơn vị hành chính cấp tỉnh năm 2025 có số hiệu là gì?",
    options: ["Nghị quyết số 202/2025/QH15", "Nghị quyết số 1211/2025/UBTVQH15", "Nghị quyết số 35/2023/QH15", "Nghị quyết số 88/2025/QH15"],
    answer: 0,
    explanation: "Quốc hội khóa XV đã thông qua Nghị quyết số 202/2025/QH15 ngày 12/6/2025 về việc sắp xếp đơn vị hành chính cấp tỉnh."
  },
  {
    id: 2,
    question: "Sau khi thực hiện sắp xếp theo Nghị quyết 202/2025/QH15, cả nước có bao nhiêu đơn vị hành chính cấp tỉnh?",
    options: ["34 đơn vị (6 thành phố, 28 tỉnh)", "36 đơn vị (5 thành phố, 31 tỉnh)", "32 đơn vị (6 thành phố, 26 tỉnh)", "63 đơn vị (5 thành phố, 58 tỉnh)"],
    answer: 0,
    explanation: "Cả nước chính thức có 34 đơn vị hành chính cấp tỉnh, bao gồm 6 thành phố trực thuộc Trung ương và 28 tỉnh."
  },
  {
    id: 3,
    question: "Số lượng đơn vị hành chính cấp tỉnh giảm bao nhiêu đơn vị so với trước sắp xếp?",
    options: ["Giảm 29 đơn vị (từ 63 xuống 34)", "Giảm 25 đơn vị", "Giảm 31 đơn vị", "Giảm 27 đơn vị"],
    answer: 0,
    explanation: "Từ 63 tỉnh, thành phố trước đây giảm 29 đơn vị, còn lại 34 đơn vị hành chính cấp tỉnh."
  },
  {
    id: 4,
    question: "Có bao nhiêu tỉnh, thành phố trực thuộc Trung ương KHÔNG thực hiện sắp xếp (giữ nguyên trạng)?",
    options: ["11 đơn vị", "9 đơn vị", "13 đơn vị", "7 đơn vị"],
    answer: 0,
    explanation: "Có 11 đơn vị giữ nguyên trạng gồm: Hà Nội, Huế, Cao Bằng, Lạng Sơn, Lai Châu, Điện Biên, Sơn La, Quảng Ninh, Thanh Hóa, Nghệ An, Hà Tĩnh."
  },
  {
    id: 5,
    question: "Có bao nhiêu đơn vị hành chính cấp tỉnh được hình thành sau quá trình sắp xếp, hợp nhất?",
    options: ["23 đơn vị (4 thành phố và 19 tỉnh)", "21 đơn vị", "25 đơn vị", "19 đơn vị"],
    answer: 0,
    explanation: "Có 23 đơn vị hình thành từ việc sáp nhập 52 địa phương cũ (gồm 4 thành phố trực thuộc TW và 19 tỉnh)."
  },
  {
    id: 6,
    question: "Nghị quyết số 202/2025/QH15 có hiệu lực thi hành từ ngày nào?",
    options: ["Ngày 12 tháng 6 năm 2025", "Ngày 01 tháng 7 năm 2025", "Ngày 01 tháng 1 năm 2026", "Ngày 15 tháng 8 năm 2025"],
    answer: 0,
    explanation: "Nghị quyết 202/2025/QH15 có hiệu lực thi hành kể từ ngày Quốc hội thông qua: 12/6/2025."
  },
  {
    id: 7,
    question: "Chính quyền địa phương ở các tỉnh, thành phố mới hình thành sau sắp xếp chính thức đi vào hoạt động từ thời điểm nào?",
    options: ["Ngày 01 tháng 7 năm 2025", "Ngày 12 tháng 6 năm 2025", "Ngày 01 tháng 1 năm 2026", "Ngày 15 tháng 9 năm 2025"],
    answer: 0,
    explanation: "Theo Điều 2 Nghị quyết 202/2025/QH15, chính quyền địa phương mới chính thức hoạt động từ ngày 01/7/2025."
  },
  {
    id: 8,
    question: "Sau sắp xếp năm 2025, số lượng thành phố trực thuộc Trung ương của Việt Nam là bao nhiêu?",
    options: ["6 thành phố", "5 thành phố", "7 thành phố", "4 thành phố"],
    answer: 0,
    explanation: "Có 6 thành phố trực thuộc Trung ương gồm: Hà Nội, Hải Phòng, Huế, Đà Nẵng, TP. Hồ Chí Minh và Cần Thơ."
  },
  {
    id: 9,
    question: "Mục tiêu trọng tâm của việc sắp xếp các đơn vị hành chính cấp tỉnh theo Nghị quyết của Quốc hội là gì?",
    options: [
      "Tinh gọn bộ máy, mở rộng không gian phát triển kinh tế - xã hội và nâng cao hiệu lực quản lý",
      "Tăng biên chế cán bộ công chức các cấp",
      "Chia nhỏ các vùng kinh tế để dễ điều hành",
      "Giảm số lượng thành phố trực thuộc Trung ương"
    ],
    answer: 0,
    explanation: "Việc sắp xếp nhằm tinh gọn bộ máy, nâng cao hiệu lực hiệu quả, giảm đầu mối quản lý và tạo không gian phát triển mới."
  },
  {
    id: 10,
    question: "Trong 34 đơn vị hành chính cấp tỉnh mới, có bao nhiêu đơn vị là tỉnh?",
    options: ["28 tỉnh", "29 tỉnh", "26 tỉnh", "25 tỉnh"],
    answer: 0,
    explanation: "Cơ cấu 34 đơn vị gồm 6 thành phố trực thuộc Trung ương và 28 tỉnh."
  },
  {
    id: 11,
    question: "Đơn vị nào sau đây là thành phố trực thuộc Trung ương được nâng cấp nguyên trạng từ một tỉnh cũ?",
    options: ["Thành phố Huế", "Thành phố Đà Nẵng", "Thành phố Cần Thơ", "Thành phố Hải Phòng"],
    answer: 0,
    explanation: "Tỉnh Thừa Thiên Huế giữ nguyên địa giới và được nâng cấp thành Thành phố Huế trực thuộc Trung ương."
  },
  {
    id: 12,
    question: "Thành phố trực thuộc Trung ương nào có diện tích tự nhiên lớn nhất cả nước sau khi sáp nhập?",
    options: ["Thành phố Đà Nẵng (11.859,59 km²)", "Thành phố Hồ Chí Minh", "Thành phố Hà Nội", "Thành phố Hải Phòng"],
    answer: 0,
    explanation: "TP. Đà Nẵng mới (hợp nhất Đà Nẵng và Quảng Nam) có diện tích 11.859,59 km², lớn nhất trong 6 thành phố trực thuộc TW."
  },
  {
    id: 13,
    question: "Thành phố trực thuộc Trung ương nào có quy mô dân số đông nhất cả nước sau sắp xếp?",
    options: ["Thành phố Hồ Chí Minh (khoảng 14 triệu người)", "Thành phố Hà Nội (khoảng 8.5 triệu người)", "Thành phố Hải Phòng", "Thành phố Cần Thơ"],
    answer: 0,
    explanation: "TP. Hồ Chí Minh mới (hợp nhất TP.HCM, Bình Dương và Bà Rịa - Vũng Tàu) có dân số lên tới 14 triệu người."
  },
  {
    id: 14,
    question: "Vùng kinh tế nào có cả 3 địa phương giữ nguyên trạng địa giới hành chính?",
    options: ["Tây Bắc Bộ (Lai Châu, Điện Biên, Sơn La)", "Đồng bằng sông Hồng", "Đông Nam Bộ", "Đồng bằng sông Cửu Long"],
    answer: 0,
    explanation: "Tại Tây Bắc Bộ, cả 3 tỉnh Lai Châu, Điện Biên, Sơn La đều là các tỉnh giữ nguyên trạng."
  },
  {
    id: 15,
    question: "Đơn vị nào tại vùng Bắc Trung Bộ giữ nguyên trạng diện tích tự nhiên lớn nhất Việt Nam?",
    options: ["Tỉnh Nghệ An (16.493,70 km²)", "Tỉnh Thanh Hóa", "Tỉnh Hà Tĩnh", "Tỉnh Quảng Trị"],
    answer: 0,
    explanation: "Tỉnh Nghệ An giữ nguyên trạng và tiếp tục là tỉnh có diện tích tự nhiên rộng nhất miền Bắc và toàn quốc (16.493,7 km²)."
  },

  // --- 6 THÀNH PHỐ TRỰC THUỘC TRUNG ƯƠNG (CÂU 16 - 35) ---
  {
    id: 16,
    question: "Thành phố Hà Nội sau đợt sắp xếp 2025 có trạng thái địa giới hành chính như thế nào?",
    options: ["Giữ nguyên trạng địa giới tự nhiên và dân số", "Sáp nhập thêm tỉnh Bắc Ninh", "Sáp nhập thêm tỉnh Hưng Yên", "Sáp nhập thêm tỉnh Vĩnh Phúc"],
    answer: 0,
    explanation: "Thủ đô Hà Nội là 1 trong 11 đơn vị hành chính cấp tỉnh được giữ nguyên trạng, không thực hiện sắp xếp."
  },
  {
    id: 17,
    question: "Thành phố Hải Phòng mới được hình thành từ việc sáp nhập những địa phương nào?",
    options: ["TP. Hải Phòng và tỉnh Hải Dương", "TP. Hải Phòng và tỉnh Quảng Ninh", "TP. Hải Phòng và tỉnh Thái Bình", "TP. Hải Phòng và tỉnh Hưng Yên"],
    answer: 0,
    explanation: "TP. Hải Phòng mới được hợp nhất từ toàn bộ diện tích và dân số của TP. Hải Phòng cũ và tỉnh Hải Dương."
  },
  {
    id: 18,
    question: "Thành phố Đà Nẵng mới được hình thành từ việc sáp nhập những địa phương nào?",
    options: ["TP. Đà Nẵng và tỉnh Quảng Nam", "TP. Đà Nẵng và tỉnh Quảng Ngãi", "TP. Đà Nẵng và tỉnh Thừa Thiên Huế", "TP. Đà Nẵng và tỉnh Bình Định"],
    answer: 0,
    explanation: "Thành phố Đà Nẵng mới được hợp nhất từ TP. Đà Nẵng và tỉnh Quảng Nam."
  },
  {
    id: 19,
    question: "Di sản văn hóa thế giới Phố cổ Hội An và Thánh địa Mỹ Sơn hiện thuộc đơn vị hành chính cấp tỉnh nào?",
    options: ["Thành phố Đà Nẵng", "Tỉnh Quảng Ngãi", "Thành phố Huế", "Tỉnh Quảng Nam (độc lập)"],
    answer: 0,
    explanation: "Sau khi Quảng Nam sáp nhập vào Đà Nẵng, hai di sản văn hóa thế giới Hội An và Mỹ Sơn thuộc về TP. Đà Nẵng mới."
  },
  {
    id: 20,
    question: "Thành phố Hồ Chí Minh mới được hình thành sau khi sáp nhập bao nhiêu địa phương cũ?",
    options: ["3 địa phương (TP.HCM, Bình Dương, Bà Rịa - Vũng Tàu)", "2 địa phương (TP.HCM, Bình Dương)", "2 địa phương (TP.HCM, Long An)", "4 địa phương"],
    answer: 0,
    explanation: "TP. Hồ Chí Minh mới là sự hợp nhất của TP. Hồ Chí Minh, tỉnh Bình Dương và tỉnh Bà Rịa - Vũng Tàu."
  },
  {
    id: 21,
    question: "Côn Đảo sau khi sắp xếp thuộc địa giới hành chính của đơn vị cấp tỉnh nào?",
    options: ["Thành phố Hồ Chí Minh", "Tỉnh Đồng Nai", "Tỉnh Bến Tre", "Tỉnh Tây Ninh"],
    answer: 0,
    explanation: "Huyện Côn Đảo vốn thuộc tỉnh Bà Rịa - Vũng Tàu cũ, sau sáp nhập trở thành một phần của TP. Hồ Chí Minh mới."
  },
  {
    id: 22,
    question: "Thành phố Cần Thơ mới được hình thành từ việc hợp nhất những đơn vị hành chính nào?",
    options: ["TP. Cần Thơ, tỉnh Hậu Giang và tỉnh Sóc Trăng", "TP. Cần Thơ, tỉnh Vĩnh Long và tỉnh An Giang", "TP. Cần Thơ, tỉnh Kiên Giang và tỉnh Cà Mau", "TP. Cần Thơ và tỉnh Hậu Giang"],
    answer: 0,
    explanation: "Thành phố Cần Thơ mới được hợp nhất từ 3 đơn vị: TP. Cần Thơ, tỉnh Hậu Giang và tỉnh Sóc Trăng."
  },
  {
    id: 23,
    question: "Thành phố Cần Thơ mới có vị trí tiếp giáp với biển nào sau khi hợp nhất?",
    options: ["Biển Đông (thông qua địa phận Sóc Trăng)", "Vịnh Thái Lan", "Không giáp biển", "Vịnh Bắc Bộ"],
    answer: 0,
    explanation: "Nhờ sáp nhập tỉnh Sóc Trăng, Thành phố Cần Thơ mới mở rộng không gian vươn ra Biển Đông."
  },
  {
    id: 24,
    question: "Quần đảo Hoàng Sa thuộc đơn vị hành chính cấp tỉnh nào của Việt Nam?",
    options: ["Thành phố Đà Nẵng", "Tỉnh Quảng Ngãi", "Thành phố Huế", "Tỉnh Khánh Hòa"],
    answer: 0,
    explanation: "Huyện đảo Hoàng Sa trực thuộc Thành phố Đà Nẵng."
  },
  {
    id: 25,
    question: "Thành phố Huế trực thuộc Trung ương sở hữu di sản văn hóa thế giới nổi tiếng nào?",
    options: ["Quần thể di tích Cố đô Huế và Nhã nhạc cung đình Huế", "Khu di tích Hoàng thành Thăng Long", "Thành nhà Hồ", "Tràng An"],
    answer: 0,
    explanation: "Thành phố Huế nổi tiếng với Quần thể di tích Cố đô Huế và Nhã nhạc cung đình Huế."
  },
  {
    id: 26,
    question: "Sau sắp xếp, cảng nước sâu Cái Mép - Thị Vải thuộc địa giới của thành phố nào?",
    options: ["Thành phố Hồ Chí Minh", "Thành phố Hải Phòng", "Thành phố Đà Nẵng", "Tỉnh Đồng Nai"],
    answer: 0,
    explanation: "Cảng Cái Mép - Thị Vải (thị xã Phú Mỹ, Bà Rịa - Vũng Tàu cũ) nay thuộc Thành phố Hồ Chí Minh mới."
  },
  {
    id: 27,
    question: "Thành phố Hải Phòng sau khi sáp nhập Hải Dương có diện tích tự nhiên là bao nhiêu?",
    options: ["Khoảng 3.194,72 km²", "Khoảng 1.560 km²", "Khoảng 5.200 km²", "Khoảng 2.100 km²"],
    answer: 0,
    explanation: "TP. Hải Phòng mới có diện tích tự nhiên là 3.194,72 km² và dân số trên 4,66 triệu người."
  },
  {
    id: 28,
    question: "Thành phố Đà Nẵng mới có trung tâm hành chính đặt tại quận nào?",
    options: ["Quận Hải Châu", "Quận Ngũ Hành Sơn", "Thành phố Tam Kỳ", "Thị xã Điện Bàn"],
    answer: 0,
    explanation: "Trung tâm hành chính của TP. Đà Nẵng mới tiếp tục đặt tại khu vực lõi đô thị Quận Hải Châu."
  },
  {
    id: 29,
    question: "Thành phố Hồ Chí Minh mới có diện tích tự nhiên đạt khoảng bao nhiêu km²?",
    options: ["6.772,59 km²", "2.095 km²", "4.500 km²", "8.200 km²"],
    answer: 0,
    explanation: "Sau khi hợp nhất TP.HCM, Bình Dương và Bà Rịa - Vũng Tàu, diện tích TP.HCM mới là 6.772,59 km²."
  },
  {
    id: 30,
    question: "Thành phố Cần Thơ mới sau sắp xếp có quy mô dân số khoảng bao nhiêu?",
    options: ["Khoảng 4,20 triệu người", "Khoảng 1,25 triệu người", "Khoảng 2,8 triệu người", "Khoảng 5,5 triệu người"],
    answer: 0,
    explanation: "Thành phố Cần Thơ mới đạt quy mô dân số khoảng 4,20 triệu người."
  },

  // --- 9 TỈNH NGUYÊN TRẠNG (CÂU 31 - 48) ---
  {
    id: 31,
    question: "Tỉnh Lai Châu giữ nguyên trạng có đặc điểm tự nhiên nổi bật nào?",
    options: [
      "Có các đỉnh núi cao hùng vĩ như Pu Si Lung, Pu Ta Leng",
      "Có diện tích đất liền lớn nhất đồng bằng sông Hồng",
      "Nằm ở cực Nam của đất nước",
      "Tiếp giáp trực tiếp với Vịnh Bắc Bộ"
    ],
    answer: 0,
    explanation: "Lai Châu sở hữu nhiều đỉnh núi cao ngoạn mục bậc nhất Tây Bắc như Pu Si Lung và Pu Ta Leng."
  },
  {
    id: 32,
    question: "Tỉnh Điện Biên gắn liền với di tích lịch sử nổi tiếng nào?",
    options: ["Chiến trường Điện Biên Phủ lịch sử 1954", "Ải Chi Lăng", "Thành cổ Quảng Trị", "Ngã ba Đồng Lộc"],
    answer: 0,
    explanation: "Điện Biên là nơi ghi dấu chiến thắng Điện Biên Phủ 'Lừng lẫy năm châu, chấn động địa cầu' năm 1954."
  },
  {
    id: 33,
    question: "Công trình thủy điện lớn nhất Đông Nam Á nằm tại địa phương giữ nguyên trạng nào?",
    options: ["Tỉnh Sơn La (Thủy điện Sơn La)", "Tỉnh Lai Châu", "Tỉnh Hòa Bình", "Tỉnh Điện Biên"],
    answer: 0,
    explanation: "Nhà máy Thủy điện Sơn La trên dòng sông Đà là công trình thủy điện lớn nhất Đông Nam Á."
  },
  {
    id: 34,
    question: "Địa danh cao nguyên du lịch nổi tiếng Mộc Châu thuộc tỉnh nào?",
    options: ["Tỉnh Sơn La", "Tỉnh Điện Biên", "Tỉnh Phú Thọ", "Tỉnh Lào Cai"],
    answer: 0,
    explanation: "Khu du lịch quốc gia Cao nguyên Mộc Châu nằm tại tỉnh Sơn La."
  },
  {
    id: 35,
    question: "Kỳ quan thiên nhiên thế giới Vịnh Hạ Long thuộc tỉnh nào sau sắp xếp?",
    options: ["Tỉnh Quảng Ninh", "Thành phố Hải Phòng", "Tỉnh Lạng Sơn", "Tỉnh Bắc Ninh"],
    answer: 0,
    explanation: "Tỉnh Quảng Ninh giữ nguyên trạng và quản lý Di sản thiên nhiên thế giới Vịnh Hạ Long."
  },
  {
    id: 36,
    question: "Quảng Ninh là một tỉnh thuộc vùng kinh tế nào và có đặc trưng công nghiệp gì?",
    options: ["Đông Bắc Bộ; trung tâm khai thác than đá lớn nhất cả nước", "Tây Bắc Bộ; trung tâm dệt may", "Đồng bằng sông Hồng; vùng lúa gạo", "Bắc Trung Bộ; luyện kim"],
    answer: 0,
    explanation: "Quảng Ninh thuộc Đông Bắc Bộ, là trung tâm công nghiệp khai khoáng và than đá trọng điểm quốc gia."
  },
  {
    id: 37,
    question: "Tỉnh Lạng Sơn tiếp giáp với quốc gia nào qua các cửa khẩu quốc tế Hữu Nghị, Tân Thanh?",
    options: ["Trung Quốc", "Lào", "Campuchia", "Thái Lan"],
    answer: 0,
    explanation: "Lạng Sơn có đường biên giới đường bộ tiếp giáp với nước Cộng hòa Nhân dân Trung Hoa."
  },
  {
    id: 38,
    question: "Khu di tích lịch sử Pác Bó và thác Bản Giốc thuộc tỉnh nào?",
    options: ["Tỉnh Cao Bằng", "Tỉnh Lạng Sơn", "Tỉnh Tuyên Quang", "Tỉnh Thái Nguyên"],
    answer: 0,
    explanation: "Khu di tích Quốc gia đặc biệt Pác Bó và thác Bản Giốc nằm tại tỉnh Cao Bằng."
  },
  {
    id: 39,
    question: "Di sản văn hóa thế giới Thành nhà Hồ bằng đá độc đáo thuộc tỉnh nào?",
    options: ["Tỉnh Thanh Hóa", "Tỉnh Ninh Bình", "Tỉnh Nghệ An", "Tỉnh Hà Tĩnh"],
    answer: 0,
    explanation: "Di sản thế giới Thành nhà Hồ tọa lạc tại huyện Vĩnh Lộc, tỉnh Thanh Hóa."
  },
  {
    id: 40,
    question: "Quê hương của Chủ tịch Hồ Chí Minh (Khu di tích Kim Liên) thuộc tỉnh nào?",
    options: ["Tỉnh Nghệ An", "Tỉnh Hà Tĩnh", "Tỉnh Thanh Hóa", "Tỉnh Quảng Bình"],
    answer: 0,
    explanation: "Khu di tích Kim Liên, quê hương Bác Hồ, tọa lạc tại huyện Nam Đàn, tỉnh Nghệ An."
  },
  {
    id: 41,
    question: "Tỉnh Hà Tĩnh nổi tiếng với đại danh hào nào của nền văn học Việt Nam?",
    options: ["Đại thi hào Nguyễn Du", "Nguyễn Trãi", "Hồ Xuân Hương", "Đoàn Thị Điểm"],
    answer: 0,
    explanation: "Hà Tĩnh là quê hương của Đại thi hào dân tộc Nguyễn Du - tác giả Truyện Kiều."
  },
  {
    id: 42,
    question: "Khu kinh tế Vũng Áng với cụm cảng nước sâu và tổ hợp gang thép lớn nằm ở tỉnh nào?",
    options: ["Tỉnh Hà Tĩnh", "Tỉnh Quảng Trị", "Tỉnh Nghệ An", "Tỉnh Thanh Hóa"],
    answer: 0,
    explanation: "Khu kinh tế Vũng Áng nằm tại thị xã Kỳ Anh, tỉnh Hà Tĩnh."
  },
  {
    id: 43,
    question: "Tỉnh Thanh Hóa có bãi biển du lịch nổi tiếng nào?",
    options: ["Bãi biển Sầm Sơn", "Bãi biển Cửa Lò", "Bãi biển Thiên Cầm", "Bãi biển Trà Cổ"],
    answer: 0,
    explanation: "Bãi biển Sầm Sơn là điểm du lịch nghỉ mát nổi tiếng của tỉnh Thanh Hóa."
  },
  {
    id: 44,
    question: "Đỉnh núi Phan Xi Păng (Fansipan) cao 3.143m KHÔNG nằm trên địa bàn tỉnh nào sau đây?",
    options: ["Tỉnh Điện Biên", "Tỉnh Lào Cai", "Tỉnh Lai Châu", "Dãy Hoàng Liên Sơn"],
    answer: 0,
    explanation: "Đỉnh Fansipan nằm trên dãy Hoàng Liên Sơn thuộc ranh giới Lào Cai và Lai Châu, không thuộc Điện Biên."
  },
  {
    id: 45,
    question: "Tỉnh giữ nguyên trạng nào có diện tích đất tự nhiên lớn nhất cả nước?",
    options: ["Tỉnh Nghệ An", "Tỉnh Sơn La", "Tỉnh Thanh Hóa", "Tỉnh Điện Biên"],
    answer: 0,
    explanation: "Nghệ An có diện tích tự nhiên 16.493,70 km², lớn nhất trong số các tỉnh giữ nguyên trạng."
  },

  // --- 19 TỈNH HỢP NHẤT MỚI (CÂU 46 - 85) ---
  {
    id: 46,
    question: "Tỉnh Tuyên Quang mới được hình thành từ việc sáp nhập 2 tỉnh nào?",
    options: ["Hà Giang và Tuyên Quang", "Cao Bằng và Tuyên Quang", "Bắc Kạn và Tuyên Quang", "Lào Cai và Tuyên Quang"],
    answer: 0,
    explanation: "Tỉnh Tuyên Quang mới được hình thành sau khi sáp nhập toàn bộ diện tích và dân số của Hà Giang và Tuyên Quang."
  },
  {
    id: 47,
    question: "Điểm cực Bắc của Tổ quốc (Cột cờ Lũng Cú) sau sáp nhập thuộc địa giới tỉnh nào?",
    options: ["Tỉnh Tuyên Quang", "Tỉnh Cao Bằng", "Tỉnh Lào Cai", "Tỉnh Lạng Sơn"],
    answer: 0,
    explanation: "Huyện Đồng Văn (Hà Giang cũ) với cột cờ Lũng Cú nay thuộc địa giới của tỉnh Tuyên Quang mới."
  },
  {
    id: 48,
    question: "Tỉnh Lào Cai mới được hình thành từ việc hợp nhất những tỉnh nào?",
    options: ["Lào Cai và Yên Bái", "Lào Cai và Lai Châu", "Lào Cai và Phú Thọ", "Lào Cai và Hà Giang"],
    answer: 0,
    explanation: "Tỉnh Lào Cai mới được hình thành từ việc sáp nhập toàn bộ tỉnh Yên Bái và tỉnh Lào Cai."
  },
  {
    id: 49,
    question: "Danh thắng ruộng bậc thang Mù Cang Chải hiện nay thuộc tỉnh nào?",
    options: ["Tỉnh Lào Cai", "Tỉnh Sơn La", "Tỉnh Lai Châu", "Tỉnh Phú Thọ"],
    answer: 0,
    explanation: "Huyện Mù Cang Chải (Yên Bái cũ) sau sáp nhập thuộc địa giới hành chính của tỉnh Lào Cai mới."
  },
  {
    id: 50,
    question: "Tỉnh Thái Nguyên mới được hình thành từ việc sáp nhập 2 tỉnh nào?",
    options: ["Bắc Kạn và Thái Nguyên", "Tuyên Quang và Thái Nguyên", "Lạng Sơn và Thái Nguyên", "Bắc Giang và Thái Nguyên"],
    answer: 0,
    explanation: "Tỉnh Thái Nguyên mới hợp nhất từ toàn bộ tỉnh Bắc Kạn và tỉnh Thái Nguyên."
  },
  {
    id: 51,
    question: "Hồ Ba Bể - một trong những hồ nước ngọt tự nhiên lớn nhất thế giới - nay thuộc tỉnh nào?",
    options: ["Tỉnh Thái Nguyên", "Tỉnh Tuyên Quang", "Tỉnh Cao Bằng", "Tỉnh Lạng Sơn"],
    answer: 0,
    explanation: "Hồ Ba Bể thuộc tỉnh Bắc Kạn cũ, sau sáp nhập trở thành danh thắng của tỉnh Thái Nguyên mới."
  },
  {
    id: 52,
    question: "Tỉnh Phú Thọ mới được hình thành từ việc hợp nhất 3 địa phương nào?",
    options: ["Phú Thọ, Vĩnh Phúc và Hòa Bình", "Phú Thọ, Yên Bái và Lào Cai", "Phú Thọ, Tuyên Quang và Hà Giang", "Phú Thọ, Sơn La và Điện Biên"],
    answer: 0,
    explanation: "Tỉnh Phú Thọ mới được hợp nhất từ 3 tỉnh: Phú Thọ, Vĩnh Phúc và Hòa Bình."
  },
  {
    id: 53,
    question: "Khu di tích lịch sử Đền Hùng - nơi thờ phụng các vua Hùng - thuộc trung tâm hành chính tỉnh nào?",
    options: ["Tỉnh Phú Thọ (TP. Việt Trì)", "Tỉnh Vĩnh Phúc", "Tỉnh Hà Nội", "Tỉnh Bắc Ninh"],
    answer: 0,
    explanation: "Khu di tích Đền Hùng tọa lạc tại núi Nghĩa Lĩnh, thành phố Việt Trì, tỉnh Phú Thọ."
  },
  {
    id: 54,
    question: "Tỉnh Bắc Ninh mới được hình thành từ việc sáp nhập 2 tỉnh nào thuộc vùng Kinh Bắc xưa?",
    options: ["Bắc Giang và Bắc Ninh", "Bắc Ninh và Hải Dương", "Bắc Ninh và Hưng Yên", "Bắc Ninh và Thái Nguyên"],
    answer: 0,
    explanation: "Tỉnh Bắc Ninh mới được hợp nhất từ 2 tỉnh anh em: Bắc Giang và Bắc Ninh."
  },
  {
    id: 55,
    question: "Vùng đất trứ danh của Dân ca Quan họ được UNESCO công nhận là di sản văn hóa phi vật thể thuộc tỉnh nào?",
    options: ["Tỉnh Bắc Ninh", "Tỉnh Phú Thọ", "Tỉnh Nam Định", "Tỉnh Thái Bình"],
    answer: 0,
    explanation: "Vùng Kinh Bắc (Bắc Ninh mới) là cái nôi của Dân ca Quan họ."
  },
  {
    id: 56,
    question: "Vùng trồng vải thiều Lục Ngạn nổi tiếng xuất khẩu toàn cầu nay thuộc tỉnh nào?",
    options: ["Tỉnh Bắc Ninh", "Tỉnh Quảng Ninh", "Tỉnh Hải Dương", "Tỉnh Lạng Sơn"],
    answer: 0,
    explanation: "Huyện Lục Ngạn (Bắc Giang cũ) nay thuộc địa giới của tỉnh Bắc Ninh mới."
  },
  {
    id: 57,
    question: "Tỉnh Hưng Yên mới được hình thành từ việc hợp nhất 2 tỉnh nào?",
    options: ["Hưng Yên và Thái Bình", "Hưng Yên và Hải Dương", "Hưng Yên và Hà Nam", "Hưng Yên và Nam Định"],
    answer: 0,
    explanation: "Tỉnh Hưng Yên mới là sự hợp nhất của 2 tỉnh: Hưng Yên và Thái Bình."
  },
  {
    id: 58,
    question: "Câu ca 'Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến' gợi nhớ đến di tích lịch sử thuộc tỉnh nào?",
    options: ["Tỉnh Hưng Yên", "Tỉnh Bắc Ninh", "Tỉnh Ninh Bình", "Tỉnh Hải Phòng"],
    answer: 0,
    explanation: "Khu di tích Phố Hiến cổ kính nằm tại thành phố Hưng Yên, tỉnh Hưng Yên."
  },
  {
    id: 59,
    question: "Tỉnh Ninh Bình mới được hình thành từ việc sáp nhập 3 tỉnh nào?",
    options: ["Ninh Bình, Nam Định và Hà Nam", "Ninh Bình, Thái Bình và Nam Định", "Ninh Bình, Thanh Hóa và Hòa Bình", "Ninh Bình, Hưng Yên và Hải Dương"],
    answer: 0,
    explanation: "Tỉnh Ninh Bình mới được sáp nhập từ 3 tỉnh phía Nam châu thổ sông Hồng: Ninh Bình, Nam Định và Hà Nam."
  },
  {
    id: 60,
    question: "Quần thể danh thắng Tràng An - di sản văn hóa và thiên nhiên thế giới hỗn hợp - thuộc tỉnh nào?",
    options: ["Tỉnh Ninh Bình", "Tỉnh Thanh Hóa", "Tỉnh Quảng Ninh", "Tỉnh Phú Thọ"],
    answer: 0,
    explanation: "Quần thể danh thắng Tràng An tọa lạc tại tỉnh Ninh Bình."
  },
  {
    id: 61,
    question: "Khu du lịch tâm linh Tam Chúc lớn bậc nhất miền Bắc nay thuộc tỉnh nào?",
    options: ["Tỉnh Ninh Bình", "Tỉnh Hưng Yên", "Tỉnh Thái Nguyên", "Thành phố Hà Nội"],
    answer: 0,
    explanation: "Chùa Tam Chúc thuộc thị trấn Ba Sao (Hà Nam cũ), nay thuộc tỉnh Ninh Bình mới."
  },
  {
    id: 62,
    question: "Tỉnh Quảng Trị mới được hình thành từ việc hợp nhất 2 tỉnh nào?",
    options: ["Quảng Bình và Quảng Trị", "Quảng Trị và Thừa Thiên Huế", "Quảng Trị và Quảng Nam", "Quảng Trị và Hà Tĩnh"],
    answer: 0,
    explanation: "Tỉnh Quảng Trị mới được hình thành từ việc sáp nhập tỉnh Quảng Bình và tỉnh Quảng Trị."
  },
  {
    id: 63,
    question: "Vườn quốc gia Phong Nha - Kẻ Bàng và hang Sơn Đoòng hiện nay thuộc tỉnh nào?",
    options: ["Tỉnh Quảng Trị", "Tỉnh Hà Tĩnh", "Thành phố Huế", "Tỉnh Nghệ An"],
    answer: 0,
    explanation: "Quảng Bình sáp nhập vào Quảng Trị, đưa 'Vương quốc hang động' Phong Nha và Sơn Đoòng về tỉnh Quảng Trị mới."
  },
  {
    id: 64,
    question: "Địa đạo Vịnh Mốc và sông Bến Hải (vĩ tuyến 17 lịch sử) thuộc tỉnh nào?",
    options: ["Tỉnh Quảng Trị", "Thành phố Huế", "Tỉnh Quảng Bình", "Tỉnh Hà Tĩnh"],
    answer: 0,
    explanation: "Di tích lịch sử đôi bờ Hiền Lương - Bến Hải và Địa đạo Vịnh Mốc thuộc tỉnh Quảng Trị."
  },
  {
    id: 65,
    question: "Tỉnh Quảng Ngãi mới được hình thành từ việc hợp nhất 2 tỉnh nào?",
    options: ["Kon Tum và Quảng Ngãi", "Quảng Nam và Quảng Ngãi", "Bình Định và Quảng Ngãi", "Gia Lai và Quảng Ngãi"],
    answer: 0,
    explanation: "Tỉnh Quảng Ngãi mới là sự hợp nhất của tỉnh Kon Tum (Tây Nguyên) và tỉnh Quảng Ngãi (Duyên hải)."
  },
  {
    id: 66,
    question: "Đảo tiền tiêu Lý Sơn - 'Vương quốc tỏi' - thuộc đơn vị hành chính cấp tỉnh nào?",
    options: ["Tỉnh Quảng Ngãi", "Thành phố Đà Nẵng", "Tỉnh Bình Định", "Tỉnh Khánh Hòa"],
    answer: 0,
    explanation: "Huyện đảo Lý Sơn trực thuộc tỉnh Quảng Ngãi."
  },
  {
    id: 67,
    question: "Quốc bảo Sâm Ngọc Linh phân bố chủ yếu trên địa bàn các đơn vị nào sau sắp xếp?",
    options: ["Tỉnh Quảng Ngãi và Thành phố Đà Nẵng", "Tỉnh Gia Lai và Đắk Lắk", "Tỉnh Lâm Đồng và Khánh Hòa", "Tỉnh Phú Thọ và Lào Cai"],
    answer: 0,
    explanation: "Núi Ngọc Linh nằm giáp ranh Kon Tum (nay thuộc Quảng Ngãi mới) và Quảng Nam (nay thuộc TP. Đà Nẵng mới)."
  },
  {
    id: 68,
    question: "Tỉnh Gia Lai mới được hình thành từ việc hợp nhất 2 địa phương nào?",
    options: ["Gia Lai và Bình Định", "Gia Lai và Kon Tum", "Gia Lai và Đắk Lắk", "Gia Lai và Phú Yên"],
    answer: 0,
    explanation: "Tỉnh Gia Lai mới được sáp nhập từ tỉnh Bình Định (duyên hải) và tỉnh Gia Lai (cao nguyên)."
  },
  {
    id: 69,
    question: "Thành phố biển Quy Nhơn và vùng đất võ Tây Sơn nay thuộc tỉnh nào?",
    options: ["Tỉnh Gia Lai", "Tỉnh Đắk Lắk", "Tỉnh Quảng Ngãi", "Tỉnh Phú Yên"],
    answer: 0,
    explanation: "Bình Định hợp nhất vào Gia Lai, nên Quy Nhơn và vùng đất võ Tây Sơn nay thuộc tỉnh Gia Lai mới."
  },
  {
    id: 70,
    question: "Tỉnh Đắk Lắk mới được hình thành từ việc sáp nhập 2 tỉnh nào?",
    options: ["Đắk Lắk và Phú Yên", "Đắk Lắk và Đắk Nông", "Đắk Lắk và Lâm Đồng", "Đắk Lắk và Gia Lai"],
    answer: 0,
    explanation: "Tỉnh Đắk Lắk mới được hợp nhất từ tỉnh Phú Yên và tỉnh Đắk Lắk."
  },
  {
    id: 71,
    question: "Danh thắng Gành Đá Đĩa và Mũi Điện (nơi đón bình minh đầu tiên trên đất liền) nay thuộc tỉnh nào?",
    options: ["Tỉnh Đắk Lắk", "Tỉnh Khánh Hòa", "Tỉnh Gia Lai", "Tỉnh Ninh Thuận"],
    answer: 0,
    explanation: "Tỉnh Phú Yên sáp nhập vào Đắk Lắk, do đó Gành Đá Đĩa và Mũi Điện nay thuộc tỉnh Đắk Lắk mới."
  },
  {
    id: 72,
    question: "Thành phố Buôn Ma Thuột - thủ phủ cà phê của Việt Nam - là trung tâm hành chính tỉnh nào?",
    options: ["Tỉnh Đắk Lắk", "Tỉnh Lâm Đồng", "Tỉnh Gia Lai", "Tỉnh Kon Tum"],
    answer: 0,
    explanation: "TP. Buôn Ma Thuột là thủ phủ cà phê và trung tâm hành chính lớn của tỉnh Đắk Lắk."
  },
  {
    id: 73,
    question: "Tỉnh Khánh Hòa mới được hình thành từ việc hợp nhất 2 tỉnh nào?",
    options: ["Khánh Hòa và Ninh Thuận", "Khánh Hòa và Phú Yên", "Khánh Hòa và Bình Thuận", "Khánh Hòa và Lâm Đồng"],
    answer: 0,
    explanation: "Tỉnh Khánh Hòa mới được hình thành sau khi sáp nhập toàn bộ diện tích tỉnh Ninh Thuận và tỉnh Khánh Hòa."
  },
  {
    id: 74,
    question: "Quần đảo Trường Sa thiêng liêng của Tổ quốc trực thuộc đơn vị hành chính cấp tỉnh nào?",
    options: ["Tỉnh Khánh Hòa", "Thành phố Đà Nẵng", "Tỉnh Bình Thuận", "Thành phố Hồ Chí Minh"],
    answer: 0,
    explanation: "Huyện đảo Trường Sa trực thuộc tỉnh Khánh Hòa."
  },
  {
    id: 75,
    question: "Tháp Chàm Po Klong Garai và vùng nho Ninh Thuận nay thuộc tỉnh nào sau sắp xếp?",
    options: ["Tỉnh Khánh Hòa", "Tỉnh Lâm Đồng", "Tỉnh Bình Thuận", "Tỉnh Đắk Lắk"],
    answer: 0,
    explanation: "Ninh Thuận sáp nhập vào Khánh Hòa, do đó tháp Po Klong Garai nay thuộc tỉnh Khánh Hòa mới."
  },
  {
    id: 76,
    question: "Tỉnh Lâm Đồng mới được hình thành từ việc sáp nhập 3 địa phương nào?",
    options: ["Lâm Đồng, Bình Thuận và Đắk Nông", "Lâm Đồng, Đắk Lắk và Khánh Hòa", "Lâm Đồng, Đồng Nai và Bình Phước", "Lâm Đồng, Ninh Thuận và Tây Ninh"],
    answer: 0,
    explanation: "Tỉnh Lâm Đồng mới được hợp nhất từ 3 tỉnh: Lâm Đồng, Bình Thuận và Đắk Nông."
  },
  {
    id: 77,
    question: "Tỉnh nào có diện tích tự nhiên rộng nhất cả nước sau khi sáp nhập?",
    options: ["Tỉnh Lâm Đồng (khoảng 24.398 km²)", "Tỉnh Gia Lai", "Tỉnh Nghệ An", "Tỉnh Đắk Lắk"],
    answer: 0,
    explanation: "Tỉnh Lâm Đồng sau khi hợp nhất với Bình Thuận và Đắk Nông có diện tích xấp xỉ 24.398 km², lớn nhất cả nước."
  },
  {
    id: 78,
    question: "Thành phố ngàn hoa Đà Lạt và bờ biển Mũi Né Phan Thiết nay cùng thuộc tỉnh nào?",
    options: ["Tỉnh Lâm Đồng", "Tỉnh Khánh Hòa", "Tỉnh Đồng Nai", "Tỉnh Đắk Lắk"],
    answer: 0,
    explanation: "Sau sáp nhập, Đà Lạt (Lâm Đồng cũ) và Mũi Né (Bình Thuận cũ) cùng thuộc tỉnh Lâm Đồng mới."
  },
  {
    id: 79,
    question: "Hệ thống hang động núi lửa Krông Nô dài nhất Đông Nam Á nay thuộc tỉnh nào?",
    options: ["Tỉnh Lâm Đồng", "Tỉnh Đắk Lắk", "Tỉnh Gia Lai", "Tỉnh Kon Tum"],
    answer: 0,
    explanation: "Công viên địa chất Đắk Nông với hệ thống hang động núi lửa Krông Nô nay thuộc tỉnh Lâm Đồng mới."
  },
  {
    id: 80,
    question: "Tỉnh Đồng Nai mới được hình thành từ việc sáp nhập 2 tỉnh nào?",
    options: ["Đồng Nai và Bình Phước", "Đồng Nai và Bình Dương", "Đồng Nai và Bà Rịa - Vũng Tàu", "Đồng Nai và Tây Ninh"],
    answer: 0,
    explanation: "Tỉnh Đồng Nai mới được hợp nhất từ tỉnh Bình Phước và tỉnh Đồng Nai."
  },
  {
    id: 81,
    question: "Đại công trình Sân bay quốc tế Long Thành nằm trên địa bàn tỉnh nào?",
    options: ["Tỉnh Đồng Nai", "Thành phố Hồ Chí Minh", "Tỉnh Bình Dương", "Tỉnh Bà Rịa - Vũng Tàu"],
    answer: 0,
    explanation: "Cảng hàng không quốc tế Long Thành nằm tại huyện Long Thành, tỉnh Đồng Nai."
  },
  {
    id: 82,
    question: "Vùng thủ phủ trồng cây điều lớn nhất Việt Nam (Bình Phước cũ) nay thuộc tỉnh nào?",
    options: ["Tỉnh Đồng Nai", "Tỉnh Tây Ninh", "Thành phố Hồ Chí Minh", "Tỉnh Đắk Lắk"],
    answer: 0,
    explanation: "Bình Phước hợp nhất vào Đồng Nai, đưa thủ phủ cây điều về tỉnh Đồng Nai mới."
  },
  {
    id: 83,
    question: "Tỉnh Tây Ninh mới được hình thành từ việc hợp nhất 2 tỉnh nào?",
    options: ["Tây Ninh và Long An", "Tây Ninh và Bình Dương", "Tây Ninh và Tiền Giang", "Tây Ninh và Đồng Tháp"],
    answer: 0,
    explanation: "Tỉnh Tây Ninh mới được hình thành sau khi sáp nhập toàn bộ tỉnh Long An và tỉnh Tây Ninh."
  },
  {
    id: 84,
    question: "Đỉnh Núi Bà Đen - 'Nóc nhà Nam Bộ' cao 986m - thuộc tỉnh nào?",
    options: ["Tỉnh Tây Ninh", "Tỉnh Đồng Nai", "Tỉnh An Giang", "Tỉnh Bình Phước"],
    answer: 0,
    explanation: "Núi Bà Đen linh thiêng là biểu tượng du lịch nổi tiếng của tỉnh Tây Ninh."
  },
  {
    id: 85,
    question: "Vùng đất đôi dòng sông Vàm Cỏ Đông và Vàm Cỏ Tây anh hùng nay thuộc tỉnh nào?",
    options: ["Tỉnh Tây Ninh", "Tỉnh Tiền Giang", "Tỉnh Đồng Tháp", "Thành phố Hồ Chí Minh"],
    answer: 0,
    explanation: "Tỉnh Long An sáp nhập vào Tây Ninh, đưa vùng đất đôi dòng sông Vàm Cỏ về tỉnh Tây Ninh mới."
  },

  // --- MIỀN TÂY NAM BỘ & ĐỒNG BẰNG SÔNG CỬU LONG (CÂU 86 - 105) ---
  {
    id: 86,
    question: "Tỉnh Vĩnh Long mới được hình thành từ việc hợp nhất 3 tỉnh nào?",
    options: ["Vĩnh Long, Bến Tre và Trà Vinh", "Vĩnh Long, Tiền Giang và Đồng Tháp", "Vĩnh Long, Cần Thơ và Hậu Giang", "Vĩnh Long, Sóc Trăng và Bạc Liêu"],
    answer: 0,
    explanation: "Tỉnh Vĩnh Long mới được sáp nhập từ 3 tỉnh cù lao châu thổ: Vĩnh Long, Bến Tre và Trà Vinh."
  },
  {
    id: 87,
    question: "Xứ sở dừa Bến Tre trù phú nay thuộc đơn vị hành chính cấp tỉnh nào?",
    options: ["Tỉnh Vĩnh Long", "Tỉnh Tiền Giang", "Tỉnh Đồng Tháp", "Thành phố Cần Thơ"],
    answer: 0,
    explanation: "Bến Tre hợp nhất vào Vĩnh Long, nên 'Xứ dừa' nay thuộc tỉnh Vĩnh Long mới."
  },
  {
    id: 88,
    question: "Văn hóa chùa tháp cổ kính của đồng bào Khmer Trà Vinh nay thuộc tỉnh nào?",
    options: ["Tỉnh Vĩnh Long", "Tỉnh Sóc Trăng", "Tỉnh An Giang", "Thành phố Cần Thơ"],
    answer: 0,
    explanation: "Trà Vinh sáp nhập vào Vĩnh Long, đưa kho tàng di sản chùa Khmer về tỉnh Vĩnh Long mới."
  },
  {
    id: 89,
    question: "Tỉnh Đồng Tháp mới được hình thành từ việc sáp nhập 2 địa phương nào?",
    options: ["Đồng Tháp và Tiền Giang", "Đồng Tháp và Long An", "Đồng Tháp và An Giang", "Đồng Tháp và Vĩnh Long"],
    answer: 0,
    explanation: "Tỉnh Đồng Tháp mới được hợp nhất từ tỉnh Tiền Giang và tỉnh Đồng Tháp."
  },
  {
    id: 90,
    question: "Làng hoa kiểng trăm năm Sa Đéc và vùng sen Tháp Mười thuộc tỉnh nào?",
    options: ["Tỉnh Đồng Tháp", "Tỉnh Vĩnh Long", "Tỉnh An Giang", "Thành phố Cần Thơ"],
    answer: 0,
    explanation: "Làng hoa Sa Đéc và xứ sở hoa sen Tháp Mười là nét đặc trưng nổi bật của tỉnh Đồng Tháp."
  },
  {
    id: 91,
    question: "Chợ nổi Cái Bè và miệt vườn trái cây cù lao Thới Sơn nay thuộc tỉnh nào?",
    options: ["Tỉnh Đồng Tháp", "Tỉnh Bến Tre", "Tỉnh Vĩnh Long", "Thành phố Cần Thơ"],
    answer: 0,
    explanation: "Tiền Giang sáp nhập vào Đồng Tháp, nên Cái Bè và cù lao Thới Sơn nay thuộc tỉnh Đồng Tháp mới."
  },
  {
    id: 92,
    question: "Tỉnh An Giang mới được hình thành từ việc sáp nhập 2 tỉnh nào?",
    options: ["An Giang và Kiên Giang", "An Giang và Đồng Tháp", "An Giang và Cần Thơ", "An Giang và Hậu Giang"],
    answer: 0,
    explanation: "Tỉnh An Giang mới được hợp nhất từ toàn bộ tỉnh Kiên Giang và tỉnh An Giang."
  },
  {
    id: 93,
    question: "Đảo ngọc Phú Quốc - thành phố đảo đầu tiên của Việt Nam - nay thuộc tỉnh nào?",
    options: ["Tỉnh An Giang", "Tỉnh Cà Mau", "Thành phố Cần Thơ", "Tỉnh Kiên Giang (cũ)"],
    answer: 0,
    explanation: "Sau khi Kiên Giang sáp nhập vào An Giang, Thành phố đảo Phú Quốc thuộc tỉnh An Giang mới."
  },
  {
    id: 94,
    question: "Lễ hội Vía Bà Chúa Xứ Núi Sam và rừng tràm Trà Sư thuộc tỉnh nào?",
    options: ["Tỉnh An Giang", "Tỉnh Đồng Tháp", "Tỉnh Kiên Giang", "Tỉnh Tây Ninh"],
    answer: 0,
    explanation: "Miếu Bà Chúa Xứ núi Sam (Châu Đốc) và Rừng tràm Trà Sư tọa lạc tại tỉnh An Giang."
  },
  {
    id: 95,
    question: "Tỉnh Cà Mau mới được hình thành từ việc hợp nhất 2 tỉnh nào?",
    options: ["Cà Mau và Bạc Liêu", "Cà Mau và Kiên Giang", "Cà Mau và Sóc Trăng", "Cà Mau và Hậu Giang"],
    answer: 0,
    explanation: "Tỉnh Cà Mau mới được sáp nhập từ 2 tỉnh: Cà Mau và Bạc Liêu."
  },
  {
    id: 96,
    question: "Điểm cực Nam của Tổ quốc (Mốc tọa độ quốc gia GPS 0001 tại Đất Mũi) thuộc tỉnh nào?",
    options: ["Tỉnh Cà Mau", "Tỉnh Kiên Giang", "Tỉnh An Giang", "Tỉnh Bạc Liêu"],
    answer: 0,
    explanation: "Khu du lịch Mũi Cà Mau với mốc tọa độ GPS 0001 thuộc huyện Ngọc Hiển, tỉnh Cà Mau."
  },
  {
    id: 97,
    question: "Giai thoại 'Công tử Bạc Liêu' và bản 'Dạ cổ hoài lang' bất hủ nay gắn liền với tỉnh nào?",
    options: ["Tỉnh Cà Mau", "Tỉnh Sóc Trăng", "Thành phố Cần Thơ", "Tỉnh Vĩnh Long"],
    answer: 0,
    explanation: "Bạc Liêu sáp nhập vào Cà Mau, do đó di sản Dạ cổ hoài lang của cố nhạc sĩ Cao Văn Lầu thuộc tỉnh Cà Mau mới."
  },
  {
    id: 98,
    question: "Cánh đồng điện gió ven biển Bạc Liêu nổi tiếng nay thuộc địa bàn tỉnh nào?",
    options: ["Tỉnh Cà Mau", "Tỉnh Sóc Trăng", "Tỉnh Trà Vinh", "Tỉnh Bến Tre"],
    answer: 0,
    explanation: "Cánh đồng điện gió Bạc Liêu ven biển nay thuộc địa bàn tỉnh Cà Mau mới."
  },
  {
    id: 99,
    question: "Tỉnh nào ở Đồng bằng sông Cửu Long vừa có đường bờ biển phía Đông (Biển Đông) vừa có bờ biển phía Tây (Vịnh Thái Lan)?",
    options: ["Tỉnh Cà Mau", "Tỉnh Vĩnh Long", "Tỉnh Đồng Tháp", "Thành phố Cần Thơ"],
    answer: 0,
    explanation: "Bán đảo Cà Mau là địa phương duy nhất của cả nước tiếp giáp cả Biển Đông và Vịnh Thái Lan ở 3 mặt."
  },
  {
    id: 100,
    question: "Chợ nổi Cái Răng nổi tiếng vùng sông nước Nam Bộ thuộc thành phố nào?",
    options: ["Thành phố Cần Thơ", "Tỉnh Đồng Tháp", "Tỉnh Vĩnh Long", "Tỉnh An Giang"],
    answer: 0,
    explanation: "Chợ nổi Cái Răng là nét văn hóa sông nước đặc sắc của Thành phố Cần Thơ."
  },

  // --- KỶ LỤC & TỔNG HỢP NÂNG CAO (CÂU 101 - 125) ---
  {
    id: 101,
    question: "Tỉnh nào sau sáp nhập có đường biên giới tiếp giáp với cả 2 quốc gia: Lào và Campuchia?",
    options: ["Tỉnh Quảng Ngãi (hợp nhất từ Kon Tum và Quảng Ngãi)", "Tỉnh Gia Lai", "Tỉnh Đắk Lắk", "Tỉnh Lâm Đồng"],
    answer: 0,
    explanation: "Tỉnh Kon Tum cũ (nay thuộc Quảng Ngãi mới) có ngã ba Đông Dương Bờ Y giáp cả Lào và Campuchia."
  },
  {
    id: 102,
    question: "Tỉnh nào sau đây có diện tích tự nhiên nhỏ nhất trong số 34 đơn vị hành chính cấp tỉnh?",
    options: ["Tỉnh Hưng Yên (khoảng 2.514,81 km²)", "Tỉnh Bắc Ninh (khoảng 4.718 km²)", "Tỉnh Ninh Bình", "Thành phố Huế"],
    answer: 0,
    explanation: "Tỉnh Hưng Yên mới (Hưng Yên + Thái Bình) có diện tích khoảng 2.514,81 km², nhỏ nhất trong 28 tỉnh."
  },
  {
    id: 103,
    question: "Đơn vị hành chính cấp tỉnh nào tiếp giáp với nhiều tỉnh, thành phố nhất tại vùng Nam Bộ?",
    options: ["Thành phố Hồ Chí Minh mới", "Tỉnh Đồng Nai", "Tỉnh Tây Ninh", "Tỉnh Đồng Tháp"],
    answer: 0,
    explanation: "TP. Hồ Chí Minh mới (gồm TP.HCM, Bình Dương, Bà Rịa - Vũng Tàu) tiếp giáp Đồng Nai, Tây Ninh, Tiền Giang (Đồng Tháp), Bình Thuận (Lâm Đồng) và biển Đông."
  },
  {
    id: 104,
    question: "Quần thể di sản thế giới nào sau đây vừa là di sản văn hóa, vừa là di sản thiên nhiên (di sản hỗn hợp)?",
    options: ["Quần thể danh thắng Tràng An (Ninh Bình)", "Vịnh Hạ Long (Quảng Ninh)", "Phong Nha - Kẻ Bàng (Quảng Trị)", "Thành nhà Hồ (Thanh Hóa)"],
    answer: 0,
    explanation: "Tràng An (tỉnh Ninh Bình) là Di sản thế giới hỗn hợp đầu tiên và duy nhất tại Đông Nam Á."
  },
  {
    id: 105,
    question: "Địa phương nào sau sáp nhập tập trung nhiều tổ hợp công nghiệp bán dẫn và điện tử công nghệ cao nhất miền Bắc?",
    options: ["Tỉnh Bắc Ninh và Tỉnh Thái Nguyên", "Tỉnh Tuyên Quang và Cao Bằng", "Tỉnh Sơn La và Lai Châu", "Tỉnh Hà Tĩnh và Nghệ An"],
    answer: 0,
    explanation: "Bắc Ninh và Thái Nguyên là hai 'thủ phủ' công nghệ cao, thu hút các tập đoàn bán dẫn và điện tử hàng đầu thế giới."
  },
  {
    id: 106,
    question: "Tỉnh Quảng Trị mới sở hữu hệ thống di tích chiến tranh lịch sử tiêu biểu nào?",
    options: ["Thành cổ Quảng Trị, Nghĩa trang Trường Sơn, Đường 9 - Khe Sanh", "Đền Hùng", "Pác Bó", "Côn Đảo"],
    answer: 0,
    explanation: "Quảng Trị là vùng đất lửa với Thành cổ Quảng Trị, Nghĩa trang Quốc gia Trường Sơn và cụm di tích Đường 9."
  },
  {
    id: 107,
    question: "Thủ đô Hà Nội sau sắp xếp tiếp giáp với những tỉnh nào?",
    options: ["Phú Thọ, Thái Nguyên, Bắc Ninh, Hưng Yên, Ninh Bình", "Nghệ An, Hà Tĩnh, Thanh Hóa", "Quảng Ninh, Hải Phòng, Lạng Sơn", "Cao Bằng, Tuyên Quang, Lào Cai"],
    answer: 0,
    explanation: "Hà Nội tiếp giáp Phú Thọ (phía Tây), Thái Nguyên, Bắc Ninh (phía Bắc/Đông Bắc), Hưng Yên (phía Đông), Ninh Bình (phía Nam)."
  },
  {
    id: 108,
    question: "Vịnh biển nào của Việt Nam được xếp vào hàng các vịnh biển đẹp nhất thế giới và là căn cứ hải quân chiến lược?",
    options: ["Vịnh Cam Ranh (Tỉnh Khánh Hòa)", "Vịnh Bái Tử Long", "Vịnh Dung Quất", "Vịnh Chân Mây"],
    answer: 0,
    explanation: "Vịnh Cam Ranh nước sâu thuộc tỉnh Khánh Hòa là vịnh biển tự nhiên kín gió hàng đầu thế giới."
  },
  {
    id: 109,
    question: "Thác nước tự nhiên lớn thứ 4 thế giới nằm trên đường biên giới quốc gia thuộc tỉnh nào của Việt Nam?",
    options: ["Thác Bản Giốc (Tỉnh Cao Bằng)", "Thác Dambri", "Thác Dray Nur", "Thác Bạc"],
    answer: 0,
    explanation: "Thác Bản Giốc nằm trên đường biên giới Việt Nam - Trung Quốc thuộc tỉnh Cao Bằng."
  },
  {
    id: 110,
    question: "Hồ nước nhân tạo lớn nhất miền Bắc hình thành từ công trình thủy điện sông Chảy thuộc tỉnh nào?",
    options: ["Hồ Thác Bà (Tỉnh Lào Cai mới)", "Hồ Ba Bể", "Hồ Núi Cốc", "Hồ Hòa Bình"],
    answer: 0,
    explanation: "Hồ Thác Bà (thuộc Yên Bái cũ) sau sáp nhập nằm trên địa phận tỉnh Lào Cai mới."
  },
  {
    id: 111,
    question: "Đèo Hải Vân - 'Thiên hạ đệ nhất hùng quan' - là ranh giới tự nhiên giữa 2 đơn vị hành chính cấp tỉnh nào?",
    options: ["Thành phố Huế và Thành phố Đà Nẵng", "Tỉnh Quảng Trị và Thành phố Huế", "Thành phố Đà Nẵng và Tỉnh Quảng Ngãi", "Tỉnh Quảng Bình và Tỉnh Quảng Trị"],
    answer: 0,
    explanation: "Đèo Hải Vân hiểm trở nối liền Thành phố Huế và Thành phố Đà Nẵng mới."
  },
  {
    id: 112,
    question: "Cột cờ trên đỉnh Mã Pí Lèng ngắm nhìn dòng sông Nho Quế xanh ngắt thuộc địa phận tỉnh nào sau sắp xếp?",
    options: ["Tỉnh Tuyên Quang", "Tỉnh Cao Bằng", "Tỉnh Lào Cai", "Tỉnh Lạng Sơn"],
    answer: 0,
    explanation: "Đèo Mã Pí Lèng và sông Nho Quế (Mèo Vạc, Hà Giang cũ) nay thuộc tỉnh Tuyên Quang mới."
  },
  {
    id: 113,
    question: "Đơn vị hành chính cấp tỉnh nào ở miền Trung có cảng hàng không quốc tế Chu Lai?",
    options: ["Thành phố Đà Nẵng", "Tỉnh Quảng Ngãi", "Thành phố Huế", "Tỉnh Bình Định"],
    answer: 0,
    explanation: "Sân bay Chu Lai (thuộc Núi Thành, Quảng Nam cũ) nay thuộc địa giới của Thành phố Đà Nẵng mới."
  },
  {
    id: 114,
    question: "Nhà máy lọc dầu đầu tiên của Việt Nam (Lọc dầu Dung Quất) thuộc tỉnh nào?",
    options: ["Tỉnh Quảng Ngãi", "Tỉnh Thanh Hóa", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Bình Định"],
    answer: 0,
    explanation: "Khu kinh tế Dung Quất và Nhà máy Lọc dầu Dung Quất tọa lạc tại tỉnh Quảng Ngãi."
  },
  {
    id: 115,
    question: "Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO công nhận là kiệt tác di sản thế giới phân bố trên những tỉnh mới nào?",
    options: ["Quảng Ngãi, Gia Lai, Đắk Lắk, Lâm Đồng", "Thanh Hóa, Nghệ An, Hà Tĩnh", "Tây Ninh, Đồng Nai, TP.HCM", "Vĩnh Long, Cần Thơ, An Giang"],
    answer: 0,
    explanation: "Không gian Cồng chiêng Tây Nguyên trải rộng trên địa bàn các tỉnh Tây Nguyên cũ, nay thuộc Quảng Ngãi, Gia Lai, Đắk Lắk, Lâm Đồng."
  },
  {
    id: 116,
    question: "Hồ Lắk - hồ nước ngọt tự nhiên lớn thứ hai Việt Nam - thuộc tỉnh nào?",
    options: ["Tỉnh Đắk Lắk", "Tỉnh Gia Lai", "Tỉnh Lâm Đồng", "Tỉnh Kon Tum"],
    answer: 0,
    explanation: "Hồ Lắk thơ mộng với văn hóa người M'Nông tọa lạc tại tỉnh Đắk Lắk."
  },
  {
    id: 117,
    question: "Biển Hồ T'Nưng ('Đôi mắt Pleiku') là miệng núi lửa cổ đại ngập nước thuộc tỉnh nào?",
    options: ["Tỉnh Gia Lai", "Tỉnh Đắk Lắk", "Tỉnh Kon Tum", "Tỉnh Lâm Đồng"],
    answer: 0,
    explanation: "Biển Hồ T'Nưng là danh thắng nổi tiếng cách trung tâm TP. Pleiku (tỉnh Gia Lai) khoảng 7km."
  },
  {
    id: 118,
    question: "Vườn quốc gia Cát Tiên - Khu Dự trữ Sinh quyển Thế giới - trải rộng trên ranh giới các tỉnh nào?",
    options: ["Tỉnh Đồng Nai, Tỉnh Lâm Đồng", "Tỉnh Tây Ninh, Tỉnh Long An", "Tỉnh An Giang, Tỉnh Kiên Giang", "Tỉnh Gia Lai, Tỉnh Đắk Lắk"],
    answer: 0,
    explanation: "Vườn quốc gia Nam Cát Tiên nằm trên ranh giới các tỉnh Đồng Nai và Lâm Đồng mới."
  },
  {
    id: 119,
    question: "Đồi cát bay Mũi Né với màu cát thay đổi theo từng giờ trong ngày thuộc tỉnh nào?",
    options: ["Tỉnh Lâm Đồng", "Tỉnh Khánh Hòa", "Tỉnh Ninh Thuận", "Tỉnh Bà Rịa - Vũng Tàu"],
    answer: 0,
    explanation: "Mũi Né (Phan Thiết, Bình Thuận cũ) sau khi sáp nhập thuộc về tỉnh Lâm Đồng mới."
  },
  {
    id: 120,
    question: "Vùng đất được mệnh danh là 'Vương quốc gốm đỏ' Vĩnh Long nằm dọc bên con sông nào?",
    options: ["Sông Cổ Chiên (nhánh sông Tiền)", "Sông Sài Gòn", "Sông Hồng", "Sông Đáy"],
    answer: 0,
    explanation: "Làng gốm đỏ truyền thống Mang Thít nằm ven sông Cổ Chiên thuộc tỉnh Vĩnh Long."
  },
  {
    id: 121,
    question: "Công viên địa chất toàn cầu UNESCO Cao nguyên đá Đồng Văn nay thuộc địa phận tỉnh nào?",
    options: ["Tỉnh Tuyên Quang", "Tỉnh Cao Bằng", "Tỉnh Lào Cai", "Tỉnh Lạng Sơn"],
    answer: 0,
    explanation: "Đồng Văn (thuộc Hà Giang cũ) sau khi sáp nhập Hà Giang và Tuyên Quang nay thuộc tỉnh Tuyên Quang mới."
  },
  {
    id: 122,
    question: "Quần thể danh thắng Tràng An - Di sản văn hóa và thiên nhiên thế giới kép đầu tiên của Đông Nam Á - thuộc tỉnh nào?",
    options: ["Tỉnh Ninh Bình", "Tỉnh Thanh Hóa", "Tỉnh Bắc Ninh", "Tỉnh Quảng Ninh"],
    answer: 0,
    explanation: "Tràng An nằm tại vùng đất cố đô thuộc tỉnh Ninh Bình mới (hợp nhất Hà Nam, Nam Định và Ninh Bình)."
  },
  {
    id: 123,
    question: "Cố đô Hoa Lư - kinh đô đầu tiên của nhà nước phong kiến tập quyền Việt Nam thế kỷ X - nay thuộc tỉnh nào?",
    options: ["Tỉnh Ninh Bình", "Tỉnh Phú Thọ", "Tỉnh Bắc Ninh", "Thành phố Hà Nội"],
    answer: 0,
    explanation: "Cố đô Hoa Lư gắn với hai triều đại Đinh - Tiền Lê nằm tại huyện Hoa Lư, tỉnh Ninh Bình."
  },
  {
    id: 124,
    question: "Khu du lịch tâm linh Chùa Tam Chúc với quần thể hồ nước và núi đá vôi hùng vĩ nay thuộc tỉnh nào?",
    options: ["Tỉnh Ninh Bình", "Tỉnh Hưng Yên", "Tỉnh Bắc Ninh", "Tỉnh Thái Nguyên"],
    answer: 0,
    explanation: "Chùa Tam Chúc (Kim Bảng, Hà Nam cũ) sau sắp xếp thuộc địa bàn tỉnh Ninh Bình mới."
  },
  {
    id: 125,
    question: "Chùa Dâu - trung tâm Phật giáo cổ xưa nhất và khởi nguồn dòng thiền tại Việt Nam - thuộc tỉnh nào?",
    options: ["Tỉnh Bắc Ninh", "Tỉnh Ninh Bình", "Tỉnh Phú Thọ", "Tỉnh Hưng Yên"],
    answer: 0,
    explanation: "Chùa Dâu tọa lạc tại thị xã Thuận Thành, thuộc tỉnh Bắc Ninh mới."
  },
  {
    id: 126,
    question: "Dân ca Quan họ - Di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO vinh danh - có cái nôi tại tỉnh nào?",
    options: ["Tỉnh Bắc Ninh", "Tỉnh Ninh Bình", "Tỉnh Thái Nguyên", "Tỉnh Phú Thọ"],
    answer: 0,
    explanation: "Không gian sinh hoạt văn hóa Quan họ phát triển mạnh mẽ trên toàn bộ đôi bờ sông Cầu thuộc tỉnh Bắc Ninh mới."
  },
  {
    id: 127,
    question: "Khu di tích lịch sử Quốc gia đặc biệt Đền Hùng ('Giỗ Tổ Hùng Vương mùng 10 tháng 3') thuộc tỉnh nào?",
    options: ["Tỉnh Phú Thọ", "Tỉnh Tuyên Quang", "Tỉnh Vĩnh Phúc", "Tỉnh Thái Nguyên"],
    answer: 0,
    explanation: "Đền Hùng tọa lạc trên núi Nghĩa Lĩnh, TP. Việt Trì, tỉnh Phú Thọ mới (hợp nhất Phú Thọ và Vĩnh Phúc)."
  },
  {
    id: 128,
    question: "Hồ Ba Bể - một trong 20 hồ nước ngọt tự nhiên trên núi đặc biệt nhất thế giới - nay thuộc tỉnh nào?",
    options: ["Tỉnh Thái Nguyên", "Tỉnh Tuyên Quang", "Tỉnh Cao Bằng", "Tỉnh Lào Cai"],
    answer: 0,
    explanation: "Hồ Ba Bể (Bắc Kạn cũ) sau khi hợp nhất Bắc Kạn và Thái Nguyên nay thuộc tỉnh Thái Nguyên mới."
  },
  {
    id: 129,
    question: "Khu di tích Quốc gia đặc biệt ATK Định Hóa ('Thủ đô kháng chiến' của Trung ương Đảng và Bác Hồ) thuộc tỉnh nào?",
    options: ["Tỉnh Thái Nguyên", "Tỉnh Tuyên Quang", "Tỉnh Phú Thọ", "Tỉnh Cao Bằng"],
    answer: 0,
    explanation: "An toàn khu (ATK) Định Hóa nằm ở phía tây bắc tỉnh Thái Nguyên."
  },
  {
    id: 130,
    question: "Thác Bản Giốc - một trong 4 thác nước xuyên quốc gia lớn nhất trên thế giới - thuộc tỉnh nào?",
    options: ["Tỉnh Cao Bằng", "Tỉnh Lạng Sơn", "Tỉnh Hà Giang", "Tỉnh Tuyên Quang"],
    answer: 0,
    explanation: "Thác Bản Giốc hùng vĩ nằm trên dòng sông Quây Sơn, thuộc huyện Trùng Khánh, tỉnh Cao Bằng (tỉnh giữ nguyên trạng)."
  },
  {
    id: 131,
    question: "Đèo Ô Quy Hồ - con đèo dài nhất và hiểm trở bậc nhất trong 'Tứ đại đỉnh đèo' miền Bắc - nối liền hai tỉnh nào?",
    options: ["Tỉnh Lào Cai và Tỉnh Lai Châu", "Tỉnh Sơn La và Tỉnh Điện Biên", "Tỉnh Lào Cai và Tỉnh Yên Bái", "Tỉnh Hà Giang và Tỉnh Cao Bằng"],
    answer: 0,
    explanation: "Đèo Ô Quy Hồ (đèo Hoàng Liên Sơn) dài gần 50 km cắt ngang dãy Hoàng Liên Sơn, nối liền tỉnh Lào Cai mới và tỉnh Lai Châu."
  },
  {
    id: 132,
    question: "Đỉnh Fansipan ('Nóc nhà Đông Dương' cao 3.143 m) thuộc thị xã Sa Pa, tỉnh nào?",
    options: ["Tỉnh Lào Cai", "Tỉnh Lai Châu", "Tỉnh Điện Biên", "Tỉnh Sơn La"],
    answer: 0,
    explanation: "Đỉnh Fansipan nằm trong Vườn quốc gia Hoàng Liên, thuộc thị xã Sa Pa, tỉnh Lào Cai mới."
  },
  {
    id: 133,
    question: "Hồ Thác Bà - công trình hồ nhân tạo lớn đầu tiên với hàng ngàn đảo ngọc - nay thuộc tỉnh nào?",
    options: ["Tỉnh Lào Cai", "Tỉnh Phú Thọ", "Tỉnh Tuyên Quang", "Tỉnh Hòa Bình"],
    answer: 0,
    explanation: "Hồ Thác Bà (thuộc Yên Bái cũ) sau sắp xếp nay thuộc địa bàn tỉnh Lào Cai mới."
  },
  {
    id: 134,
    question: "Cột mốc số 0 A Pa Chải - điểm cực Tây của Tổ quốc (nơi 'một tiếng gà gáy ba nước cùng nghe') thuộc tỉnh nào?",
    options: ["Tỉnh Điện Biên", "Tỉnh Lai Châu", "Tỉnh Sơn La", "Tỉnh Lào Cai"],
    answer: 0,
    explanation: "A Pa Chải nằm tại xã Sín Thầu, huyện Mường Nhé, tỉnh Điện Biên (tỉnh giữ nguyên trạng)."
  },
  {
    id: 135,
    question: "Nhà máy thủy điện Sơn La - công trình thủy điện có công suất lớn nhất Đông Nam Á (2.400 MW) - nằm trên sông Đà thuộc tỉnh nào?",
    options: ["Tỉnh Sơn La", "Tỉnh Hòa Bình", "Tỉnh Lai Châu", "Tỉnh Điện Biên"],
    answer: 0,
    explanation: "Thủy điện Sơn La khánh thành năm 2012 nằm tại huyện Mường La, tỉnh Sơn La (tỉnh giữ nguyên trạng)."
  },
  {
    id: 136,
    question: "Cửa khẩu quốc tế Hữu Nghị - cửa ngõ giao thương đường bộ chiến lược nối Việt Nam với Trung Quốc - thuộc tỉnh nào?",
    options: ["Tỉnh Lạng Sơn", "Tỉnh Quảng Ninh", "Tỉnh Cao Bằng", "Tỉnh Lào Cai"],
    answer: 0,
    explanation: "Cửa khẩu quốc tế Hữu Nghị nằm trên tuyến QL1A thuộc huyện Cao Lộc, tỉnh Lạng Sơn (tỉnh giữ nguyên trạng)."
  },
  {
    id: 137,
    question: "Vịnh Bái Tử Long với hàng trăm đảo đá vôi kỳ vĩ nằm tiếp giáp vịnh Hạ Long thuộc tỉnh nào?",
    options: ["Tỉnh Quảng Ninh", "Thành phố Hải Phòng", "Tỉnh Thái Bình", "Tỉnh Nam Định"],
    answer: 0,
    explanation: "Vịnh Bái Tử Long cùng Vườn quốc gia Bái Tử Long nằm tại tỉnh Quảng Ninh (tỉnh giữ nguyên trạng)."
  },
  {
    id: 138,
    question: "Quần đảo Cát Bà (được UNESCO công nhận là Di sản thiên nhiên thế giới liên tỉnh năm 2023) thuộc đơn vị nào?",
    options: ["Thành phố Hải Phòng", "Tỉnh Quảng Ninh", "Tỉnh Hải Dương", "Tỉnh Thái Bình"],
    answer: 0,
    explanation: "Quần đảo Cát Bà thuộc huyện Cát Hải, TP. Hải Phòng mới (hợp nhất Hải Phòng và Hải Dương)."
  },
  {
    id: 139,
    question: "Thành nhà Hồ - Di sản văn hóa thế giới bằng đá độc nhất vô nhị ở Đông Nam Á - thuộc tỉnh nào?",
    options: ["Tỉnh Thanh Hóa", "Tỉnh Ninh Bình", "Tỉnh Nghệ An", "Tỉnh Hà Tĩnh"],
    answer: 0,
    explanation: "Thành nhà Hồ (kinh đô nhà Hồ xây năm 1397) tọa lạc tại huyện Vĩnh Lộc, tỉnh Thanh Hóa (tỉnh giữ nguyên trạng)."
  },
  {
    id: 140,
    question: "Khu di tích lịch sử Kim Liên - nơi lưu giữ ký ức tuổi thơ của Chủ tịch Hồ Chí Minh - thuộc tỉnh nào?",
    options: ["Tỉnh Nghệ An", "Tỉnh Hà Tĩnh", "Tỉnh Thanh Hóa", "Tỉnh Quảng Bình"],
    answer: 0,
    explanation: "Khu di tích Kim Liên thuộc huyện Nam Đàn, tỉnh Nghệ An (tỉnh giữ nguyên trạng có diện tích lớn nhất cả nước)."
  },
  {
    id: 141,
    question: "Khu di tích lịch sử Ngã ba Đồng Lộc - biểu tượng bất tử của 10 nữ liệt sĩ TNXP - thuộc tỉnh nào?",
    options: ["Tỉnh Hà Tĩnh", "Tỉnh Quảng Trị", "Tỉnh Nghệ An", "Tỉnh Quảng Bình"],
    answer: 0,
    explanation: "Ngã ba Đồng Lộc nằm tại huyện Can Lộc, tỉnh Hà Tĩnh (tỉnh giữ nguyên trạng)."
  },
  {
    id: 142,
    question: "Vườn quốc gia Phong Nha - Kẻ Bàng với Sơn Đoòng (hang động tự nhiên lớn nhất thế giới) nay thuộc tỉnh nào?",
    options: ["Tỉnh Quảng Trị", "Thành phố Huế", "Tỉnh Nghệ An", "Tỉnh Hà Tĩnh"],
    answer: 0,
    explanation: "Phong Nha - Kẻ Bàng (thuộc Quảng Bình cũ) sau khi hợp nhất với Quảng Trị nay thuộc tỉnh Quảng Trị mới."
  },
  {
    id: 143,
    question: "Di tích lịch sử Quốc gia đặc biệt Thành cổ Quảng Trị gắn liền với cuộc chiến đấu 81 ngày đêm năm 1972 thuộc tỉnh nào?",
    options: ["Tỉnh Quảng Trị", "Thành phố Huế", "Tỉnh Hà Tĩnh", "Thành phố Đà Nẵng"],
    answer: 0,
    explanation: "Thành cổ Quảng Trị tọa lạc tại thị xã Quảng Trị, tỉnh Quảng Trị mới."
  },
  {
    id: 144,
    question: "Quần thể Di tích Cố đô Huế và Nhã nhạc Cung đình Huế thuộc đơn vị hành chính nào?",
    options: ["Thành phố Huế", "Tỉnh Quảng Trị", "Thành phố Đà Nẵng", "Tỉnh Quảng Nam"],
    answer: 0,
    explanation: "Cố đô Huế là di sản văn hóa thế giới đầu tiên của Việt Nam (1993), thuộc Thành phố Huế trực thuộc Trung ương."
  },
  {
    id: 145,
    question: "Đô thị cổ Hội An và Khu đền tháp Mỹ Sơn (hai Di sản thế giới UNESCO) nay thuộc đơn vị hành chính nào?",
    options: ["Thành phố Đà Nẵng", "Thành phố Huế", "Tỉnh Quảng Ngãi", "Tỉnh Bình Định"],
    answer: 0,
    explanation: "Sau khi hợp nhất tỉnh Quảng Nam vào Đà Nẵng theo NQ 202/2025/QH15, cả Hội An và Mỹ Sơn đều thuộc TP. Đà Nẵng mới."
  },
  {
    id: 146,
    question: "Vịnh Cam Ranh - một trong những vịnh nước sâu tự nhiên kín gió tốt nhất thế giới - thuộc tỉnh nào?",
    options: ["Tỉnh Khánh Hòa", "Tỉnh Lâm Đồng", "Thành phố Đà Nẵng", "Tỉnh Phú Yên"],
    answer: 0,
    explanation: "Vịnh Cam Ranh và quân cảng Cam Ranh thuộc TP. Cam Ranh, tỉnh Khánh Hòa mới."
  },
  {
    id: 147,
    question: "Tháp Po Klong Garai - công trình tháp Chăm Pa cổ kính với lễ hội Katê truyền thống - nay thuộc tỉnh nào?",
    options: ["Tỉnh Khánh Hòa", "Tỉnh Lâm Đồng", "Tỉnh Bình Thuận", "Tỉnh Gia Lai"],
    answer: 0,
    explanation: "Tháp Po Klong Garai (Phan Rang, Ninh Thuận cũ) sau khi sáp nhập vào Khánh Hòa nay thuộc tỉnh Khánh Hòa mới."
  },
  {
    id: 148,
    question: "Cảng hàng không quốc tế Long Thành - dự án sân bay trung chuyển hàng không quốc tế lớn nhất Việt Nam - thuộc tỉnh nào?",
    options: ["Tỉnh Đồng Nai", "Thành phố Hồ Chí Minh", "Tỉnh Tây Ninh", "Tỉnh Bình Phước"],
    answer: 0,
    explanation: "Sân bay Long Thành nằm tại huyện Long Thành, tỉnh Đồng Nai mới (hợp nhất Đồng Nai và Bình Phước)."
  },
  {
    id: 149,
    question: "Địa đạo Củ Chi - hệ thống công sự phòng thủ ngầm dài trên 250 km trong lòng đất - thuộc đơn vị nào?",
    options: ["Thành phố Hồ Chí Minh", "Tỉnh Tây Ninh", "Tỉnh Đồng Nai", "Tỉnh Bình Dương"],
    answer: 0,
    explanation: "Địa đạo Củ Chi là di tích lịch sử quốc gia đặc biệt nằm ở huyện Củ Chi, Thành phố Hồ Chí Minh."
  },
  {
    id: 150,
    question: "Quần đảo Côn Đảo với Di tích Nhà tù Côn Đảo và Vườn quốc gia Côn Đảo nay thuộc đơn vị hành chính nào?",
    options: ["Thành phố Hồ Chí Minh", "Tỉnh Cà Mau", "Tỉnh Sóc Trăng", "Tỉnh Tiền Giang"],
    answer: 0,
    explanation: "Sau khi sáp nhập Bà Rịa - Vũng Tàu vào Thành phố Hồ Chí Minh, Côn Đảo chính thức thuộc TP. Hồ Chí Minh mới."
  }
];

if (typeof window !== "undefined") {
  window.QUIZ_DATABASE = QUIZ_DATABASE;
}
