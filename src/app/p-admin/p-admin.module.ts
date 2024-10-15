import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAdminRoutingModule } from './p-admin.routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {TableComponent} from "./shared/components/table/table.component";
import {StatusPipe} from "./shared/pipe/status.pipe";
import {AddSPipe} from "./shared/pipe/second-time.pipe";
import {MatPaginator} from "@angular/material/paginator";

@NgModule({

  declarations: [
    TableComponent,
    StatusPipe,
    AddSPipe
  ],
  imports: [
    CommonModule,
    PAdminRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginator,
  ],
})
export class PAdminModule {}
