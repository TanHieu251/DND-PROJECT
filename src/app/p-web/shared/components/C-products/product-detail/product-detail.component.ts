import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  products = [
    {
      id: 1,
      name: 'LS ACB Metasol AS',
      code: 'DND001',
      status: 'Còn hàng',
      price: 50000,
      image: 'assets/image 5.png',
      thumbnail: 'assets/image 5.png'
    },
    // {
    //   id: 2,
    //   name: 'LS ACB Metasol AS',
    //   code: 'DND001',
    //   status: 'Còn hàng',
    //   price: 50000,
    //   image: 'assets/images/transformer-large.jpg',
    //   thumbnail: 'assets/images/transformer-thumb.jpg'
    // },
  ];
}
