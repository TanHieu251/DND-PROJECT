import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAdminRoutingModule } from './p-admin.routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TableComponent } from './shared/components/table/table.component';
import { StatusPipe } from './shared/pipe/status.pipe';
import { AddSPipe } from './shared/pipe/second-time.pipe';
import { MatPaginator } from '@angular/material/paginator';
import { P001ProductCategoryComponent } from './pages/p001-product-category/p001-product-category.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { P002ProductManageComponent } from './pages/p002-product-manage/p002-product-manage.component';
import { P003ProjectManageComponent } from './pages/p003-project-manage/p003-project-manage.component';
import { P004NewsManageComponent } from './pages/p004-news-manage/p004-news-manage.component';
import { P005ServicesManageComponent } from './pages/p005-services-manage/p005-services-manage.component';
import { P006OrderManageComponent } from './pages/p006-order-manage/p006-order-manage.component';
import { P007CustomerManageComponent } from './pages/p007-customer-manage/p007-customer-manage.component';
import { P008SidebarManageComponent } from './pages/p008-sidebar-manage/p008-sidebar-manage.component';


@NgModule({
  declarations: [
    TableComponent,
    StatusPipe,
    AddSPipe,
    P001ProductCategoryComponent,
    P002ProductManageComponent,
    P003ProjectManageComponent,
    P004NewsManageComponent,
    P005ServicesManageComponent,
    P006OrderManageComponent,
    P007CustomerManageComponent,
    P008SidebarManageComponent,
    LayoutComponent,


  ],
  imports: [
    CommonModule,
    PAdminRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginator,
    MatListModule,
    MatDialogModule,
    MatSidenavModule,
    FormsModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzDrawerModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzGridModule,
    NzUploadModule,
    NzInputNumberModule,

  ],
})
export class PAdminModule {}
