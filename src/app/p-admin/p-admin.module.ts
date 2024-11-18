import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAdminRoutingModule } from './p-admin.routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {TableComponent} from "./shared/components/table/table.component";
import {StatusPipe} from "./shared/pipe/status.pipe";
import {AddSPipe} from "./shared/pipe/second-time.pipe";
import {MatPaginator} from "@angular/material/paginator";
import { ManageComponent } from './shared/components/admin-manage/sidebar_manage/manage.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutAdminComponent } from './shared/components/admin-manage/layout-admin/layout-admin.component';
import { ProductManageComponent } from './shared/components/admin-manage/product-manage/product-manage.component';

@NgModule({

  declarations: [
    TableComponent,
    StatusPipe,
    AddSPipe,
    LayoutAdminComponent,
    ManageComponent,
    ProductManageComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    PAdminRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginator,
    RouterLink,
    RouterOutlet
    // ManageComponent
  ],
})
export class PAdminModule {}
