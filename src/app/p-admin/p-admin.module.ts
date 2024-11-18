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
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    TableComponent,
    StatusPipe,
    AddSPipe,
    P001ProductCategoryComponent,
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
    NzButtonModule
  ],
})
export class PAdminModule {}
