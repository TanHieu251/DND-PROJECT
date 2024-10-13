import { Component } from '@angular/core';
import { AuthServiceService } from '../../auth/shared/services/auth-service.service';

@Component({
  selector: 'app-p-heaader',
  templateUrl: './p-heaader.component.html',
  styleUrl: './p-heaader.component.scss',
})
export class HeaderComponent {
  // reloadPage() {
  //   window.location.href = '/home';
  // }
  constructor(private authService: AuthServiceService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  onLogOut() {
    return this.authService.onLogout();
  }

  menu = [
    { name: 'Trang chủ', routes: '/home' },
    { name: 'Giới thiệu công ty', routes: '/about' },
    { name: 'Sản phẩm', routes: '/products' },
    { name: 'Dự án', routes: '/projects' },
    { name: 'Liên hệ', routes: '/contact' }
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
