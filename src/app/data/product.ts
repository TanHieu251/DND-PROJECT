export interface Item {
  title: string;
  subcategories: string[];
  isOpen: boolean;
}

export const productData =[

    {
      id:'001',
      name: 'Thiết bị điện ABC 1',
      description: 'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch...',
      descriptionRelation: 'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch...',
      features: 'Tính năng chính: Bảo vệ quá dòng, Đo lường điện áp, Phân tích sự cố.',
      specifications: 'Dòng điện định mức: 100A, Điện áp: 220V, Tiêu chuẩn: IEC.',
      reviews: 'Sản phẩm được đánh giá cao về độ bền và hiệu suất.',
      price: '60,000 VND',
      status:false,
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      thumbnail:'assets/image 5.png',
      // code.name.split(' ').join('').toUpperCase() + Math.floor(Math.random() * 1000) + 1
    },
    {
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
      name: 'Thiết bị điện MNO 5',
      description: 'Thiết bị MNO nổi bật với khả năng chịu nhiệt và bền bỉ...',
      price: '100,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện PQR 6',
      description: 'Thiết bị PQR đem lại khả năng ngắt mạch tức thời, giảm rủi ro cháy nổ...',
      price: '110,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện STU 7',
      description: 'STU là giải pháp tối ưu cho hệ thống điện công nghiệp...',
      price: '120,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện VWX 8',
      description: 'Thiết bị điện VWX với vật liệu chất lượng cao, đảm bảo độ bền lâu dài...',
      price: '130,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện YZA 9',
      description: 'Thiết bị YZA có thiết kế chắc chắn, khả năng chống chịu tác động bên ngoài...',
      price: '140,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện BCD 10',
      description: 'Thiết bị BCD đạt tiêu chuẩn quốc tế về an toàn điện...',
      price: '150,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện EFG 11',
      description: 'Thiết bị EFG với khả năng tiết kiệm năng lượng, thân thiện với môi trường...',
      price: '160,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện HIJ 12',
      description: 'Thiết bị HIJ đảm bảo khả năng chống cháy nổ, tăng cường an toàn...',
      price: '170,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện KLM 13',
      description: 'Thiết bị KLM với thiết kế hiện đại, dễ sử dụng và bảo trì...',
      price: '180,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện NOP 14',
      description: 'Thiết bị NOP có độ bền cao, thích hợp cho các môi trường khắc nghiệt...',
      price: '190,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện QRS 15',
      description: 'Thiết bị QRS giúp tối ưu hóa hiệu suất, giảm thiểu hư hỏng do quá tải...',
      price: '200,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện TUV 16',
      description: 'Thiết bị TUV với công nghệ mới nhất, đảm bảo độ an toàn cao...',
      price: '210,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện WXY 17',
      description: 'WXY với độ chính xác cao, thích hợp cho các hệ thống điện công nghiệp...',
      price: '220,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện ZAB 18',
      description: 'Thiết bị ZAB mang lại hiệu suất đáng tin cậy trong mọi điều kiện làm việc...',
      price: '230,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện CDE 19',
      description: 'CDE có khả năng tự động ngắt mạch, bảo vệ tối ưu cho hệ thống...',
      price: '240,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện FGH 20',
      description: 'FGH có thiết kế gọn nhẹ, dễ dàng lắp đặt trong các hệ thống điện phức tạp...',
      price: '250,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
    },
    {
      name: 'Thiết bị điện IJK 21',
      description: 'IJK cung cấp độ ổn định cao, giảm thiểu tình trạng gián đoạn nguồn điện...',
      price: '260,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment21.png',
    },
    {
      name: 'Thiết bị điện LMN 22',
      description: 'LMN đảm bảo an toàn với khả năng chống rò rỉ điện tốt...',
      price: '270,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment22.png',
    },
    {
      name: 'Thiết bị điện OPQ 23',
      description: 'OPQ nổi bật với khả năng chịu tải lớn, không lo quá nhiệt...',
      price: '280,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment23.png',
    },
    {
      name: 'Thiết bị điện RST 24',
      description: 'Thiết bị RST có công nghệ tiên tiến, tiết kiệm điện năng tối đa...',
      price: '290,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment24.png',
    },
    {
      name: 'Thiết bị điện UVW 25',
      description: 'Thiết bị UVW cung cấp hiệu suất cao, đáp ứng nhu cầu công nghiệp...',
      price: '300,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment25.png',
    },
    {
      name: 'Thiết bị điện XYZ 26',
      description: 'XYZ với khả năng ngắt tự động, bảo vệ hệ thống khỏi hư hỏng...',
      price: '310,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment26.png',
    },
    {
      name: 'Thiết bị điện BCA 27',
      description: 'Thiết bị BCA được thiết kế để đảm bảo an toàn trong môi trường công nghiệp...',
      price: '320,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment27.png',
    },
    {
      name: 'Thiết bị điện DEF 28',
      description: 'Thiết bị DEF với chất liệu cao cấp, đảm bảo độ bền vượt trội...',
      price: '330,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment28.png',
    },
    {
      name: 'Thiết bị điện GHI 29',
      description: 'GHI mang đến khả năng làm việc ổn định, phù hợp cho các hệ thống phức tạp...',
      price: '340,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment29.png',
    },
    {
      name: 'Thiết bị điện JKL 30',
      description: 'JKL với công suất lớn, đáp ứng nhu cầu sử dụng liên tục...',
      price: '350,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment30.png',
    },
    {
      name: 'Thiết bị điện MNO 31',
      description: 'Thiết bị MNO có khả năng chịu lực cao, phù hợp với môi trường khắc nghiệt...',
      price: '360,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment31.png',
    },
    {
      name: 'Thiết bị điện PQR 32',
      description: 'PQR với công nghệ chống sốc điện tiên tiến, đảm bảo an toàn tối đa...',
      price: '370,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment32.png',
    },
    {
      name: 'Thiết bị điện STU 33',
      description: 'STU nổi bật với tính năng cách nhiệt và chống mài mòn tốt...',
      price: '380,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment33.png',
    },
    {
      name: 'Thiết bị điện VWX 34',
      description: 'Thiết bị VWX với hiệu suất cao, đảm bảo tiết kiệm năng lượng lâu dài...',
      price: '390,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment34.png',
    },
    {
      name: 'Thiết bị điện YZA 35',
      description: 'Thiết bị YZA giúp tăng cường độ an toàn cho hệ thống điện của bạn...',
      price: '400,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment35.png',
    },
    {
      name: 'Thiết bị điện BCD 36',
      description: 'Thiết bị BCD có độ bền vượt trội, phù hợp cho các công trình lớn...',
      price: '410,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment36.png',
    },
    {
      name: 'Thiết bị điện EFG 37',
      description: 'Thiết bị EFG mang lại sự an toàn tuyệt đối trong môi trường nguy hiểm...',
      price: '420,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment37.png',
    },
    {
      name: 'Thiết bị điện HIJ 38',
      description: 'HIJ được thiết kế để dễ dàng lắp đặt và thay thế khi cần...',
      price: '430,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment38.png',
    },
    {
      name: 'Thiết bị điện KLM 39',
      description: 'Thiết bị KLM có tính năng chống nhiễu điện từ, tăng cường hiệu suất...',
      price: '440,000 VND',
      status: 'Còn hàng',
      image: 'assets/equipment39.png',
    },
    {
      name: 'Thiết bị điện NOP 40',
      description: 'Thiết bị NOP mang đến độ tin cậy cao và khả năng làm việc bền bỉ...',
      price: '450,000 VND',
      status: 'Hết hàng',
      image: 'assets/equipment40.png',
    }
]

export const projectsData = [
  {
    image:'assets/nhamaydien.png',
    title:'Dự án Nhà máy điện Nhơn Trạch 3 và 4',
    description:'Dự án nhà máy điện Nhơn Trạch 3, 4 là công trình trọng điểm quốc gia, được xây dựng tại khu công nghiệp Ông Kèo, xã Phước Khánh, huyện Nhơn Trạch ...',
  },
  {
    image:'assets/cauthuthiem.png',
    title:'Công trình cầu vượt Thủ Thiêm',
    description: 'Cầu vượt Thủ Thiêm là một trong những dự án giao thông quan trọng tại TP.HCM, nối liền quận 2 và quận 1. Với tổng vốn đầu tư 800 triệu USD, dự án hứa hẹn sẽ giảm tải giao thông khu vực trung tâm, đồng thời tạo động lực phát triển kinh tế khu vực Thủ Thiêm.',
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



// export const projectsDetailInfor = [
//   {
//     image:'assets/projectimage.png',
//     title:'Dự án Nhà máy điện Nhơn Trạch 3 và 4',
//     description:'Dự án nhà máy điện Nhơn Trạch 3, 4 là công trình trọng điểm quốc gia, được xây dựng tại khu công nghiệp Ông Kèo, xã Phước Khánh, huyện Nhơn Trạch ...',
//   },
//   {
//     image:'assets/cauthuthiem.png',
//     title:'Công trình cầu vượt Thủ Thiêm',
//     description: 'Cầu vượt Thủ Thiêm là một trong những dự án giao thông quan trọng tại TP.HCM, nối liền quận 2 và quận 1. Với tổng vốn đầu tư 800 triệu USD, dự án hứa hẹn sẽ giảm tải giao thông khu vực trung tâm, đồng thời tạo động lực phát triển kinh tế khu vực Thủ Thiêm.',
//   },
//   {
//     image:'assets/caotocBN.png',
//     title:'Dự án đường cao tốc Bắc - Nam',
//     description: 'Dự án đường cao tốc Bắc - Nam là công trình trọng điểm quốc gia với chiều dài hơn 2.100km, đi qua 20 tỉnh, thành phố từ Bắc vào Nam. Tổng mức đầu tư khoảng 12 tỷ USD, khi hoàn thành sẽ rút ngắn thời gian di chuyển giữa các vùng và phát triển kinh tế - xã hội.',
//   },
//   {
//     image:'assets/nhamaynuoc.png',
//     title:'Nhà máy nước Củ Chi',
//     description: 'Nhà máy nước Củ Chi là dự án quan trọng nhằm cung cấp nước sạch cho khu vực phía Tây TP.HCM. Với tổng công suất 500.000m³/ngày, dự án sẽ góp phần cải thiện chất lượng nước sinh hoạt cho người dân. Tổng mức đầu tư của dự án là 500 triệu USD.',
//   },

// ]

export const ImageProject = [
  { id: 1, url: 'assets/projectimage.png' },
  { id: 2, url: 'assets/projectimage.png' },
  { id: 3, url: 'assets/projectimage.png' },
  { id: 4, url: 'assets/projectimage.png' },
  { id: 5, url: 'assets/projectimage.png' },
  { id: 6, url: 'assets/projectimage.png' }
]
