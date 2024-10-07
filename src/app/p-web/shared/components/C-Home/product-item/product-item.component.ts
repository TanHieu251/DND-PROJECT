import { Component, Input, OnInit } from '@angular/core';
import { productData } from '../../../../../data/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  @Input() productTitle: string='Sản phẩm'
  @Input() buttonText: string = 'Xem tất cả'

  products = [
    {
      // id:'001',
      name: 'Thiết bị điện ABC 1',
      description: 'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch...',
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
    },
    {
      name: 'Thiết bị điện GHI 3',
      description: 'Thiết bị GHI sử dụng công nghệ hiện đại, đảm bảo an toàn tối đa...',
      price: '80,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
      availability: 'Còn hàng',

    },
    {
      name: 'Thiết bị điện JKL 4',
      description: 'JLK với thiết kế nhỏ gọn, dễ dàng lắp đặt trong mọi không gian...',
      price: '90,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
      availability: 'Còn hàng',

    },
    {
      name: 'Thiết bị điện MNO 5',
      description: 'Thiết bị MNO nổi bật với khả năng chịu nhiệt và bền bỉ...',
      price: '100,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
      availability: 'Còn hàng',

    },
    {
      name: 'Thiết bị điện PQR 6',
      description: 'Thiết bị PQR đem lại khả năng ngắt mạch tức thời, giảm rủi ro cháy nổ...',
      price: '110,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
      availability: 'Còn hàng',

    },
    {
      name: 'Thiết bị điện STU 7',
      description: 'STU là giải pháp tối ưu cho hệ thống điện công nghiệp...',
      price: '120,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
      availability: 'Còn hàng',

    },
    {
      name: 'Thiết bị điện VWX 8',
      description: 'Thiết bị điện VWX với vật liệu chất lượng cao, đảm bảo độ bền lâu dài...',
      price: '130,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
      availability: 'Còn hàng',

    },
    {
      name: 'Thiết bị điện YZA 9',
      description: 'Thiết bị YZA có thiết kế chắc chắn, khả năng chống chịu tác động bên ngoài...',
      price: '140,000 VND',
      status: 'Còn hàng',
      image: 'assets/image 5.png',
      availability: 'Còn hàng',

    },
    {
      name: 'Thiết bị điện BCD 10',
      description: 'Thiết bị BCD đạt tiêu chuẩn quốc tế về an toàn điện...',
      price: '150,000 VND',
      status: 'Hết hàng',
      image: 'assets/image 5.png',
      availability: 'Còn hàng',

    },
  ];

}
