import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p008-sidebar-manage',
  templateUrl: './p008-sidebar-manage.component.html',
  styleUrl: './p008-sidebar-manage.component.scss'
})
export class P008SidebarManageComponent {
  constructor(private router: Router) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  headerTitle: string = 'Trang quản lý'; // Tiêu đề mặc định

  // Hàm cập nhật tiêu đề
  updateHeader(newTitle: string) {
    this.headerTitle = newTitle;
  }
}
