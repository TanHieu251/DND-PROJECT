import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent implements OnInit {
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
