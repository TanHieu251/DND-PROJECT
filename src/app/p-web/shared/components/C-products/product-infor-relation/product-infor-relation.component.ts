import { Component } from '@angular/core';

@Component({
  selector: 'app-product-infor-relation',
  templateUrl: './product-infor-relation.component.html',
  styleUrl: './product-infor-relation.component.scss'
})
export class ProductInforRelationComponent {
  selectedTab = 0;
  selectTab(index: number) {
    this.selectedTab = index;
  }

  tabs = [
    {
      title: 'Mô tả sản phẩm',
      content: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch tới đa 120kA, 6300A tại điện áp AC500V, được kiểm tra chất lượng bởi KEMA theo tiêu chuẩn IEC60947-2, OCR Trip Relay với nhiều chức năng: Bảo vệ, đo lường, phân tích và giám sát hệ thống..'
    },
    {
      title: 'Tính năng sản phẩm',
      content: 'Tích hợp khả năng bảo vệ quá dòng, đo lường điện áp, dòng điện, và phân tích sự cố. Hỗ trợ kiểm tra và quản lý hệ thống điện thông qua OCR Trip Relay với độ chính xác cao.'
    },
    {
      title: 'Thông số kỹ thuật',
      content: 'Dòng điện định mức: 6300A, Điện áp hoạt động: 500V AC, Dòng cắt: 120kA, Tiêu chuẩn: IEC60947-2, Relay: OCR Trip Relay.'
    },
    {
      title: 'Đánh giá sản phẩm',
      content: 'Sản phẩm có hiệu suất ổn định, bền bỉ và đáp ứng tốt các yêu cầu về bảo vệ và giám sát hệ thống điện. Được đánh giá cao bởi nhiều kỹ sư điện với khả năng làm việc tốt trong môi trường công nghiệp khắc nghiệt.'
    }
  ];
}
