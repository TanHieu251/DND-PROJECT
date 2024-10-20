import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  private cartItems : any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  addToCart(product: any){
    const existingItem = this.cartItems.find(i => i.name === product.name);
    if(existingItem){
      existingItem.quantity +=1;
    } else {
      this.cartItems.push({...product, quantity: 1});
    }
    this.updateCartCount();
  }

  getCartItem (){
    return this.cartItems;
  }
  getCartCountObservable(){
    return this.cartCount.asObservable(); // tra ve gio hang voi so luong dung
  }
  getCartCount():number{
    return this.cartItems.reduce((total, i) => total + i.quantity, 0);
  }

  private updateCartCount() {
    const totalItems = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartCount.next(totalItems);
  }
}
