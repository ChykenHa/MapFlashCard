/**
 * Bản đồ số Vector SVG 34 Đơn vị Hành chính Việt Nam
 * Tọa độ và đường bao (Paths) tương ứng theo dáng cong chữ S chuẩn mực
 */

const VIETNAM_MAP_PATHS = [
  // --- MIỀN BẮC (ĐÔNG BẮC & TÂY BẮC) ---
  {
    id: "laichau",
    name: "Lai Châu",
    d: "M 230,75 L 290,60 L 320,85 L 295,115 L 265,110 L 235,95 Z",
    labelX: 270, labelY: 90
  },
  {
    id: "dienbien",
    name: "Điện Biên",
    d: "M 230,75 L 265,110 L 255,160 L 225,180 L 210,135 Z",
    labelX: 235, labelY: 135
  },
  {
    id: "laocai",
    name: "Lào Cai",
    d: "M 290,60 L 350,55 L 375,95 L 340,140 L 295,115 L 320,85 Z",
    labelX: 335, labelY: 100
  },
  {
    id: "tuyenquang",
    name: "Tuyên Quang",
    d: "M 350,55 L 420,40 L 440,75 L 425,120 L 375,95 Z",
    labelX: 395, labelY: 75
  },
  {
    id: "caobang",
    name: "Cao Bằng",
    d: "M 420,40 L 490,45 L 495,85 L 450,95 L 440,75 Z",
    labelX: 460, labelY: 65
  },
  {
    id: "langson",
    name: "Lạng Sơn",
    d: "M 450,95 L 495,85 L 530,115 L 505,150 L 455,135 Z",
    labelX: 490, labelY: 120
  },
  {
    id: "thainguyen",
    name: "Thái Nguyên",
    d: "M 425,120 L 455,135 L 445,165 L 405,155 L 415,130 Z",
    labelX: 430, labelY: 145
  },
  {
    id: "sonla",
    name: "Sơn La",
    d: "M 265,110 L 340,140 L 355,185 L 315,225 L 255,160 Z",
    labelX: 300, labelY: 175
  },
  {
    id: "phutho",
    name: "Phú Thọ",
    d: "M 340,140 L 405,155 L 415,190 L 375,220 L 355,185 Z",
    labelX: 380, labelY: 180
  },

  // --- ĐỒNG BẰNG SÔNG HỒNG & QUẢNG NINH ---
  {
    id: "bacninh",
    name: "Bắc Ninh",
    d: "M 445,165 L 485,155 L 500,180 L 465,195 L 445,175 Z",
    labelX: 470, labelY: 175
  },
  {
    id: "quangninh",
    name: "Quảng Ninh",
    d: "M 485,155 L 565,135 L 585,165 L 525,195 L 500,180 Z",
    labelX: 535, labelY: 165
  },
  {
    id: "hanoi",
    name: "Hà Nội",
    d: "M 415,190 L 450,180 L 455,215 L 420,225 Z",
    labelX: 435, labelY: 205
  },
  {
    id: "haiphong",
    name: "Hải Phòng",
    d: "M 485,190 L 525,195 L 520,225 L 480,220 Z",
    labelX: 500, labelY: 210
  },
  {
    id: "hungyen",
    name: "Hưng Yên",
    d: "M 450,215 L 485,210 L 490,245 L 455,245 Z",
    labelX: 470, labelY: 230
  },
  {
    id: "ninhbinh",
    name: "Ninh Bình",
    d: "M 415,225 L 455,245 L 450,275 L 395,265 L 375,220 Z",
    labelX: 420, labelY: 250
  },

  // --- BẮC TRUNG BỘ ---
  {
    id: "thanhhoa",
    name: "Thanh Hóa",
    d: "M 395,265 L 450,275 L 470,320 L 410,345 L 375,305 Z",
    labelX: 420, labelY: 305
  },
  {
    id: "nghean",
    name: "Nghệ An",
    d: "M 375,305 L 410,345 L 485,355 L 465,410 L 395,405 L 360,350 Z",
    labelX: 425, labelY: 375
  },
  {
    id: "hatinh",
    name: "Hà Tĩnh",
    d: "M 410,405 L 465,410 L 495,445 L 455,470 L 420,440 Z",
    labelX: 455, labelY: 435
  },
  {
    id: "quangtri",
    name: "Quảng Trị",
    d: "M 455,470 L 495,445 L 530,505 L 490,535 L 460,505 Z",
    labelX: 490, labelY: 490
  },
  {
    id: "hue",
    name: "Huế",
    d: "M 490,535 L 530,505 L 550,545 L 520,570 L 490,555 Z",
    labelX: 518, labelY: 540
  },

  // --- DUYÊN HẢI NAM TRUNG BỘ & TÂY NGUYÊN ---
  {
    id: "danang",
    name: "Đà Nẵng",
    d: "M 520,570 L 550,545 L 585,590 L 555,625 L 515,605 Z",
    labelX: 550, labelY: 585
  },
  {
    id: "quangngai",
    name: "Quảng Ngãi",
    d: "M 515,605 L 555,625 L 585,670 L 540,685 L 500,645 Z",
    labelX: 545, labelY: 650
  },
  {
    id: "gialai",
    name: "Gia Lai",
    d: "M 500,645 L 540,685 L 590,715 L 550,755 L 490,715 Z",
    labelX: 535, labelY: 715
  },
  {
    id: "daklak",
    name: "Đắk Lắk",
    d: "M 490,715 L 550,755 L 595,785 L 555,815 L 495,780 Z",
    labelX: 540, labelY: 775
  },
  {
    id: "khanhhoa",
    name: "Khánh Hòa",
    d: "M 555,815 L 595,785 L 610,835 L 575,855 L 545,840 Z",
    labelX: 580, labelY: 825
  },
  {
    id: "lamdong",
    name: "Lâm Đồng",
    d: "M 495,780 L 545,840 L 575,855 L 540,895 L 475,850 L 470,805 Z",
    labelX: 515, labelY: 840
  },

  // --- ĐÔNG NAM BỘ ---
  {
    id: "dongnai",
    name: "Đồng Nai",
    d: "M 470,805 L 515,845 L 495,885 L 450,865 L 440,825 Z",
    labelX: 475, labelY: 845
  },
  {
    id: "tayninh",
    name: "Tây Ninh",
    d: "M 415,810 L 450,825 L 435,875 L 395,860 Z",
    labelX: 420, labelY: 845
  },
  {
    id: "tphcm",
    name: "Hồ Chí Minh",
    d: "M 435,875 L 485,870 L 495,910 L 445,920 L 425,895 Z",
    labelX: 460, labelY: 895
  },

  // --- ĐỒNG BẰNG SÔNG CỬU LONG ---
  {
    id: "dongthap",
    name: "Đồng Tháp",
    d: "M 395,860 L 435,875 L 425,915 L 380,900 Z",
    labelX: 405, labelY: 885
  },
  {
    id: "angiang",
    name: "An Giang",
    d: "M 335,850 L 390,865 L 375,915 L 320,900 Z",
    labelX: 350, labelY: 880
  },
  {
    id: "vinhlong",
    name: "Vĩnh Long",
    d: "M 410,915 L 450,910 L 455,950 L 405,955 Z",
    labelX: 430, labelY: 935
  },
  {
    id: "cantho",
    name: "Cần Thơ",
    d: "M 365,915 L 410,915 L 410,965 L 360,965 Z",
    labelX: 385, labelY: 940
  },
  {
    id: "camau",
    name: "Cà Mau",
    d: "M 320,935 L 370,945 L 360,995 L 305,985 L 295,950 Z",
    labelX: 335, labelY: 965
  }
];

// Quần đảo và hải đảo Việt Nam
const VIETNAM_ISLANDS = [
  {
    id: "hoang-sa",
    name: "Quần đảo Hoàng Sa (TP. Đà Nẵng)",
    ownerId: "danang",
    cx: 670, cy: 530, r: 16,
    label: "Quần đảo Hoàng Sa",
    subLabel: "(TP. Đà Nẵng)",
    dots: [{ x: 660, y: 520 }, { x: 675, y: 525 }, { x: 685, y: 535 }, { x: 665, y: 540 }]
  },
  {
    id: "truong-sa",
    name: "Quần đảo Trường Sa (Tỉnh Khánh Hòa)",
    ownerId: "khanhhoa",
    cx: 680, cy: 780, r: 24,
    label: "Quần đảo Trường Sa",
    subLabel: "(Tỉnh Khánh Hòa)",
    dots: [{ x: 665, y: 765 }, { x: 685, y: 770 }, { x: 700, y: 785 }, { x: 675, y: 795 }, { x: 690, y: 810 }]
  },
  {
    id: "phu-quoc",
    name: "Đảo Phú Quốc (Tỉnh An Giang mới)",
    ownerId: "angiang",
    cx: 280, cy: 890, r: 10,
    label: "Phú Quốc",
    subLabel: "(An Giang)",
    dots: [{ x: 278, y: 885 }, { x: 282, y: 895 }]
  },
  {
    id: "con-dao",
    name: "Côn Đảo (TP. Hồ Chí Minh mới)",
    ownerId: "tphcm",
    cx: 470, cy: 960, r: 7,
    label: "Côn Đảo",
    subLabel: "(TP.HCM)",
    dots: [{ x: 470, y: 960 }]
  }
];

if (typeof window !== "undefined") {
  window.VIETNAM_MAP_PATHS = VIETNAM_MAP_PATHS;
  window.VIETNAM_ISLANDS = VIETNAM_ISLANDS;
}
