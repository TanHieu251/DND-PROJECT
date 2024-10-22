import { Component } from '@angular/core';
import { productData } from '../../../../../data/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-home',
  templateUrl: './product-list-home.component.html',
  styleUrl: './product-list-home.component.scss',
})
export class ProductListHomeComponent {
  constructor(private router: Router){}
  // products = productData
  products = [
    {
      id: 'DND001',
      name: 'Cầu Dao Tự Động 1 Pha',
      description: 'Cầu dao tự động dùng để bảo vệ các thiết bị điện trong hệ thống điện hạ thế.',
      descriptionRelation: 'Phù hợp cho các công trình dân dụng và công nghiệp.',
      features: 'Bảo vệ quá tải và ngắn mạch; thiết kế nhỏ gọn; dễ dàng lắp đặt.',
      specifications: 'Dòng định mức: 16A; Điện áp: 220V; Kích thước: 80x45x60mm.',
      reviews: 'Sản phẩm chất lượng, bảo vệ an toàn cho hệ thống điện.',
      price: '150,000 VND',
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cau-dao-tu-dong.jpg',
      thumbnail: 'https://example.com/images/thumb/cau-dao-tu-dong.jpg'
    },
    {
      id: 'DND002',
      name: 'Bộ Truyền Tải Điện 3 Pha',
      description: 'Thiết bị truyền tải điện 3 pha giúp phân phối điện ổn định.',
      descriptionRelation: 'Sử dụng cho các nhà máy và trạm biến áp.',
      features: 'Khả năng truyền tải cao; thiết kế bền bỉ.',
      specifications: 'Công suất: 500kVA; Điện áp: 10kV; Kích thước: 120x80x200cm.',
      reviews: 'Hoạt động ổn định và độ bền cao.',
      price: '5,000,000 VND',
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/bo-truyen-tai-dien.jpg',
      thumbnail: 'https://example.com/images/thumb/bo-truyen-tai-dien.jpg'
    },
    {
      id: 'DND003',
      name: 'Công Tắc Cảm Ứng Hồng Ngoại',
      description: 'Công tắc cảm ứng tự động bật tắt đèn khi có người.',
      descriptionRelation: 'Phù hợp cho hành lang, nhà vệ sinh.',
      features: 'Phạm vi cảm biến rộng; tiết kiệm năng lượng.',
      specifications: 'Góc cảm biến: 120°; Khoảng cách: 8m; Điện áp: 220V.',
      reviews: 'Cảm ứng nhạy, tiết kiệm điện.',
      price: '350,000 VND',
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/cong-tac-cam-ung.jpg',
      thumbnail: 'https://example.com/images/thumb/cong-tac-cam-ung.jpg'
    },
    {
      id: 'DND004',
      name: 'Đồng Hồ Đo Công Suất Điện Tử',
      description: 'Dùng để đo lường công suất tiêu thụ của các thiết bị điện.',
      descriptionRelation: 'Sử dụng trong các hệ thống giám sát năng lượng.',
      features: 'Hiển thị chính xác; thiết kế nhỏ gọn.',
      specifications: 'Dải đo: 0-9999W; Độ chính xác: ±1%.',
      reviews: 'Đo lường chính xác, dễ sử dụng.',
      price: '900,000 VND',
      status: true,
      availability: 'Còn hàng',
      image: 'https://example.com/images/dong-ho-do-cong-suat.jpg',
      thumbnail: 'https://example.com/images/thumb/dong-ho-do-cong-suat.jpg'
    },
  ];

  // viewDetailProduct(productName: string){
  //   this.router.navigate(['/product', productName])
  //   window.scrollTo({top: 0, behavior:'smooth'});
  // }
}
