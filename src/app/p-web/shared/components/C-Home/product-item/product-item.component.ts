import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input() productTitle: string='Sản phẩm'
  @Input() buttonText: string = 'Xem tất cả'

  products = [
    {
      name: 'LS ACB Metasol AS',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      status: 'available'
    },
    {
      name: 'LS ACB Metasol AS',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      availability: 'Hết hàng',
      image: 'assets/image 5.png',
      status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol AS',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      status: 'available'
    },
    {
      name: 'LS ACB Metasol AS',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      status: 'available'
    },
    {
      name: 'LS ACB Metasol AS',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      status: 'available'
    },
    {
      name: 'LS ACB Metasol AS',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      availability: 'Hết hàng',
      image: 'assets/image 5.png',
      status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol AS',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      status: 'available'
    },
    {
      name: 'LS ACB Metasol AS',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      availability: 'Còn hàng',
      image: 'assets/image 5.png',
      status: 'available'
    }
  ];

}
