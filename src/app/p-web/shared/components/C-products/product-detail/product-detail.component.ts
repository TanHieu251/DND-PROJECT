import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { productData } from '../../../../../data/product';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:any;
  successMessage: string = '';

  constructor(private activatedRoute: ActivatedRoute, private cartService: ServiceService){}

  ngOnInit() {
    let productName = this.activatedRoute.snapshot.paramMap.get('name');
    if(productName){
      this.product = this.products.find(p => p.name === productName);
    }
    // console.warn(productName);
  }
  products = productData.map( dtp =>({
    name: dtp.name,
    description: dtp.description,
    price: dtp.price,
    status: dtp.status ,
    image: dtp.image,
    thumbnail: dtp.image,
    code: dtp.name.split(' ').join('').toUpperCase() + Math.floor(Math.random() * 1000) + 1  // Generate unique code for each product
  }))

  addToCart() {
    if(this.product) {
      this.cartService.addToCart(this.product);
      this.successMessage = 'san pham da duoc them vao gio hang';
      setTimeout(() => {
        this.successMessage = '';
      }, 2000);
    }
  }
}
