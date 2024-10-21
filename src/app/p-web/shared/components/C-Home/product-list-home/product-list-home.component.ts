import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-home',
  templateUrl: './product-list-home.component.html',
  styleUrl: './product-list-home.component.scss',
})
export class ProductListHomeComponent {
  products = [
    {
      name: 'Thiết bị điện ABC 1',
      description:
        'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch cắt mạchcắt mạchcắt mạchcắt mạchcắt mạchcắt mạch ',
      price: '60,000 VND',
      status: false,
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      thumbnail: 'assets/image 5.png',
      stockQuantity: 0,
    },
    {
      name: 'Thiết bị điện ABC 1',
      description:
        'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch cắt mạchcắt mạchcắt mạchcắt mạchcắt mạchcắt mạch ',
      price: '60,000 VND',
      status: false,
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      thumbnail: 'assets/image 5.png',
      stockQuantity: 5,
    },
    {
      name: 'Thiết bị điện ABC 1',
      description:
        'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch cắt mạchcắt mạchcắt mạchcắt mạchcắt mạchcắt mạch ',
      price: '60,000 VND',
      status: false,
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      thumbnail: 'assets/image 5.png',
      stockQuantity: 5,
    },
    {
      name: 'Thiết bị điện ABC 1',
      description:
        'Thiết bị điện ABC mang lại hiệu suất tối ưu trong việc cắt mạch cắt mạchcắt mạchcắt mạchcắt mạchcắt mạchcắt mạch ',
      price: '60,000 VND',
      status: false,
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      thumbnail: 'assets/image 5.png',
      stockQuantity: 5,
    },
  ];
}
