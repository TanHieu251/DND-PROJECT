import { Component } from '@angular/core';

@Component({
  selector: 'app-p-header2',
  templateUrl: './p-header2.component.html',
  styleUrl: './p-header2.component.scss'
})
export class Header2Component {

  menu = [
    { name: 'Trang chủ', routes: '/home' },
    { name: 'Giới thiệu công ty', routes: '/about' },
    { name: 'Sản phẩm', routes: '/products' },
    { name: 'Dự án', routes: '/projects' },
    { name: 'Liên hệ', routes: '/contact' }
  ];
  
}
