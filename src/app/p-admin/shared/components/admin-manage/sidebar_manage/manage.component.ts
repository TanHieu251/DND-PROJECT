import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {

  // menuItems = [
  //   { title: 'Sản phẩm', route: 'productManage' },
  //   { title: 'Dự án', icon: '', route: 'projectManage' },
  //   { title: 'Tin tức', icon: '', route: 'newsManage' },
  //   { title: 'Dich vu', icon: '', route: 'servicesManage' },
  //   { title: 'khach hang', icon: '', route: 'customerManage'},
  //   { title: 'Gio hang', icon: '', route: 'orderManage' }
  // ];
  constructor(private router: Router) { }

  headerTitle: string = 'Trang quản lý'; // Tiêu đề mặc định

  // Hàm cập nhật tiêu đề
  updateHeader(newTitle: string) {
    this.headerTitle = newTitle;
  }
}
