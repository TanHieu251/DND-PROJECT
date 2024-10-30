// import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
// import { productData, serviceData } from '../../../../../data/product';
// import { ServiceService } from '../../../service/service.service';

// @Component({
//   selector: 'app-c-cart',
//   templateUrl: './c-cart.component.html',
//   styleUrl: './c-cart.component.scss'
// })
// export class CCartComponent implements OnInit {

//   @Input() item: any;
//   @Output() itemRemoved = new EventEmitter<any>();
//   isCustomerFormVisible = false;
//   isOrderConfirmed = false;
//   items = this.cartService.getItems();
//   totalPrice : number = 0;
//   totalQuantity : number = 0;
//   // CartItem = serviceData;
//   constructor(public cartService: ServiceService, private cdRef: ChangeDetectorRef){}
//   ngOnInit(): void {
//     this.updateTotalPriceAndQuantity();

//     this.totalPrice = this.cartService.getTotalPrice();
//     this.totalQuantity = this.cartService.getTotalQuantity();

//     this.cartService.getCartCountObservable().subscribe(() => {
//       this.totalQuantity = this.cartService.getTotalQuantity();
//       this.totalPrice = this.cartService.getTotalPrice();
//     });
//   }
//   updateTotalPriceAndQuantity(){
//     this.totalPrice = this.getTotalPrice();
//     this.totalQuantity = this.cartService.getTotalQuantity();
//   }
//   //tinh tong gia tien
//   getTotalPrice(): number{
//     // return this.cartService.getTotalPrice();
//       return this.items.reduce((sum, item) => {
//         const price = item.price || 0;
//         const quantity = item.quantity || 0;
//         return sum + (price * quantity);
//     }, 0);
//   }
//   removeItem(item: any) {
//     this.itemRemoved.emit(this.item);
//     this.cartService.removeItem(item);
//     this.updateTotalPriceAndQuantity();
//   }
//   toggleCustomerForm(){
//     this.isCustomerFormVisible = !this.isCustomerFormVisible;
//     this.isOrderConfirmed = false;
//   }
//   confirmCustomerInfor(){
//     this.isCustomerFormVisible = false;
//     this.isOrderConfirmed = true;
//   }
//     increaseQuantity(item: any) {
//     item.quantity = (item.quantity || 0) + 1;
//     this.updateTotalPriceAndQuantity();
//     this.cdRef.detectChanges();
//   }

//   decreaseQuantity(item: any) {
//       if ((item.quantity || 0) > 1) {
//         item.quantity -= 1;
//         this.updateTotalPriceAndQuantity();
//         this.cdRef.detectChanges();
//     }
//   }
// }

import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
import { productData, serviceData } from '../../../../../data/product';

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
    private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cartService.getCartCountObservable().subscribe(count => {
      this.totalQuantity = count;
      this.cdRef.detectChanges();
    });

    this.cartService.getTotalPriceObservable().subscribe(price => {
      this.totalPrice = price;
      this.cdRef.detectChanges();  // Recalculate total price after price change
    });

    this.items = this.cartService.getItems();
  }

  updateTotalPriceAndQuantity() {
    this.totalQuantity = this.cartService.getTotalQuantity();
    this.totalPrice = this.cartService.getTotalPrice(); // Call getTotalPrice() here to get the calculated total
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 0;
      console.log(`Item Price: ${price}, Quantity: ${quantity}, Item Total: ${price * quantity}`);
      return sum + (price * quantity) ;
    }, 0);
  }
  getTotalItem(item: any): number{
    return (item.price ?? 0) * (item.quantity ?? 0);
  }
  removeItem(item: any) {
    this.itemRemoved.emit(this.item);
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();  // Update items array after removal
    // this.updateTotalPriceAndQuantity();  // Recalculate total after removal
  }

  toggleCustomerForm() {
    this.isCustomerFormVisible = !this.isCustomerFormVisible;
    this.isOrderConfirmed = false;
  }

  confirmCustomerInfor() {
    this.isCustomerFormVisible = false;
    this.isOrderConfirmed = true;
  }

  increaseQuantity(item: any) {
    item.quantity = (item.quantity || 0) + 1;
    this.updateTotalPriceAndQuantity();  // Recalculate total after quantity increase
    this.cdRef.detectChanges();
  }

  decreaseQuantity(item: any) {
    if ((item.quantity || 0) > 1) {
      item.quantity -= 1;
      this.updateTotalPriceAndQuantity();  // Recalculate total after quantity decrease
      this.cdRef.detectChanges();
    }
  }
}
