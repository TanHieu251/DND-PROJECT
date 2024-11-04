import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-relation',
  templateUrl: './product-relation.component.html',
  styleUrl: './product-relation.component.scss'
})
export class ProductRelationComponent {
  @Input() productTitle: string='Sản phẩm liên quan'
  @Input() buttonText: string = 'Xem tất cả'

  products = [
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
    // {
    //   id: 'DND005',
    //   name: 'Tấm Pin Năng Lượng Mặt Trời 200W',
    //   description: 'Tấm pin hiệu suất cao, chuyển đổi ánh sáng thành điện năng.',
    //   descriptionRelation: 'Phù hợp cho hệ thống điện mặt trời.',
    //   features: 'Hiệu suất cao; chống nước và bụi.',
    //   specifications: 'Công suất: 200W; Kích thước: 1640x992x35mm.',
    //   reviews: 'Tạo ra nhiều điện năng ngay cả khi ánh sáng yếu.',
    //   price: "4500000" ,
    //   status: true,
    //   availability: 'Còn hàng',
    //   image: 'assets/pinnlmt.jpg',
    //   thumbnail: 'assets/pinnlmt.jpg',
    //   quantity:'10'

    // },
  ];
}
