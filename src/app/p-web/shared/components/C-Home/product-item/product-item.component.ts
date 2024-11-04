import { Component, Input, OnInit } from '@angular/core';
import { productData } from '../../../../../data/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit {
  constructor (private router: Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  product = productData

  @Input() productTitle: string = 'Sản phẩm';
  @Input() buttonText: string = 'Xem tất cả';
  @Input() products: any[] = [];
  status: boolean = true;

  viewDetailProduct(productName: string){
    this.router.navigate(['/product', productName])
    window.scrollTo({top: 0, behavior:'smooth'});
  }
}
