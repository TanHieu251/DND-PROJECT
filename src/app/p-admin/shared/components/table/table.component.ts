import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Output() public onClickAction = new EventEmitter();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  // common
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  pageEvent!: PageEvent;
  page: number = 1;
  pageSizes: number[] = [5, 10, 15];
  pageSize: number = 5;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;

    this.paginator._intl.itemsPerPageLabel = 'Hiển thị mỗi trang';
  }

  //#region CHECKBOX
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  onSelectionChange() {
    const selectedIds = this.selection.selected.map((row) => row.status);
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  //#endregion

  //#region PAGINATION
  onPaginateChange(event: PageEvent): PageEvent {
    this.pageEvent = event;
    this.updatePaginatedData(event.pageIndex, event.pageSize);
    return this.pageEvent;
  }
  paginatedData: number[] = [];

  updatePaginatedData(pageIndex: number, pageSize: number): void {
    const startIndex = pageIndex * pageSize;
    this.paginatedData = this.data.slice(startIndex, startIndex + pageSize);
  }

  onOpenDrawer(item: any): void {
    this.onClickAction.emit(item);
  }


}
