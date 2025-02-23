import { DecimalPipe } from "@angular/common";
import { CustomerDialogComponent } from '../p-web/shared/components/C-cart/customer-dialog/customer-dialog.component';

export interface Item {
  title: string;
  subcategories: string[];
  isOpen: boolean;
}
// export interface Customer {
//   id: number;
//   name: string;
//   email: string;
//   phone: number;
//   location: string;
// }
// const CustomerData: Customer[] = [
//   {id: 1, name: 'hao nguyen', email: 'haonguyen@gmail.com', phone: 84999333999, location:'DT, Cl'},

// ];
export const status = [
  { id: 1, name: 'Đang soạn thảo' },
  { id: 2, name: 'Gửi duyệt' },
  { id: 3, name: 'Đã duyệt' },
  { id: 4, name: 'Ngưng áp dụng' },
  { id: 5, name: 'Trả về' },
];

export interface Product {
  id: string;
  name: string;
  description: string;
  descriptionRelation: string;
  features: string;
  specifications: string;
  reviews: string;
  price: number;
  status: boolean;
  availability: string;
  image: string;
  thumbnail: string;
  quantity: number;
}
// export interface ProductManage {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   location: string;
// }

export const ManageProduct = [
  {
    id: 1,
    title: 'Quản lý sản phẩm',
    subcategories: ['Sản phẩm điện tử', 'Sản phẩm điều khiển'],
    isOpen: false,
    price:'',
    quantity: '',
    image: '',
  }
]
export interface News {
  id: number;
  title: string;
  imgSrc: string;
  date: string;
  content: string;
  mainImage: string;
  caption: string,
  secondaryImages: string[];
  relationImg: string[];
  type: NewsData;
}
type NewsData = "main" | "feature" | "relation"


export const productData = [
    {
      id: 'DND001',
      name: 'Cầu Dao Tự Động 1 Pha',
      description: 'Cầu dao tự động dùng để bảo vệ các thiết bị điện trong hệ thống điện hạ thế.',
      descriptionRelation: 'Phù hợp cho các công trình dân dụng và công nghiệp.',
      features: 'Bảo vệ quá tải và ngắn mạch; thiết kế nhỏ gọn; dễ dàng lắp đặt.',
      specifications: 'Dòng định mức: 16A; Điện áp: 220V; Kích thước: 80x45x60mm.',
      reviews: 'Sản phẩm chất lượng, bảo vệ an toàn cho hệ thống điện.',
      price: "150000",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/cau-dao-tu-dong.png',
      thumbnail: 'assets/cau-dao-tu-dong.png',
      quantity:'5'
    },
    {
      id: 'DND002',
      name: 'Bộ Truyền Tải Điện 3 Pha',
      description: 'Thiết bị truyền tải điện 3 pha giúp phân phối điện ổn định.',
      descriptionRelation: 'Sử dụng cho các nhà máy và trạm biến áp.',
      features: 'Khả năng truyền tải cao; thiết kế bền bỉ.',
      specifications: 'Công suất: 500kVA; Điện áp: 10kV; Kích thước: 120x80x200cm.',
      reviews: 'Hoạt động ổn định và độ bền cao.',
      price: "5000000",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/botruyentai3pha.png',
      thumbnail: 'assets/botruyentai3pha.png',
      quantity: '4',
    },
    {
      id: 'DND003',
      name: 'Công Tắc Cảm Ứng Hồng Ngoại',
      description: 'Công tắc cảm ứng tự động bật tắt đèn khi có người.',
      descriptionRelation: 'Phù hợp cho hành lang, nhà vệ sinh.',
      features: 'Phạm vi cảm biến rộng; tiết kiệm năng lượng.',
      specifications: 'Góc cảm biến: 120°; Khoảng cách: 8m; Điện áp: 220V.',
      reviews: 'Cảm ứng nhạy, tiết kiệm điện.',
      price: "350000",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/cong-tac-wifi-thong-minh-sw702-wifi (6).jpg',
      thumbnail: 'assets/cong-tac-wifi-thong-minh-sw702-wifi (6).jpg',
      quantity:'10'
    },
    {
      id: 'DND004',
      name: 'Đồng Hồ Đo Công Suất Điện Tử',
      description: 'Dùng để đo lường công suất tiêu thụ của các thiết bị điện.',
      descriptionRelation: 'Sử dụng trong các hệ thống giám sát năng lượng.',
      features: 'Hiển thị chính xác; thiết kế nhỏ gọn.',
      specifications: 'Dải đo: 0-9999W; Độ chính xác: ±1%.',
      reviews: 'Đo lường chính xác, dễ sử dụng.',
      price: "900000",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/donghocongsuatdientu.png',
      thumbnail: 'assets/donghocongsuatdientu.png',
      quantity:'10'
    },
    {
      id: 'DND005',
      name: 'Tấm Pin Năng Lượng Mặt Trời 200W',
      description: 'Tấm pin hiệu suất cao, chuyển đổi ánh sáng thành điện năng.',
      descriptionRelation: 'Phù hợp cho hệ thống điện mặt trời.',
      features: 'Hiệu suất cao; chống nước và bụi.',
      specifications: 'Công suất: 200W; Kích thước: 1640x992x35mm.',
      reviews: 'Tạo ra nhiều điện năng ngay cả khi ánh sáng yếu.',
      price: "4500000" ,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/pinnlmt.jpg',
      thumbnail: 'assets/pinnlmt.jpg',
      quantity:'10'

    },
    {
      id: 'DND006',
      name: 'Thiết Bị Chống Sét Hạ Thế',
      description: 'Thiết bị chống sét dùng để bảo vệ hệ thống điện khỏi sự cố sét đánh.',
      descriptionRelation: 'Phù hợp cho các công trình xây dựng và nhà ở.',
      features: 'Chống sét hiệu quả; thiết kế dễ lắp đặt.',
      specifications: 'Điện áp làm việc: 275V; Công suất chịu tải: 40kA.',
      reviews: 'Thiết bị an toàn và hiệu quả cao.',
      price: "1200000",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/chong-set-van-2-min.jpg',
      thumbnail: 'assets/chong-set-van-2-min.jpg',
      quantity:'10'

    },
    {
      id: 'DND007',
      name: 'Biến Áp Truyền Tải Điện 100kVA',
      description: 'Thiết bị dùng để truyền tải và phân phối điện năng cho các hệ thống công nghiệp.',
      descriptionRelation: 'Sử dụng tại các trạm biến áp và nhà máy sản xuất.',
      features: 'Hiệu suất cao; bền bỉ trong điều kiện khắc nghiệt.',
      specifications: 'Công suất: 100kVA; Điện áp: 22kV.',
      reviews: 'Sản phẩm đáng tin cậy, hiệu suất cao.',
      price: "15000000",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/trambienapdl.jpg',
      thumbnail: 'assets/trambienapdl.jpg',
      quantity:'10'

    },
    {
      id: 'DND008',
      name: 'Công Tắc Đèn Điều Khiển Từ Xa',
      description: 'Công tắc thông minh điều khiển đèn từ xa qua điện thoại.',
      descriptionRelation: 'Phù hợp cho nhà thông minh và văn phòng.',
      features: 'Điều khiển từ xa; tích hợp với các trợ lý ảo.',
      specifications: 'Điện áp: 220V; Công suất tối đa: 10A.',
      reviews: 'Tiện lợi, dễ sử dụng và an toàn.',
      price: "600000",
      status: true,
      availability: 'Còn hàng',
      image: 'src/assets/congtacdktx.png',
      thumbnail: 'src/assets/congtacdktx.png',
      quantity:'10'

    },
    {
      id: 'DND009',
      name: 'Bộ Điều Khiển Sạc Pin Mặt Trời 30A',
      description: 'Thiết bị dùng để điều khiển quá trình sạc và bảo vệ pin mặt trời.',
      descriptionRelation: 'Phù hợp cho các hệ thống năng lượng mặt trời độc lập.',
      features: 'Bảo vệ quá tải; hiển thị thông số sạc.',
      specifications: 'Dòng sạc: 30A; Điện áp: 12/24V tự động.',
      reviews: 'Sản phẩm hoạt động ổn định, dễ lắp đặt.',
      price: "1000000 ",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/bodieukhientampinmattroi.png',
      thumbnail: 'assets/bodieukhientampinmattroi.png',
      quantity:'10'

    },
    {
      id: 'DND010',
      name: 'Máy Phát Điện Dự Phòng 5kW',
      description: 'Máy phát điện dự phòng dùng cho các công trình và nhà ở khi mất điện.',
      descriptionRelation: 'Sử dụng phổ biến trong gia đình và công ty nhỏ.',
      features: 'Hoạt động êm ái; tiêu hao nhiên liệu thấp.',
      specifications: 'Công suất: 5kW; Nhiên liệu: Xăng; Kích thước: 80x60x70cm.',
      reviews: 'Máy vận hành êm và tiết kiệm nhiên liệu.',
      price: "12000000 ",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/mayphatdien.jpg',
      thumbnail: 'assets/mayphatdien.jpg',
      quantity:'10'

    },
    {
      id: 'DND011',
      name: 'Ổ Cắm Điện Đa Năng',
      description: 'Ổ cắm điện đa năng hỗ trợ nhiều loại phích cắm khác nhau.',
      descriptionRelation: 'Phù hợp sử dụng trong gia đình và văn phòng.',
      features: 'Tích hợp công tắc; chất liệu chống cháy.',
      specifications: 'Điện áp: 220V; Dòng tải tối đa: 10A; Kích thước: 150x80mm.',
      reviews: 'Sản phẩm an toàn, tiện lợi và chắc chắn.',
      price: "100000" ,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/ocamdiendanang.jpg',
      thumbnail: 'assets/ocamdiendanang.jpg',
      quantity:'10'

    },
    {
      id: 'DND012',
      name: 'Thiết Bị Đo Áp Suất',
      description: 'Thiết bị đo áp suất dùng trong các hệ thống công nghiệp.',
      descriptionRelation: 'Sử dụng phổ biến trong các nhà máy và hệ thống HVAC.',
      features: 'Độ chính xác cao; màn hình hiển thị số rõ ràng.',
      specifications: 'Dải đo: 0-1000 psi; Độ chính xác: ±0.5%.',
      reviews: 'Hoạt động chính xác, dễ dàng sử dụng.',
      price: "1200000 ",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/thietbidoapsuat.jpg',
      thumbnail: 'assets/thietbidoapsuat.jpg',
      quantity:'10'
    },
    {
      id: 'DND013',
      name: 'Bộ Chuyển Đổi Tần Số 3 Pha',
      description: 'Thiết bị dùng để điều chỉnh tần số của hệ thống điện 3 pha.',
      descriptionRelation: 'Phù hợp cho hệ thống điều khiển động cơ và biến tần.',
      features: 'Khả năng điều chỉnh tần số linh hoạt; bảo vệ quá tải.',
      specifications: 'Điện áp: 380V; Công suất: 10kW; Tần số: 50/60Hz.',
      reviews: 'Sản phẩm hiệu quả, giúp tiết kiệm điện năng.',
      price: "6000000 ",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/bochuyendoitanso.png',
      thumbnail: 'assets/bochuyendoitanso.png',
      quantity:'10'
    },
    {
      id: 'DND014',
      name: 'Công Tắc Đôi Có Đèn Báo',
      description: 'Công tắc đôi có đèn báo trạng thái, phù hợp cho nhiều loại thiết bị.',
      descriptionRelation: 'Sử dụng trong các công trình dân dụng và thương mại.',
      features: 'Có đèn báo; thiết kế hiện đại.',
      specifications: 'Điện áp: 220V; Công suất tối đa: 16A.',
      reviews: 'Thiết kế đẹp, tiện lợi và dễ sử dụng.',
      price: "180000",
      status: true,
      availability: 'Còn hàng',
      image: 'assets/contacdoi.png',
      thumbnail: 'assets/contacdoi.png',
      quantity:'10'
    },
    {
      id: 'DND015',
      name: 'Pin Lưu Trữ Năng Lượng 12V 100Ah',
      description: 'Pin lưu trữ cho hệ thống năng lượng mặt trời, phù hợp cho cả dân dụng và công nghiệp.',
      descriptionRelation: 'Sử dụng để dự trữ điện cho các thiết bị trong trường hợp mất điện.',
      features: 'Dung lượng lớn; tuổi thọ cao.',
      specifications: 'Điện áp: 12V; Dung lượng: 100Ah; Kích thước: 330x170x215mm.',
      reviews: 'Sản phẩm đáng tin cậy, hiệu suất tốt.',
      price: "4000000" ,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/hoppinnlmt.png',
      thumbnail: 'assets/hoppinnlmt.png',
      quantity:'10'
    },
    {
      id: 'DND016',
      name: 'Bộ Biến Áp 1 Pha',
      description: 'Bộ biến áp 1 pha dùng để thay đổi mức điện áp.',
      descriptionRelation: 'Sử dụng trong các ứng dụng điện tử và hệ thống cấp điện.',
      features: 'Hiệu suất cao; thiết kế nhỏ gọn.',
      specifications: 'Công suất: 3kVA; Điện áp: 220V/110V.',
      reviews: 'Hoạt động ổn định, chất lượng tốt.',
      price: "2500000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/bien-ap-1-pha-vao-220v-ra-12v-11kva100a-fushin_1342.png',
      thumbnail: 'assets/bien-ap-1-pha-vao-220v-ra-12v-11kva100a-fushin_1342.png'
    },
    {
      id: 'DND017',
      name: 'Thiết Bị Theo Dõi Năng Lượng Điện Tử',
      description: 'Thiết bị dùng để giám sát lượng điện năng tiêu thụ.',
      descriptionRelation: 'Sử dụng cho các hệ thống giám sát điện năng và tự động hóa.',
      features: 'Hiển thị thông tin chi tiết; cảnh báo khi vượt ngưỡng.',
      specifications: 'Điện áp: 220V; Dòng tải tối đa: 30A.',
      reviews: 'Dễ sử dụng, giúp quản lý năng lượng hiệu quả.',
      price: "850000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/giam-sat-dien-nang-h1.png',
      thumbnail: 'assets/giam-sat-dien-nang-h1.png'
    },
    {
      id: 'DND018',
      name: 'Máy Biến Áp Điện Tử',
      description: 'Máy biến áp điện tử dùng để chuyển đổi điện áp cho các thiết bị điện tử.',
      descriptionRelation: 'Phù hợp cho các thiết bị điện tử dân dụng.',
      features: 'Thiết kế nhỏ gọn; hiệu suất cao.',
      specifications: 'Công suất: 500VA; Điện áp: 220V/110V.',
      reviews: 'Hoạt động ổn định, phù hợp cho các thiết bị gia đình.',
      price: "1800000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/maybienapdientu.jpg',
      thumbnail: 'assets/maybienapdientu.jpg'
    },
    {
      id: 'DND019',
      name: 'Đồng Hồ Đo Điện Trở',
      description: 'Thiết bị đo điện trở cho các ứng dụng điện và điện tử.',
      descriptionRelation: 'Sử dụng trong các phòng thí nghiệm và công tác bảo trì.',
      features: 'Độ chính xác cao; màn hình LCD hiển thị số.',
      specifications: 'Dải đo: 0-20 MΩ; Độ chính xác: ±2%.',
      reviews: 'Chất lượng tốt, hoạt động đáng tin cậy.',
      price: "1000000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/donghododientro.png',
      thumbnail: 'assets/donghododientro.png'
    },
    {
      id: 'DND020',
      name: 'Tủ Phân Phối Điện Trung Thế',
      description: 'Tủ điện dùng để phân phối điện năng trong các hệ thống trung thế.',
      descriptionRelation: 'Sử dụng trong các nhà máy và trạm biến áp.',
      features: 'Khả năng phân phối lớn; bảo vệ chống quá tải.',
      specifications: 'Điện áp: 24kV; Công suất: 630kVA.',
      reviews: 'Thiết kế chắc chắn, hoạt động ổn định.',
      price: "30000000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/tuphanphoidien.jpg',
      thumbnail: 'assets/tuphanphoidien.jpg'
    },
    {
      id: 'DND021',
      name: 'Máy Cắt Không Khí ACB',
      description: 'Máy cắt không khí ACB dùng để bảo vệ hệ thống điện trung thế.',
      descriptionRelation: 'Sử dụng trong các tủ phân phối và trạm biến áp.',
      features: 'Khả năng cắt dòng cao; bảo vệ quá tải và ngắn mạch.',
      specifications: 'Điện áp: 24kV; Dòng cắt: 50kA.',
      reviews: 'Hoạt động an toàn, hiệu quả cao.',
      price: "20000000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/may-cat-khong-khi.jpg',
      thumbnail: 'https://example.com/images/thumb/may-cat-khong-khi.jpg'
    },
    {
      id: 'DND022',
      name: 'Công Tơ Điện Tử 1 Pha',
      description: 'Công tơ điện tử dùng để đo lường điện năng tiêu thụ.',
      descriptionRelation: 'Phù hợp cho các hộ gia đình và tòa nhà chung cư.',
      features: 'Độ chính xác cao; hiển thị kỹ thuật số.',
      specifications: 'Điện áp: 220V; Dòng tải tối đa: 30A.',
      reviews: 'Hoạt động ổn định, đo chính xác.',
      price: "500000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cong-to-dien-tu.jpg',
      thumbnail: 'https://example.com/images/thumb/cong-to-dien-tu.jpg'
    },
    {
      id: 'DND023',
      name: 'Đèn LED Năng Lượng Mặt Trời',
      description: 'Đèn LED sử dụng năng lượng mặt trời, tiết kiệm điện năng.',
      descriptionRelation: 'Phù hợp chiếu sáng ngoài trời, công viên, sân vườn.',
      features: 'Tích hợp pin năng lượng mặt trời; chống thấm nước.',
      specifications: 'Công suất: 30W; Thời gian chiếu sáng: 8-10 giờ.',
      reviews: 'Tiện dụng, không cần nguồn điện.',
      price: "1200000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/den-led-nang-luong.jpg',
      thumbnail: 'https://example.com/images/thumb/den-led-nang-luong.jpg'
    },
    {
      id: 'DND024',
      name: 'Bộ Điều Khiển Tụ Bù Tự Động',
      description: 'Thiết bị điều khiển tự động bù công suất phản kháng.',
      descriptionRelation: 'Sử dụng trong các hệ thống phân phối điện công nghiệp.',
      features: 'Tự động bù; bảo vệ quá tải.',
      specifications: 'Điện áp: 220V; Công suất bù: 50kVAR.',
      reviews: 'Hiệu quả trong việc tiết kiệm năng lượng.',
      price: "4000000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/dieu-khien-tu-bu.jpg',
      thumbnail: 'https://example.com/images/thumb/dieu-khien-tu-bu.jpg'
    },
    {
      id: 'DND025',
      name: 'Thiết Bị Cắt Lọc Sét',
      description: 'Thiết bị bảo vệ chống sét và quá áp cho các thiết bị điện.',
      descriptionRelation: 'Phù hợp lắp đặt trong các tủ điện trung thế và hạ thế.',
      features: 'Chống sét hiệu quả; độ bền cao.',
      specifications: 'Điện áp: 220V/380V; Dòng cắt: 60kA.',
      reviews: 'Bảo vệ an toàn cho hệ thống điện.',
      price: "2500000",
      quantity: 10,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cat-loc-set.jpg',
      thumbnail: 'https://example.com/images/thumb/cat-loc-set.jpg'
    },
    {
      id: 'DND026',
      name: 'Công Tắc Hẹn Giờ Điện Tử',
      description: 'Công tắc hẹn giờ dùng để bật/tắt thiết bị tự động.',
      descriptionRelation: 'Sử dụng cho hệ thống chiếu sáng, máy bơm nước.',
      features: 'Lập trình thời gian linh hoạt; tiết kiệm điện.',
      specifications: 'Điện áp: 220V; Dòng tải tối đa: 16A.',
      reviews: 'Tiện lợi, dễ cài đặt.',
      price:"600000" ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cong-tac-hen-gio.jpg',
      thumbnail: 'https://example.com/images/thumb/cong-tac-hen-gio.jpg'
    },
    {
      id: 'DND027',
      name: 'Bộ Lọc Sóng Hài',
      description: 'Thiết bị lọc sóng hài để bảo vệ hệ thống điện khỏi nhiễu.',
      descriptionRelation: 'Sử dụng trong các hệ thống điều khiển và công nghiệp.',
      features: 'Khả năng lọc nhiễu tốt; giảm sóng hài.',
      specifications: 'Công suất: 50kW; Điện áp: 380V.',
      reviews: 'Hiệu quả, nâng cao độ ổn định của hệ thống điện.',
      price: "7000000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/bo-loc-song-hai.jpg',
      thumbnail: 'https://example.com/images/thumb/bo-loc-song-hai.jpg'
    },
    {
      id: 'DND028',
      name: 'Máy Nâng Điện Hạ Thế',
      description: 'Thiết bị nâng điện áp dùng trong các hệ thống điện hạ thế.',
      descriptionRelation: 'Phù hợp cho các hệ thống cấp điện khu dân cư.',
      features: 'Khả năng điều chỉnh điện áp linh hoạt; bảo vệ chống quá tải.',
      specifications: 'Công suất: 10kVA; Điện áp: 220V/380V.',
      reviews: 'Hoạt động ổn định, độ tin cậy cao.',
      price: "5000000" ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/may-nang-ha-the.jpg',
      thumbnail: 'https://example.com/images/thumb/may-nang-ha-the.jpg'
    },
    {
      id: 'DND029',
      name: 'Công Tơ Điện 3 Pha',
      description: 'Công tơ điện tử đo lường điện năng 3 pha.',
      descriptionRelation: 'Sử dụng trong các hệ thống điện công nghiệp và tòa nhà.',
      features: 'Độ chính xác cao; hiển thị thông tin chi tiết.',
      specifications: 'Điện áp: 380V; Dòng tải tối đa: 100A.',
      reviews: 'Bền bỉ, đáng tin cậy.',
      price: "1500000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cong-to-3-pha.jpg',
      thumbnail: 'https://example.com/images/thumb/cong-to-3-pha.jpg'
    },
    {
      id: 'DND030',
      name: 'Pin Năng Lượng Mặt Trời 50W',
      description: 'Tấm pin năng lượng mặt trời công suất 50W, dùng cho hệ thống nhỏ.',
      descriptionRelation: 'Thích hợp cho các ứng dụng chiếu sáng, sạc thiết bị.',
      features: 'Hiệu suất cao; dễ dàng lắp đặt.',
      specifications: 'Công suất: 50W; Điện áp: 18V.',
      reviews: 'Hiệu quả cao, tiết kiệm năng lượng.',
      price: "2000000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/pin-nang-luong-50w.jpg',
      thumbnail: 'https://example.com/images/thumb/pin-nang-luong-50w.jpg'
    },

    {
      id: 'DND031',
      name: 'Bộ Chuyển Đổi Năng Lượng Mặt Trời',
      description: 'Bộ chuyển đổi năng lượng mặt trời sang điện áp 220V.',
      descriptionRelation: 'Phù hợp cho hệ thống điện mặt trời.',
      features: 'Hiệu suất chuyển đổi cao; an toàn và ổn định.',
      specifications: 'Công suất: 1000W; Điện áp đầu vào: 12V-24V.',
      reviews: 'Giải pháp năng lượng hiệu quả.',
      price: "4500000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/bo-chuyen-doi-nang-luong.jpg',
      thumbnail: 'https://example.com/images/thumb/bo-chuyen-doi-nang-luong.jpg'
  },
  {
      id: 'DND032',
      name: 'Quạt Thông Gió Công Nghiệp',
      description: 'Quạt thông gió cho các không gian công nghiệp.',
      descriptionRelation: 'Sử dụng cho nhà xưởng, kho bãi.',
      features: 'Độ ồn thấp; lưu lượng gió lớn.',
      specifications: 'Công suất: 300W; Kích thước: 1.2m.',
      reviews: 'Hoạt động hiệu quả, bền bỉ.',
      price: "3000000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/quat-thong-gio.jpg',
      thumbnail: 'https://example.com/images/thumb/quat-thong-gio.jpg'
  },
  {
      id: 'DND033',
      name: 'Bóng Đèn Compact 12W',
      description: 'Bóng đèn compact tiết kiệm điện năng.',
      descriptionRelation: 'Thích hợp cho chiếu sáng trong nhà.',
      features: 'Tiết kiệm điện lên đến 80%; tuổi thọ cao.',
      specifications: 'Công suất: 12W; Điện áp: 220V.',
      reviews: 'Ánh sáng dễ chịu, không gây chói.',
      price: "100000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/bong-den-compact.jpg',
      thumbnail: 'https://example.com/images/thumb/bong-den-compact.jpg'
  },
  {
      id: 'DND034',
      name: 'Bảng Điện Đa Năng',
      description: 'Bảng điện tích hợp nhiều chức năng bảo vệ.',
      descriptionRelation: 'Dùng cho hệ thống điện trong gia đình.',
      features: 'Bảo vệ quá tải, ngắn mạch; dễ dàng lắp đặt.',
      specifications: 'Điện áp: 220V; Số kênh: 8 kênh.',
      reviews: 'An toàn, dễ sử dụng.',
      price: "1200000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/bang-dien-da-nang.jpg',
      thumbnail: 'https://example.com/images/thumb/bang-dien-da-nang.jpg'
  },
  {
      id: 'DND035',
      name: 'Tủ Điện Phân Phối',
      description: 'Tủ điện dùng để phân phối điện năng trong các tòa nhà.',
      descriptionRelation: 'Thích hợp cho hệ thống điện công nghiệp.',
      features: 'Chất liệu thép không gỉ; thiết kế an toàn.',
      specifications: 'Điện áp: 400V; Kích thước: 1200x800x300mm.',
      reviews: 'Bền bỉ, dễ bảo trì.',
      price: "6000000 ",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/tu-dien-phan-phoi.jpg',
      thumbnail: 'https://example.com/images/thumb/tu-dien-phan-phoi.jpg'
  },
  {
      id: 'DND036',
      name: 'Máy Phát Điện Diesel 5kVA',
      description: 'Máy phát điện diesel cho nhu cầu sử dụng điện nhỏ.',
      descriptionRelation: 'Thích hợp cho gia đình và cửa hàng nhỏ.',
      features: 'Tiết kiệm nhiên liệu; dễ dàng khởi động.',
      specifications: 'Công suất: 5kVA; Nhiên liệu: Diesel.',
      reviews: 'Hoạt động ổn định, dễ dàng bảo trì.',
      price: "15000000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/may-phat-dien-diesel.jpg',
      thumbnail: 'https://example.com/images/thumb/may-phat-dien-diesel.jpg'
  },
  {
      id: 'DND037',
      name: 'Bảng Điều Khiển Tự Động',
      description: 'Bảng điều khiển tự động cho hệ thống điện.',
      descriptionRelation: 'Phù hợp cho hệ thống điện công nghiệp.',
      features: 'Điều khiển từ xa; lập trình linh hoạt.',
      specifications: 'Điện áp: 220V; Kích thước: 600x400mm.',
      reviews: 'Hiệu quả cao, dễ sử dụng.',
      price: "8000000",
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/bang-dieu-khien-tu-dong.jpg',
      thumbnail: 'https://example.com/images/thumb/bang-dieu-khien-tu-dong.jpg'
  },
  {
      id: 'DND038',
      name: 'Đèn Neon LED',
      description: 'Đèn LED neon trang trí cho không gian sống.',
      descriptionRelation: 'Thích hợp cho quán cà phê, nhà hàng.',
      features: 'Tiết kiệm điện; ánh sáng mềm mại.',
      specifications: 'Công suất: 10W; Điện áp: 220V.',
      reviews: 'Đẹp, dễ lắp đặt.',
      price: "300000" ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/den-neon-led.jpg',
      thumbnail: 'https://example.com/images/thumb/den-neon-led.jpg'
  },
  {
      id: 'DND039',
      name: 'Máy Đo Điện Đo Độ Ẩm',
      description: 'Máy đo điện giúp theo dõi độ ẩm không khí.',
      descriptionRelation: 'Dùng cho nhà ở, văn phòng.',
      features: 'Đo chính xác; dễ sử dụng.',
      specifications: 'Phạm vi: 0-100% RH; Độ chính xác: ±3%.',
      reviews: 'Thực hiện tốt công việc, đáng tin cậy.',
      price: "450000" ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/may-do-dien-do-do-am.jpg',
      thumbnail: 'https://example.com/images/thumb/may-do-dien-do-do-am.jpg'
  },
  {
      id: 'DND040',
      name: 'Cảm Biến Nhiệt Độ',
      description: 'Cảm biến đo nhiệt độ chính xác cho hệ thống.',
      descriptionRelation: 'Dùng cho hệ thống điều hòa không khí.',
      features: 'Đo nhiệt độ nhanh chóng; dễ dàng lắp đặt.',
      specifications: 'Phạm vi: -50°C đến 100°C; Độ chính xác: ±1°C.',
      reviews: 'Hiệu quả và bền bỉ.',
      price: "200000" ,
      quantity : 10,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cam-bien-nhiet-do.jpg',
      thumbnail: 'https://example.com/images/thumb/cam-bien-nhiet-do.jpg'
  },
  {
      id: 'DND041',
      name: 'Bộ Nguồn DC',
      description: 'Bộ nguồn DC cung cấp điện cho các thiết bị điện tử.',
      descriptionRelation: 'Thích hợp cho các thiết bị điều khiển.',
      features: 'Điều chỉnh điện áp; nhỏ gọn và di động.',
      specifications: 'Điện áp đầu ra: 5V-12V; Dòng tối đa: 2A.',
      reviews: 'Đáp ứng tốt nhu cầu sử dụng.',
      price: "350000" ,
      quantity : 5 ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/bo-nguon-dc.jpg',
      thumbnail: 'https://example.com/images/thumb/bo-nguon-dc.jpg'
  },
  {
      id: 'DND042',
      name: 'Cáp Điện PVC',
      description: 'Cáp điện PVC dùng cho các hệ thống điện dân dụng.',
      descriptionRelation: 'Thích hợp cho lắp đặt trong nhà.',
      features: 'Chịu nhiệt tốt; bền bỉ với thời gian.',
      specifications: 'Đường kính: 2.5mm; Chiều dài: 100m.',
      reviews: 'Đảm bảo an toàn cho hệ thống điện.',
      price: "250000",
      quantity : 20 ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cap-dien-pvc.jpg',
      thumbnail: 'https://example.com/images/thumb/cap-dien-pvc.jpg'
  },
  {
      id: 'DND043',
      name: 'Tấm Pin Năng Lượng Mặt Trời 300W',
      description: 'Tấm pin năng lượng mặt trời hiệu suất cao.',
      descriptionRelation: 'Phù hợp cho hệ thống điện mặt trời.',
      features: 'Chuyển đổi năng lượng hiệu quả; bền bỉ với thời gian.',
      specifications: 'Công suất: 300W; Kích thước: 1.65m x 1m.',
      reviews: 'Giải pháp năng lượng xanh và tiết kiệm.',
      price: "8000000" ,
      quantity : 10 ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/tam-pin-nang-luong.jpg',
      thumbnail: 'https://example.com/images/thumb/tam-pin-nang-luong.jpg'
  },
  {
      id: 'DND044',
      name: 'Khởi Động Từ',
      description: 'Khởi động từ dùng cho hệ thống điện công nghiệp.',
      descriptionRelation: 'Phù hợp cho động cơ điện.',
      features: 'Chịu tải cao; an toàn và ổn định.',
      specifications: 'Điện áp: 220V; Công suất tối đa: 15kW.',
      reviews: 'Giải pháp khởi động hiệu quả cho động cơ.',
      price: "1500000" ,
      quantity : 5 ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/khoi-dong-tu.jpg',
      thumbnail: 'https://example.com/images/thumb/khoi-dong-tu.jpg'
  },
  {
      id: 'DND045',
      name: 'Cảm Biến Ánh Sáng',
      description: 'Cảm biến ánh sáng tự động bật tắt đèn.',
      descriptionRelation: 'Thích hợp cho lắp đặt trong không gian mở.',
      features: 'Tiết kiệm điện; độ nhạy cao.',
      specifications: 'Phạm vi: 0-10000 lux; Điện áp: 220V.',
      reviews: 'Giải pháp thông minh cho việc chiếu sáng.',
      price: "300000" ,
      quantity : 15 ,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cam-bien-anh-sang.jpg',
      thumbnail: 'https://example.com/images/thumb/cam-bien-anh-sang.jpg'
  },
  {
      id: 'DND046',
      name: 'Bảng Mạch Điều Khiển',
      description: 'Bảng mạch điều khiển cho thiết bị điện tử.',
      descriptionRelation: 'Dùng cho các ứng dụng điện tử.',
      features: 'Kết nối dễ dàng; tiết kiệm năng lượng.',
      specifications: 'Điện áp: 5V; Dòng tối đa: 2A.',
      reviews: 'Thực hiện tốt công việc điều khiển.',
      price: "400000" ,
      quantity : 8 ,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/trambienapdl.jpg',
      thumbnail: 'assets/trambienapdl.jpg'
  },
  {
      id: 'DND047',
      name: 'Đèn LED Chiếu Sáng Ngoài Trời',
      description: 'Đèn LED chiếu sáng cho khu vực ngoài trời.',
      descriptionRelation: 'Thích hợp cho sân vườn, ban công.',
      features: 'Chống nước; tiết kiệm điện.',
      specifications: 'Công suất: 20W; Điện áp: 220V.',
      reviews: 'Chiếu sáng đẹp và an toàn.',
      price: "600000",
      quantity : 12 ,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/trambienapdl.jpg',
      thumbnail: 'assets/trambienapdl.jpg'
  },
  {
      id: 'DND048',
      name: 'Ổ Cắm Điện Đa Năng',
      description: 'Ổ cắm điện đa năng cho mọi thiết bị.',
      descriptionRelation: 'Thích hợp cho gia đình và văn phòng.',
      features: 'Bảo vệ quá tải; thiết kế nhỏ gọn.',
      specifications: 'Số cổng: 4; Điện áp: 220V.',
      reviews: 'Dễ sử dụng và tiện lợi.',
      price: "150000" ,
      quantity: 12,
      status: true,
      availability: 'Còn hàng',
      image: 'assets/ocamdiendanang.jpg',
      thumbnail: 'assets/ocamdiendanang.jpg'
  },
  {
      id: 'DND049',
      name: 'Quạt Cây Thông Minh',
      description: 'Quạt cây thông minh với điều khiển từ xa.',
      descriptionRelation: 'Thích hợp cho không gian sống và làm việc.',
      features: 'Tiết kiệm điện; nhiều chế độ gió.',
      specifications: 'Công suất: 55W; Kích thước: 1.5m.',
      reviews: 'Hoạt động êm ái, tiện lợi.',
      price: "1200000",
      quantity: 8,
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/quat-cay-thong-minh.jpg',
      thumbnail: 'https://example.com/images/thumb/quat-cay-thong-minh.jpg'
  },
  {
      id: 'DND050',
      name: 'Máy Hút Bụi Công Nghiệp',
      description: 'Máy hút bụi công nghiệp hiệu suất cao.',
      descriptionRelation: 'Thích hợp cho nhà xưởng và công trường.',
      features: 'Công suất mạnh; bộ lọc HEPA.',
      specifications: 'Công suất: 2000W; Thể tích bình chứa: 30L.',
      reviews: 'Giải pháp hút bụi hiệu quả.',
      price: "8500000" ,
      quantity: 5,
      status: false,
      availability: 'Còn hàng',
      image: 'assets/mayhutbuicongnghiep.jpg',
      thumbnail: 'assets/mayhutbuicongnghiep.jpg'
  }
]

export const projectsData = [
  {
    title: "Dự án Nhà máy điện Nhơn Trạch 3 và 4",
    image: "assets/nhamaynhontrach.png",
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
    title: "Công trình cầu vượt Thủ Thiêm",
    image: "assets/causaigon.jpg",
    description: 'Cầu Thủ Thiêm là một cây cầu bắc qua sông Sài Gòn, nối liền quận Bình Thạnh và thành phố Thủ Đức, Thành phố Hồ Chí Minh. Cầu có 6 làn xe, nối Khu đô thị mới Thủ Thiêm và trung tâm hiện hữu của thành phố và được thông xe vào năm 2005.[a] Tổng kinh phí xây dựng cầu lên đến 1.099,6 tỷ đồng. Tổng thầu là Tổng công ty xây dựng số 1 thuộc Bộ Xây dựng. Cầu Thủ Thiêm dài 1.250 m, phần cầu chính gồm 5 nhịp, 6 làn xe; phần cầu dẫn phía Bình Thạnh gồm bốn nhánh, mỗi nhánh 2 làn xe; cầu dẫn phía thành phố Thủ Đức dài 160 m, rộng tương đương 6 làn xe. Nút giao phía quận Bình Thạnh gồm một hầm chui trực thông dài 460 m trên đường Nguyễn Hữu Cảnh, rộng 4 làn xe. Đường dẫn phía thành phố Thủ Đức dài 280 m, mặt cắt ngang 47 m. Đường gom có tổng chiều dài 1.460 m, phía quận Bình Thạnh rộng 10,5 m, phía thành phố Thủ Đức rộng 9,5 m. Điểm đầu dự án là giao giữa đường Ngô Tất Tố với đường Nguyễn Hữu Cảnh, phường 22, Bình Thạnh. Điểm cuối dự án kết nối với đường Lương Định Của (thành phố Thủ Đức); tuyến chạy theo tim đường Ngô Tất Tố hiện hữu vượt sông Sài Gòn. Cầu Thủ Thiêm được hợp long vào lúc 8 giờ 15 phút sáng ngày 29 tháng 11 năm 2007. Ông Lê Hoàng Quân - Chủ tịch Ủy ban Nhân dân Thành phố Hồ Chí Minh - đã cho mẻ bê tông đầu tiên vào vị trí hợp long của cầu.',
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
    title: "Dự án đường cao tốc Bắc - Nam",
    image: "assets/caotocBN.png",
    description: 'Dự án đường cao tốc Bắc - Nam là công trình trọng điểm quốc gia với chiều dài hơn 2.100km, đi qua 20 tỉnh, thành phố từ Bắc vào Nam. Tổng mức đầu tư khoảng 12 tỷ USD, khi hoàn thành sẽ rút ngắn thời gian di chuyển giữa các vùng và phát triển kinh tế - xã hội.',
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
    title: "Nhà máy nước Củ Chi",
    image: "assets/nhamaybiacuchi.png",
    description: 'Dự án đường cao tốc Bắc - Nam là công trình trọng điểm quốc gia với chiều dài hơn 2.100km, đi qua 20 tỉnh, thành phố từ Bắc vào Nam. Tổng mức đầu tư khoảng 12 tỷ USD, khi hoàn thành sẽ rút ngắn thời gian di chuyển giữa các vùng và phát triển kinh tế - xã hội.',
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

]

export const ImageProject = [
  { id: 1, url: 'assets/projectimage.png' },
  { id: 2, url: 'assets/projectimage.png' },
  { id: 3, url: 'assets/projectimage.png' },
  { id: 4, url: 'assets/projectimage.png' },
  { id: 5, url: 'assets/projectimage.png' },
  { id: 6, url: 'assets/projectimage.png' }
]

export const serviceData = [
  {
    title: 'Dịch vụ lắp đặt điện',
    description: 'Cung cấp và lắp đặt các thiết bị điện cho nhà ở và công nghiệp.',
    image:'assets/suachapdien-1536x1024.png',
    thumbnail:'assets/suachapdien-1536x1024.png',
    features: [
      'Thiết bị chất lượng cao',
      'Đội ngũ kỹ thuật chuyên nghiệp',
      'Đáp ứng nhanh chóng yêu cầu của khách hàng'
    ],
    process: [
      'Tiếp nhận yêu cầu của khách hàng',
      'Khảo sát thực tế và lên phương án',
      'Thực hiện lắp đặt',
      'Bàn giao và hướng dẫn sử dụng'
    ]
  },
  {
    title: 'Dịch vụ bảo trì hệ thống',
    description: 'Bảo trì định kỳ và sửa chữa các thiết bị trong hệ thống điện.',
    image:'/assets/baotrihethong.jpg',
    thumbnail:'assets/suachapdien-1536x1024.png',
    features: [
      'Hỗ trợ 24/7',
      'Kiểm tra định kỳ miễn phí',
      'Sửa chữa nhanh chóng'
    ],
    process: [
      'Tiếp nhận thông tin yêu cầu bảo trì',
      'Kiểm tra và chẩn đoán tình trạng',
      'Thực hiện sửa chữa hoặc thay thế',
      'Kiểm tra lại và bàn giao hệ thống'
    ]
  },
  {
    title: 'Dịch vụ kiểm tra an toàn điện',
    description: 'Kiểm tra an toàn điện định kỳ cho các công trình dân dụng và công nghiệp.',
    image: '/assets/kiemtraantoandien.jpg',
    thumbnail:'assets/suachapdien-1536x1024.png',
    features: [
      'Đánh giá toàn diện tình trạng hệ thống điện',
      'Tư vấn cải thiện và nâng cấp hệ thống',
      'Đội ngũ chuyên gia nhiều kinh nghiệm'
    ],
    process: [
      'Tiếp nhận yêu cầu kiểm tra từ khách hàng',
      'Tiến hành kiểm tra thực tế hệ thống',
      'Báo cáo kết quả kiểm tra và đề xuất giải pháp',
      'Thực hiện các biện pháp khắc phục (nếu cần)'
    ]
  },
  {
    title: 'Dịch vụ sửa chữa sự cố điện',
    description: 'Khắc phục các sự cố liên quan đến hệ thống điện trong thời gian ngắn nhất.',
    image: '/assets/suachuasuco.jpg',
    thumbnail:'assets/suachapdien-1536x1024.png',
    features: [
      'Phục vụ nhanh chóng 24/7',
      'Sử dụng thiết bị và linh kiện chính hãng',
      'Giá cả hợp lý, minh bạch'
    ],
    process: [
      'Tiếp nhận thông tin sự cố',
      'Khảo sát và chẩn đoán nguyên nhân',
      'Thực hiện sửa chữa và kiểm tra lại hệ thống',
      'Bàn giao và hướng dẫn khách hàng sử dụng an toàn'
    ]
  },
  {
    title: 'Dịch vụ sửa chữa sự cố điện',
    description: 'Khắc phục các sự cố liên quan đến hệ thống điện trong thời gian ngắn nhất.',
    image: '/assets/suachuasuco.jpg',
    thumbnail:'assets/suachapdien-1536x1024.png',
    features: [
      'Phục vụ nhanh chóng 24/7',
      'Sử dụng thiết bị và linh kiện chính hãng',
      'Giá cả hợp lý, minh bạch'
    ],
    process: [
      'Tiếp nhận thông tin sự cố',
      'Khảo sát và chẩn đoán nguyên nhân',
      'Thực hiện sửa chữa và kiểm tra lại hệ thống',
      'Bàn giao và hướng dẫn khách hàng sử dụng an toàn'
    ]
  },
  {
    title: 'Dịch vụ sửa chữa sự cố điện',
    description: 'Khắc phục các sự cố liên quan đến hệ thống điện trong thời gian ngắn nhất.',
    image: '/assets/suachuasuco.jpg',
    thumbnail:'assets/suachapdien-1536x1024.png',
    features: [
      'Phục vụ nhanh chóng 24/7',
      'Sử dụng thiết bị và linh kiện chính hãng',
      'Giá cả hợp lý, minh bạch'
    ],
    process: [
      'Tiếp nhận thông tin sự cố',
      'Khảo sát và chẩn đoán nguyên nhân',
      'Thực hiện sửa chữa và kiểm tra lại hệ thống',
      'Bàn giao và hướng dẫn khách hàng sử dụng an toàn'
    ]
  },

]

export const newsMainData = [
  {
    titleMain : 'Tin tuc chinh thuc trang chu',
    imgSrcMain : 'assets/tintuc.png',

    otherNews:
      {
        titleOther:'',
      }
  }
]

export const newsDetailData = [
  {
    titleOther: '',
    imgSrcOther: '',
    descriptionOther: ''
  }
]

export const newsData =[
  {
    id: 1,
    title: "Giá xăng dầu tăng cao, ảnh hưởng đến đời sống người dân",
    imgSrc: "assets/xangdau.jpg",
    date: "2024-11-14",
    content: "(HBĐT) - Từ 15h ngày 10/11, giá xăng dầu trong nước được điều chỉnh tăng, dao động từ 550 - 660 đồng/lít so với kỳ tăng trước. Đây là mức tăng cao, cụ thể như: Xăng RON 95 tăng 660 đồng/lít, xăng E5 RON 92 tăng 550 đồng/lít. Tính từ đầu năm đến nay, giá xăng trong nước đã tăng 5 lần liên tiếp. Giá xăng dầu tăng trong bối cảnh ảnh hưởng dịch Covid-19 tác động mạnh, trực tiếp đến thu nhập, đời sống người dân và hoạt động của doanh nghiệp, đặc biệt là doanh nghiệp vận tải.",
    mainImage: "assets/xangdau.jpg",
    secondaryContents:'Từ 21/4 đến nay, giá xăng đã tăng lần thứ 7 liên tiếp. Nếu tính từ đầu năm đến nay, thì giá xăng đã có 16 kỳ điều chỉnh với 13 lần tăng giá, 3 lần giảm. Cư dân mạng ví von, giá xăng khi tăng thì như cầu thang máy, còn khi giảm thì như đi thang bộ. Phải nói rằng, sau những pha thiết lập đỉnh giá xăng dầu, đời sống của người dân cũng bị ảnh hưởng rất nhiều. Xăng dầu vốn là chi phí đầu vào của hầu hết ngành sản xuất hàng hoá và dịch vụ, nên khi xăng tăng có tác động rất lớn đến mặt bằng giá cả thị trường. Giá cả các loại thực phẩm đã leo thang, tăng từ 5-10% do giá nhập, chi phí vận chuyển, đánh bắt thuỷ hải sản tăng cao.',
    secondaryImages: [
      "assets/xangdau.jpg",
      "https://example.com/images/secondary-image2.jpg"
    ],
    relationImg:'https://example.com/images/main-image.jpg',
    type: "main",
    caption : 'Hình ảnh đổ xăng tại cây xăng.'
  },
  {
    id: 2,
    title: "Thị trường bất động sản có dấu hiệu hồi phục",
    imgSrc: "assets/bds.png",
    date: "2024-11-12",
    content: "Đó là nhận định của Ngân hàng Thế giới về thị trường bất động sản Việt Nam trong báo cáo cập nhật tình hình kinh tế Việt Nam công bố ngày 26-8.",
    secondaryContents:'Ngân hàng Thế giới (WB) nhận định nền kinh tế Việt Nam được dự báo tăng trưởng 6,1% trong năm 2024 và tăng tốc lên đến 6,5% trong các năm 2025 - 2026. Theo WB, diễn biến thị trường bất động sản cho thấy dấu hiệu phục hồi và dự báo sẽ xoay chiều vào cuối 2024 và đầu 2025 sau khi giải quyết được tình trạng đóng băng thị trường trái phiếu doanh nghiệp và Luật Đất đai có hiệu lực. Tuy nhận định thị trường bất động sản cho thấy dấu hiệu phục hồi, nhưng WB đánh giá "các nhà đầu tư vẫn thận trọng". WB đánh giá nguồn cung các dự án được cấp phép và số lượng căn hộ mới vẫn gần như đi ngang trong quý 1-2024 so với quý 4-2023 do các vấn đề trong quy trình giải phóng mặt bằng và đền bù đất đai vẫn chưa có chuyển biến.',
    mainImage: "https://example.com/images/main-real-estate.jpg",
    secondaryImages: [
      // "https://example.com/images/secondary-real-estate1.jpg",
      // "https://example.com/images/secondary-real-estate2.jpg"
    ],
    relationImg:'assets/bieudotil.png',
    type: "feature",
    caption: 'Hình ảnh tham quan mô hình bất động sản.'
  },
  {
    id: 3,
    title: "Công nghệ AI phát triển mạnh mẽ và ứng dụng vào đời sống",
    imgSrc: "assets/ai4.png",
    date: "2024-11-10",
    content: "Mặc dù mức độ ứng dụng trí tuệ nhân tạo (AI) tại Việt Nam còn chưa sánh ngang với các quốc gia hàng đầu trong khu vực châu Á, nhưng nước ta đang dần nắm bắt tiềm năng và cố gắng phát triển ngành công nghiệp AI để đóng góp vào sự phát triển kinh tế và xã hội của đất nước.",
    mainImage: "https://example.com/images/main-ai.jpg",
    secondaryContents:'Nổi bật nhất là lĩnh vực ngân hàng, với việc ứng dụng AI, các ngân hàng đang ngày càng đổi mới mô hình kinh doanh và nâng cao trải nghiệm khách hàng.  “Các ngân hàng đang sử dụng trợ lý AI như chatbot để đưa ra lời khuyên tài chính được cá nhân hóa và xử lý ngôn ngữ tự nhiên nhằm cung cấp dịch vụ khách hàng tự phục vụ. Ngoài ra, ngân hàng cũng sử dụng định danh điện tử (eKYC) để xác thực, hay sử dụng máy học (machine learning) để xây dựng các mô hình dự báo chính xác hơn, nhanh chóng hơn”, ông Vũ Anh Tú nói.Không chỉ trong lĩnh vực ngân hàng, ở lĩnh vực y tế, giai đoạn Covid-19 vừa qua, các trợ lý AI (voice bot) đã thực hiện hàng triệu cuộc gọi, hỗ trợ ngành y kiểm soát, sàng lọc và truy vết các ca nhiễm. Trong giáo dục, thương mại, AI được ứng dụng để đa dạng hóa cách truyền tải nội dung, cá nhân hóa trải nghiệm mua sắm...',
    secondaryImages: [
      // "https://example.com/images/secondary-ai1.jpg",
      // "https://example.com/images/secondary-ai2.jpg"
    ],
    relationImg:'assets/ai_relationimg.png',
    type: "feature",
    caption: 'Hình ảnh giới thiệu về AI. '

  },
  {
    id: 4,
    title: "Giá vàng tăng mạnh do biến động kinh tế toàn cầu",
    imgSrc: "assets/giavang_imgSRC.png",
    date: "2024-11-08",
    content: "Giá vàng giao ngay bắt đầu tuần giao dịch ở 2.570 USD/ounce, không thay đổi nhiều so với giá đóng cửa tuần trước. Sau đó, mặt hàng này chủ yếu đi ngang, 'nín thở' chờ đợi quyết định cuối cùng của Cục Dự trữ Liên bang Mỹ (Fed), rằng sẽ cắt giảm 0,25% hay là mức cắt giảm mạnh 0,5%.",
    mainImage: "https://example.com/images/main-gold.jpg",
    secondaryContents:'Báo cáo xu hướng nhu cầu vàng quý II/2024 của Hội đồng Vàng thế giới cho thấy nhu cầu đối với vàng tăng kỷ lục mặc dù giá rất cao. Các chuyên gia cho rằng, giá vàng bất ngờ quay đầu tăng, do nhà đầu tư lạc quan hơn vào chính sách tiền tệ của Fed trong thời gian tới. Quyết định cắt giảm lãi suất của Fed là khởi đầu của một chu kỳ nới lỏng chính sách tiền tệ rộng hơn của Ngân hàng Trung ương Mỹ. Động thái của Fed mở ra kỳ vọng sẽ có thêm 1-2 lần cắt giảm lãi suất nữa trong năm nay. Ông Robert Minter, Giám đốc Chiến lược đầu tư của Công ty Đầu tư Abrdn, cho hay, từ trước đến nay, các chu kỳ cắt giảm lãi suất thường thúc đẩy nhu cầu cao hơn của các nhà đầu tư vào vàng.',
    secondaryImages: [
      // "https://example.com/images/secondary-gold1.jpg",
      // "https://example.com/images/secondary-gold2.jpg"
    ],
    relationImg: "assets/vang_relation.png",
    type: "feature",
    caption: ''
  },
  {
    id: 5,
    title: "Công nghệ 5G và những ứng dụng đột phá trong đời sống",
    imgSrc: "assets/5g.png",
    date: "2024-11-06",
    content: "Với 30 năm kinh nghiệm trong ngành viễn thông, tôi đã chứng kiến sự chuyển đổi mạnh mẽ của ngành công nghệ di động qua từng thế hệ. Từ khi mạng 2G xuất hiện, mở ra kỷ nguyên truyền tải âm thanh cơ bản, đến thế hệ 3G và 4G, giúp truyền tải dữ liệu nhanh chóng, ngành viễn thông đã góp phần thay đổi cách chúng ta sống và làm việc. Tuy nhiên, 5G không chỉ đơn thuần là sự tiếp nối mà là một bước nhảy vọt về công nghệ, mở ra vô vàn cơ hội cho mọi lĩnh vực.",
    mainImage: "https://example.com/images/main-5g.jpg",
    secondaryContents:'5G đang mở ra vô số cơ hội ứng dụng trong đời sống, và một trong những lĩnh vực hưởng lợi trực tiếp chính là công nghiệp 4.0 và tự động hóa. Với khả năng kết nối và truyền tải dữ liệu cực nhanh, các nhà máy thông minh có thể quản lý toàn bộ dây chuyền sản xuất mà không cần đến sự can thiệp của con người. Các robot và hệ thống cảm biến được kết nối với nhau qua mạng 5G có thể thu thập và phân tích dữ liệu trong thời gian thực, từ đó tối ưu hóa quá trình sản xuất, giảm thiểu lãng phí và gia tăng hiệu suất. Điều này giúp doanh nghiệp tiết kiệm chi phí, đồng thời cải thiện chất lượng sản phẩm.',

    secondaryImages: [
      // "https://example.com/images/secondary-5g1.jpg",
      // "https://example.com/images/secondary-5g2.jpg"
    ],
    relationImg: "assets/5g_relation.png",
    type: "relation"

  },
  {
    id: 6,
    title: "Ngành nông nghiệp chuyển mình với các công nghệ mới",
    imgSrc: "assets/nganhnongnghiep.ppng.jpeg",
    date: "2024-11-04",
    content: "    Nền Nông nghiệp từ xưa đến nay vẫn luôn giữ vai trò quan trọng trong nền kinh tế Việt Nam. Cùng với sự bùng nổ của cuộc cách mạng công nghiệp 4.0, ngành Nông nghiệp nước nhà đang chuyển mình mạnh mẽ, được quan tâm, đầu tư, gắn với các bước tiến đột phá của khoa học và công nghệ. Điều này đã tạo ra nhu cầu lớn về nguồn nhân lực chất lượng cao trong lĩnh vực Công nghệ Nông nghiệp. Nếu bạn yêu thích công nghệ, muốn vận dụng nó để chung tay phát triển nền nông nghiệp của đất nước vươn lên tầm cao mới, vậy còn chần chờ gì mà không tìm hiểu ngay ngành học Công nghệ nông nghiệp để rộng mở cánh cửa tương lai?",
    mainImage: "https://example.com/images/main-agriculture.jpg",
    secondaryContents:'  Ưu điểm vượt trội của chương trình đào tạo kỹ sư ngành Công nghệ Nông nghiệp tại Trường Đại học Công nghệ Dựa trên thế mạnh về nền tảng công nghệ của trường, sinh viên chương trình đào tạo kỹ sư Công nghệ Nông nghiệp được trang bị các kiến thức lý thuyết và kỹ năng thực hành liên ngành về công nghệ như công nghệ thông tin, điều khiển tự động, công nghệ sinh học, công nghệ nano bên cạnh các kiến thức về nông nghiệp. Ngoài ra, trong chương trình còn có khối kiến thức về quản trị sản xuất, logistics, marketing và khởi nghiệp đáp ứng nhu cầu xã hội của các kỹ sư công nghệ nông nghiệp thời đại mới.Chương trình đào tạo có 2 định hướng chuyên sâu: Nông nghiệp kỹ thuật số và Công nghệ sinh học nông nghiệp. Sinh viên được đào tạo theo nguyên tắc “học bằng làm” và “đổi mới sáng tạo” với các phương pháp học tập chủ động, ứng dụng công nghệ thông tin dưới sự hướng dẫn đội ngũ giảng viên giỏi về công nghệ, năng động, giàu nhiệt huyết. Sinh viên được thực hành tại các phòng thí nghiệm công nghệ tiên tiến, trung tâm thực nghiệm Công nghệ nông nghiệp và các Viện nghiên cứu đối tác để tận dụng thế mạnh của các bên liên quan.',
    secondaryImages: [
      // "https://example.com/images/secondary-agriculture1.jpg",
      // "https://example.com/images/secondary-agriculture2.jpg"
    ],
    relationImg: "assets/Biểu-đồ-ngành-CNNN.jpg",
    type: "relation"

  },
]
