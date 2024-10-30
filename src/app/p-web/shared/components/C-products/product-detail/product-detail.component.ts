import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { productData } from '../../../../../data/product';
import { ServiceService } from '../../../service/service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:any;
  quantity: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: ServiceService,
    private notification: NzNotificationService,
    private cdRef: ChangeDetectorRef
  ) { }

  //them san pham vao gio hang

  ngOnInit() {
    let productName = this.activatedRoute.snapshot.paramMap.get('name');
    if(productName){
      this.product = this.products.find(p => p.name === productName);
    }
  }
  products = productData.map( dtp =>({
    id: dtp.id,
    name: dtp.name,
    description: dtp.description,
    price: dtp.price,
    status: dtp.status ,
    image: dtp.image,
    thumbnail: dtp.image,
    code: dtp.name.split(' ').join('').toUpperCase() + Math.floor(Math.random() * 1000) + 1
  }))

  addToCart(){
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: this.quantity,
      image: this.product.image,
      description: this.product.description
    });
    // this.cartService.addToCart(this.product);
    this.notification.success('Thành công', `${this.product.name} đã được thêm vào giỏ hàng`);
  }

  byNow(){
    this.addToCart();
  }
  increaseQuantity(item: any) {
    item.quantity = +item.quantity + 1;
    // item.quantity = +item.quantity + 1;
    this.cdRef.detectChanges();
  }

  decreaseQuantity(item: any) {
    if (+item.quantity > 1) {
      item.quantity = +item.quantity - 1;
      this.cdRef.detectChanges();
    }
  }
}
