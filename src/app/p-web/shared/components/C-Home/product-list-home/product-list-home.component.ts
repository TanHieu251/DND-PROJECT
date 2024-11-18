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
  products = productData.slice(0,4);

  viewDetailProduct(productName: string){
    this.router.navigate(['/product', productName])
    window.scrollTo({top: 0, behavior:'smooth'});
  }
}
