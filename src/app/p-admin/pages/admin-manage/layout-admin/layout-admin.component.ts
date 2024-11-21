import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent {

  menuItems = [
    { title: 'Dự án', icon: '', route: 'projectManage' },
    { title: 'Tin tức', icon: '', route: 'newsManage' },
    { title: 'Dich vu', icon: '', route: 'servicesManage' },
    { title: 'khach hang', icon: '', route: 'customerManage'},
    { title: 'Gio hang', icon: '', route: 'orderManage' }
  ];
  constructor(private router: Router) { }

  selectedItem = this.menuItems[0];

  selectItem(item: any) {
    this.selectedItem = item;
    this.router.navigate([item.route]);
  }
}
