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
     if(this.notification){
      this.notification.success('Thành công', `${this.product.name} đã được thêm vào giỏ hàng`);
     }
     else{
      console.log('Notification service is not defined');
     }
    // this.notification.success('Thành công', `${this.product.name} đã được thêm vào giỏ hàng`);
    // this.notification.error('Sản phẩm gặp lỗi khi thêm vào giỏ hàng');
  }

  byNow(){
    this.addToCart();
  }
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if(this.quantity > 1){
      this.quantity--;
    }
  }

}
