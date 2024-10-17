export interface Item {
  title: string;
  subcategories: string[];
  isOpen: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  descriptionRelation: string;
  features: string;
  specifications: string;
  reviews: string;
  price: string;
  status: boolean;
  availability: string;
  image: string;
  thumbnail: string;
}

export const productData = [
  {
    id: 'DND001',
    name: 'Thiết bị điện ABC 1',
    description: 'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch...',
    descriptionRelation: 'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch...',
    features: 'Tính năng chính: Bảo vệ quá dòng, Đo lường điện áp, Phân tích sự cố.',
    specifications: 'Dòng điện định mức: 100A, Điện áp: 220V, Tiêu chuẩn: IEC.',
    reviews: 'Sản phẩm được đánh giá cao về độ bền và hiệu suất.',
    price: '60,000 VND',
    status: false,
    availability: 'Còn hàng',
    image: 'assets/image 5.png',
    thumbnail: 'assets/image 5.png',
  },
  {
    id: 'DND002',
    name: 'Thiết bị điện DEF 2',
    description: 'Thiết bị điện DEF với khả năng cách điện tiên tiến, bảo vệ toàn diện...',
    price: '70,000 VND',
    status: false,
    availability: 'Hết hàng',
    image: 'assets/image 5.png',
    descriptionRelation: 'DESCRIPTION',
    features: 'FEATURES',
    specifications: 'SPECIFICATIONS',
    reviews: 'MORE REVIEW',
  },
  {
    id: 'DND003',
    name: 'Thiết bị điện GHI 3',
    description: 'Thiết bị GHI sử dụng công nghệ hiện đại, đảm bảo an toàn tối đa...',
    price: '80,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
    descriptionRelation: 'DESCRIPTION',
    features: 'FEATURES',
    specifications: 'SPECIFICATIONS',
    reviews: 'MORE REVIEW',
  },
  {
    id: 'DND004',
    name: 'Thiết bị điện JKL 4',
    description: 'JLK với thiết kế nhỏ gọn, dễ dàng lắp đặt trong mọi không gian...',
    price: '90,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
    descriptionRelation: 'DESCRIPTION',
    features: 'FEATURES',
    specifications: 'SPECIFICATIONS',
    reviews: 'MORE REVIEW',
  },
  {
    id: 'DND005',
    name: 'Thiết bị điện MNO 5',
    description: 'Thiết bị MNO nổi bật với khả năng chịu nhiệt và bền bỉ...',
    price: '100,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND006',
    name: 'Thiết bị điện PQR 6',
    description: 'Thiết bị PQR đem lại khả năng ngắt mạch tức thời, giảm rủi ro cháy nổ...',
    price: '110,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND007',
    name: 'Thiết bị điện STU 7',
    description: 'STU là giải pháp tối ưu cho hệ thống điện công nghiệp...',
    price: '120,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND008',
    name: 'Thiết bị điện VWX 8',
    description: 'Thiết bị điện VWX với vật liệu chất lượng cao, đảm bảo độ bền lâu dài...',
    price: '130,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND009',
    name: 'Thiết bị điện YZA 9',
    description: 'Thiết bị YZA có thiết kế chắc chắn, khả năng chống chịu tác động bên ngoài...',
    price: '140,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND010',
    name: 'Thiết bị điện BCD 10',
    description: 'Thiết bị BCD đạt tiêu chuẩn quốc tế về an toàn điện...',
    price: '150,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND011',
    name: 'Thiết bị điện EFG 11',
    description: 'Thiết bị điện EFG giúp cải thiện hiệu suất của hệ thống điện...',
    price: '160,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND012',
    name: 'Thiết bị điện HIJ 12',
    description: 'Thiết bị HIJ là giải pháp tiết kiệm năng lượng hiệu quả...',
    price: '170,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND013',
    name: 'Thiết bị điện KLM 13',
    description: 'Thiết bị KLM mang lại khả năng bảo vệ điện vượt trội...',
    price: '180,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND014',
    name: 'Thiết bị điện NOP 14',
    description: 'Thiết bị NOP với khả năng chịu tải cao và tuổi thọ lâu dài...',
    price: '190,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND015',
    name: 'Thiết bị điện QRS 15',
    description: 'Thiết bị QRS đáp ứng tiêu chuẩn an toàn quốc tế...',
    price: '200,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND016',
    name: 'Thiết bị điện TUV 16',
    description: 'Thiết bị TUV nổi bật với khả năng vận hành ổn định...',
    price: '210,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND017',
    name: 'Thiết bị điện WXY 17',
    description: 'Thiết bị WXY mang lại hiệu suất cao và độ bền vượt trội...',
    price: '220,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND018',
    name: 'Thiết bị điện ZAB 18',
    description: 'Thiết bị ZAB với tính năng chống quá nhiệt hiệu quả...',
    price: '230,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND019',
    name: 'Thiết bị điện BCD 19',
    description: 'Thiết bị BCD có khả năng tiết kiệm điện năng...',
    price: '240,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND020',
    name: 'Thiết bị điện EFG 20',
    description: 'Thiết bị điện EFG với thiết kế chắc chắn, chịu lực tốt...',
    price: '250,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND021',
    name: 'Thiết bị điện HIJ 21',
    description: 'Thiết bị HIJ có khả năng vận hành liên tục, bền bỉ...',
    price: '260,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND022',
    name: 'Thiết bị điện KLM 22',
    description: 'Thiết bị KLM được thiết kế để chống nước và bụi...',
    price: '270,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND023',
    name: 'Thiết bị điện NOP 23',
    description: 'Thiết bị NOP giúp giảm nguy cơ quá tải cho hệ thống điện...',
    price: '280,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND024',
    name: 'Thiết bị điện QRS 24',
    description: 'Thiết bị QRS với lớp vỏ cách điện bền chắc...',
    price: '290,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND025',
    name: 'Thiết bị điện TUV 25',
    description: 'Thiết bị TUV là sự lựa chọn lý tưởng cho các hệ thống điện công nghiệp...',
    price: '300,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND026',
    name: 'Thiết bị điện WXY 26',
    description: 'Thiết bị WXY với khả năng chịu tải lớn, bền bỉ theo thời gian...',
    price: '310,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND027',
    name: 'Thiết bị điện ZAB 27',
    description: 'Thiết bị ZAB giúp bảo vệ an toàn cho hệ thống điện...',
    price: '320,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND028',
    name: 'Thiết bị điện BCD 28',
    description: 'Thiết bị BCD với thiết kế nhỏ gọn, dễ lắp đặt...',
    price: '330,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND029',
    name: 'Thiết bị điện EFG 29',
    description: 'Thiết bị EFG đáp ứng các tiêu chuẩn khắt khe về an toàn...',
    price: '340,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND030',
    name: 'Thiết bị điện HIJ 30',
    description: 'Thiết bị HIJ giúp tối ưu hóa hiệu suất làm việc của hệ thống...',
    price: '350,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND031',
    name: 'Thiết bị điện KLM 31',
    description: 'Thiết bị KLM với khả năng cách điện tốt, an toàn cho người sử dụng...',
    price: '360,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND032',
    name: 'Thiết bị điện NOP 32',
    description: 'Thiết bị NOP bền bỉ, chịu lực tốt trong mọi điều kiện...',
    price: '370,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND033',
    name: 'Thiết bị điện QRS 33',
    description: 'Thiết bị QRS giúp giảm rủi ro điện giật và cháy nổ...',
    price: '380,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND034',
    name: 'Thiết bị điện TUV 34',
    description: 'Thiết bị TUV có khả năng chịu nhiệt độ cao, thích hợp cho môi trường công nghiệp...',
    price: '390,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND035',
    name: 'Thiết bị điện WXY 35',
    description: 'Thiết bị WXY được làm từ vật liệu chống cháy nổ, an toàn cho sử dụng...',
    price: '400,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND036',
    name: 'Thiết bị điện ZAB 36',
    description: 'Thiết bị ZAB với lớp vỏ bảo vệ dày, chịu va đập tốt...',
    price: '410,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND037',
    name: 'Thiết bị điện BCD 37',
    description: 'Thiết bị BCD với tính năng tự động ngắt khi gặp sự cố...',
    price: '420,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND038',
    name: 'Thiết bị điện EFG 38',
    description: 'Thiết bị EFG với công nghệ tiên tiến, mang lại hiệu suất tối ưu...',
    price: '430,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND039',
    name: 'Thiết bị điện HIJ 39',
    description: 'Thiết bị HIJ có độ bền cao và khả năng chống nước tốt...',
    price: '440,000 VND',
    status: 'Còn hàng',
    image: 'assets/image 5.png',
  },
  {
    id: 'DND040',
    name: 'Thiết bị điện KLM 40',
    description: 'Thiết bị KLM với khả năng hoạt động ổn định trong môi trường khắc nghiệt...',
    price: '450,000 VND',
    status: 'Hết hàng',
    image: 'assets/image 5.png',
  },
];


export const projectsData = [
  {
    title: "Dự án Nhà máy điện Nhơn Trạch 3 và 4",
    image: "assets/projectimage.png",
    description: "Dự án nhà máy điện Nhơn Trạch 3 và 4 (Nhơn Trạch 3,4) là dự án trọng điểm quốc gia, thuộc Quy hoạch điện 7 điều chỉnh, được Chính phủ giao cho Tổng công ty Điện lực Dầu khí Việt Nam - CTCP (PV Power) làm chủ đầu tư. Với tổng mức đầu tư 1,4 tỷ USD, Liên danh nhà thầu EPC là Tổng công ty Lắp máy Việt Nam (Lilama) và Samsung C&T, dự án được sử dụng các thiết bị chính do GE (Hoa Kỳ) thiết kế và chế tạo. Đây là dự án nhiệt điện sở sử dụng nhiên liệu khí LNG đầu tiên tại Việt Nam. Là một trong số ít tổ máy tua-bin khí có công suất (trên 500MW) cũng như hiệu suất khí (trên 60%) lớn nhất trên thế giới. Khi đi vào hoạt động, dự án sẽ góp phần thực hiện cam kết phát thải ròng về 0 vào năm 2050 của Chính phủ tại COP26 và bổ sung 9 tỷ kWh điện/năm cho hệ thống điện Quốc gia.",
    objectives: [
      "Cung cấp điện cho khu vực miền Nam",
      "Đảm bảo nguồn năng lượng tái tạo"
    ],
    timeline: {
      start: "01/01/2024",
      end: "31/12/2026",
      milestones: [
        { date: "01/06/2024", description: "Hoàn thành giai đoạn 1" },
        { date: "01/12/2025", description: "Bắt đầu giai đoạn 2" }
      ]
    },
    stakeholders: [
      "EVN",
      "Bộ Công Thương",
      "Nhà thầu xây dựng ABC"
    ]
  },
  {
    image:'assets/cauthuthiem.png',
    title:'Công trình cầu vượt Thủ Thiêm',
    description: 'Cầu Thủ Thiêm là một cây cầu bắc qua sông Sài Gòn, nối liền quận Bình Thạnh và thành phố Thủ Đức, Thành phố Hồ Chí Minh. Cầu có 6 làn xe, nối Khu đô thị mới Thủ Thiêm và trung tâm hiện hữu của thành phố và được thông xe vào năm 2005.[a] Tổng kinh phí xây dựng cầu lên đến 1.099,6 tỷ đồng. Tổng thầu là Tổng công ty xây dựng số 1 thuộc Bộ Xây dựng. Cầu Thủ Thiêm dài 1.250 m, phần cầu chính gồm 5 nhịp, 6 làn xe; phần cầu dẫn phía Bình Thạnh gồm bốn nhánh, mỗi nhánh 2 làn xe; cầu dẫn phía thành phố Thủ Đức dài 160 m, rộng tương đương 6 làn xe. Nút giao phía quận Bình Thạnh gồm một hầm chui trực thông dài 460 m trên đường Nguyễn Hữu Cảnh, rộng 4 làn xe. Đường dẫn phía thành phố Thủ Đức dài 280 m, mặt cắt ngang 47 m. Đường gom có tổng chiều dài 1.460 m, phía quận Bình Thạnh rộng 10,5 m, phía thành phố Thủ Đức rộng 9,5 m. Điểm đầu dự án là giao giữa đường Ngô Tất Tố với đường Nguyễn Hữu Cảnh, phường 22, Bình Thạnh. Điểm cuối dự án kết nối với đường Lương Định Của (thành phố Thủ Đức); tuyến chạy theo tim đường Ngô Tất Tố hiện hữu vượt sông Sài Gòn. Cầu Thủ Thiêm được hợp long vào lúc 8 giờ 15 phút sáng ngày 29 tháng 11 năm 2007. Ông Lê Hoàng Quân - Chủ tịch Ủy ban Nhân dân Thành phố Hồ Chí Minh - đã cho mẻ bê tông đầu tiên vào vị trí hợp long của cầu.',
  },
  {
    image:'assets/caotocBN.png',
    title:'Dự án đường cao tốc Bắc - Nam',
    description: 'Dự án đường cao tốc Bắc - Nam là công trình trọng điểm quốc gia với chiều dài hơn 2.100km, đi qua 20 tỉnh, thành phố từ Bắc vào Nam. Tổng mức đầu tư khoảng 12 tỷ USD, khi hoàn thành sẽ rút ngắn thời gian di chuyển giữa các vùng và phát triển kinh tế - xã hội.',
  },
  {
    image:'assets/nhamaynuoc.png',
    title:'Nhà máy nước Củ Chi',
    description: 'Nhà máy nước Củ Chi là dự án quan trọng nhằm cung cấp nước sạch cho khu vực phía Tây TP.HCM. Với tổng công suất 500.000m³/ngày, dự án sẽ góp phần cải thiện chất lượng nước sinh hoạt cho người dân. Tổng mức đầu tư của dự án là 500 triệu USD.',
  },

]

export const ImageProject = [
  { id: 1, url: 'assets/projectimage.png' },
  { id: 2, url: 'assets/projectimage.png' },
  { id: 3, url: 'assets/projectimage.png' },
  { id: 4, url: 'assets/projectimage.png' },
  { id: 5, url: 'assets/projectimage.png' },
  { id: 6, url: 'assets/projectimage.png' }
]
