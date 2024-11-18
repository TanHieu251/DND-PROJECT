import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  totalPrice?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // @Input() item: { price: number; quantity: number } = { price: 0, quantity: 1 };
  private items: CartItem[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private totalPrice = new BehaviorSubject<number>(0);

  constructor() {}

  addToCart(product: CartItem) {
    const existingItem = this.items.find(i => i.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        ...product,
        price: Number(product.price) || 0,
        quantity: product.quantity || 1,
        totalPrice: (Number(product.price) || 0) * (product.quantity || 1)
      });
    }
    this.updateCartCount();
    this.updateTotalPrice();
    console.log('Product being added to cart', product);
    this.saveCard();
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    // return this.items.reduce((total, item) => total + item.price * item.quantity, 0);

    return this.items.reduce((sum, item) =>{
      const price = item.price || 0;
      const quantity = item.quantity || 0;
      return sum + (price * quantity ) ;
    }, 0);
  }

  getCartItem(): CartItem[] {
    return this.items;
  }

  getTotalPriceObservable() {
    return this.totalPrice.asObservable();
  }

  getCartCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  private updateCartCount() {
    const totalItems = this.getTotalQuantity();
    this.cartCount.next(totalItems);
  }

  private updateTotalPrice() {
    const totalPrice = this.getTotalPrice();
    this.totalPrice.next(totalPrice);
  }

  getCartCountObservable() {
    return this.cartCount.asObservable();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  removeItem(item: CartItem) {
    this.items = this.items.filter(i => i.id !== item.id);
    this.updateCartCount();
    this.updateTotalPrice();
    this.saveCard();
  }

  clear() {
    this.items = [];
    this.updateCartCount();
    this.updateTotalPrice();
  }
  saveCard(): void{
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
  loadCard(): void{
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.items = JSON.parse(storedCart);
    }
  }
}
