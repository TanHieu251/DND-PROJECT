import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../../auth/shared/services/auth-service.service';
import { ServiceService } from '../../service/service.service';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-p-heaader',
  templateUrl: './p-heaader.component.html',
  styleUrl: './p-heaader.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private cartService: ServiceService,
    private router: Router
  ) {}

  cartCount: number = 0;
  private cartSubscription!: Subscription;

  ngOnInit() {
    this.cartSubscription = this.cartService
      .getCartCountObservable()
      .subscribe((count) => {
        this.cartCount = count;
      });
  }
  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  onLogOut() {
    return this.authService.onLogout();
  }
  currentRoute: string = '';

  menu = [
    { name: 'Trang chủ', routes: '/home' },
    { name: 'Giới thiệu', routes: '/about' },
    { name: 'Dịch vụ', routes: '/services' },
    { name: 'Sản phẩm', routes: '/products' },
    { name: 'Dự án', routes: '/projects' },
    { name: 'Tin tức', routes: '/news' },
    { name: 'Liên hệ', routes: '/contacts' },
  ];
}
