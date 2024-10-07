import { Component } from '@angular/core';
import { productData } from '../../../data/product';

@Component({
  selector: 'app-p004-product-detail',
  templateUrl: './p004-product-detail.component.html',
  styleUrl: './p004-product-detail.component.scss',
})
export class P004ProductDetailComponent {

  // products = productData;
  // selectedProduct: any = this.products[0];  // Default to the first product

  // selectProduct(productName: string) {
  //   this.selectedProduct = this.products.find(p => p.name === productName);
  // }
}
