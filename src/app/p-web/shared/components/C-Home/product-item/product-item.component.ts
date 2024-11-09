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

  @Input() productTitle: string = 'Sản phẩm';
  @Input() buttonText: string = 'Xem tất cả';
  @Input() products: any[] = [];
  status: boolean = true;
  currentProjectIndex = 0;
  product = productData
  isResponsive = window.innerWidth <=780;

  viewDetailProduct(productName: string){
    this.router.navigate(['/product', productName])
    window.scrollTo({top: 0, behavior:'smooth'});
  }


  prevSlide(){
    this.currentProjectIndex = (this.currentProjectIndex + 1 - this.products.length)
       % this.products.length;
  }
  nextSlide(){
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.products.length;
  }
  get visibleProducts(){

    if(this.isResponsive){
      return[
        this.products[this.currentProjectIndex],
        this.products[(this.currentProjectIndex + 1) % this.products.length]
      ]
    }
    return this.products;
  }

}
