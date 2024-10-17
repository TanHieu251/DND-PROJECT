import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth/shared/services/auth-service.service';
import { ServiceService } from '../../p-web/shared/service/service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-p-heaader',
  templateUrl: './p-heaader.component.html',
  styleUrl: './p-heaader.component.scss',
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthServiceService, private cartService: ServiceService) {}

  cartCount: number = 0;
  private cartSubscription!: Subscription;

  ngOnInit() {
    // this.cartCount = this.cartService.getCartCount();
    this.cartSubscription = this.cartService.getCartCountObservable().subscribe(count => {
      this.cartCount = count;
    })
  }
  ngOnDestroy() {
    if(this.cartSubscription){
      this.cartSubscription.unsubscribe();
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  onLogOut() {
    return this.authService.onLogout();
  }

  menu = [
    { name: 'Trang chủ', routes: '/home' },
    { name: 'Giới thiệu', routes: '/about' },
    { name: 'Sản phẩm', routes: '/products' },
    { name: 'Dự án', routes: '/projects' },
    { name: 'Tin tức', routes: '/news' },
    { name: 'Liên hệ', routes: '/contacts' },
  ];
  reloadPage(route: string){
    if(route === '/home'){
      window.location.href = route;
    } else if(route === '/about'){
      window.location.href = route;
    } else if(route === '/products'){
      window.location.href = route;
    } else if(route === '/projects'){
      window.location.href = route;
    } else{
      window.location.href = route;
    }
  }
}
