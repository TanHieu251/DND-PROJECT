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
import { CustomerManageComponent } from './pages/admin-manage/customer-manage/customer-manage.component';
import { NewsManageComponent } from './pages/admin-manage/news-manage/news-manage.component';
import { OrderManageComponent } from './pages/admin-manage/order-manage/order-manage.component';
import { ProductManageComponent } from './pages/admin-manage/product-manage/product-manage.component';
import { ProjectManageComponent } from './pages/admin-manage/project-manage/project-manage.component';
import { ServiceManageComponent } from './pages/admin-manage/service-manage/service-manage.component';
import { ManageComponent } from './pages/admin-manage/sidebar_manage/manage.component';


@NgModule({
  declarations: [
    TableComponent,
    StatusPipe,
    AddSPipe,
    P001ProductCategoryComponent,
    // LayoutAdminComponent,
    ManageComponent,
    ProductManageComponent,
    CustomerManageComponent,
    ProjectManageComponent,
    NewsManageComponent,
    OrderManageComponent,
    ServiceManageComponent,
    LayoutComponent,
    // DrawerCreateComponent,
    // CreateProjectComponent


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
