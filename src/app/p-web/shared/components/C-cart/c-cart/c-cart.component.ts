

import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
import { productData, serviceData } from '../../../../../data/product';
import { NotificationServiceService } from '../../../../../p-lib/services/notification-service.service';

@Component({
  selector: 'app-c-cart',
  templateUrl: './c-cart.component.html',
  styleUrls: ['./c-cart.component.scss']
})
export class CCartComponent implements OnInit {

  @Input() item: any;
  @Output() itemRemoved = new EventEmitter<any>();

  isCustomerFormVisible = false;
  isOrderConfirmed = false;
  CartItems = productData
  items = this.cartService.getItems();
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor (
    private cartService: ServiceService,
    private cdRef: ChangeDetectorRef,
    private notification: NotificationServiceService) {}

  ngOnInit(): void {
    this.cartService.getCartCountObservable().subscribe(count => {
      this.totalQuantity = count;
      this.cdRef.detectChanges();
    });

    this.cartService.getTotalPriceObservable().subscribe(price => {
      this.totalPrice = price;
      this.cdRef.detectChanges();
    });

    this.items = this.cartService.getItems();
  }

  confirmCusInfor(){
    this.notification.success(`Thông tin khách hàng đã được xác nhận` );
  }

  //cập nhật giá tiền và số lượng
  updateTotalPriceAndQuantity() {
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  //tính tổng giá trị của sản phẩm với đã nhân với số lượng
  getTotalPrice(): number {
    return this.items.reduce((sum, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 0;
      // console.log(`Item Price: ${price}, Quantity: ${quantity}, Item Total: ${price * quantity}`);
      return sum + (price * quantity) ;
    }, 0);
  }
  getTotalItem(item: any): number{
    return (item.price ?? 0) * (item.quantity ?? 0);
  }
  //xóa một sản phẩm
  removeItem(item: any) {
    this.itemRemoved.emit(this.item);
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  toggleCustomerForm() {
    this.isCustomerFormVisible = !this.isCustomerFormVisible;
    this.isOrderConfirmed = false;
  }
  // hiển thị nội dung thông tin khách hàng
  confirmCustomerInfor() {
    this.isCustomerFormVisible = false;
    this.isOrderConfirmed = true;
  }

  // tăng thêm sản phẩm
  increaseQuantity(item: any) {
    item.quantity = (item.quantity || 0) + 1;
    this.updateTotalPriceAndQuantity();
    this.cdRef.detectChanges();
  }
  //giảm sản phẩm
  decreaseQuantity(item: any) {
    if ((item.quantity || 0) > 1) {
      item.quantity -= 1;
      this.updateTotalPriceAndQuantity();  // Recalculate total after quantity decrease
      this.cdRef.detectChanges();
    }
  }
}
