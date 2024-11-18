import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedGuard } from '../../../../auth/shared/guard/authenticated/authenticated.guard';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  title: string = 'Trang quản lý'
  updateHeader(newTitle: string) {
    this.title = newTitle;
  }
  adminAccount: { username: string; role: string } | null = null;

  // constructor(private authService: AuthenticatedGuard) {}

  ngOnInit() {
    // this.adminAccount = this.authService.getAdminAccount();
  }

}
