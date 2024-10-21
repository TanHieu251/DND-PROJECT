import { Component, Input, OnInit } from '@angular/core';
import { productData } from '../../../../../data/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  @Input() productTitle: string = 'Sản phẩm';
  @Input() buttonText: string = 'Xem tất cả';
  @Input() products: any[] = [];

  viewDetialProduct(productName: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
