import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageProduct } from '../../../../../data/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

// import { ProductManageComponent }
export interface ProductManage {
  id: string;
  name: string;
  // email: string;
  // phone: string;
  // location: string;
  image?: string;
  price?:number;
  category?: string;
  status?: string;
}

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent implements OnInit  {
  // currentPage: number = 1;
  totalPages: number = 50;
  itemPerPage: number = 12;
  displayedPages: number[] = [];
  paginatedProducts: ProductManage[] = [];
  // pageSize = 10;
  currentPage = 0;
  pageSize = 10;

  selectedQuestion: any;
  selectedRows: any[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsaa: string[] = [
    'id',
    'name',
    'price',
    'status',
    'image',
    'popup',
  ];
  constructor(private router: Router){
    this.totalPages = Math.ceil(this.products.length / this.itemPerPage);
  }
  // dataSource = new MatTableDataSource<any>(this.products);
  ngOnInit(): void {
    this.updatePaginatedProducts();
    // throw new Error('Method not implemented.');
  }
  products :any []= [
    {
      id: "DND01",
      name: 'Sản phẩm A',
      price: 100000,
      category: 'Loại 1',
      status: 'Còn hàng',
      image: 'path-to-image',
      // email: 'exampleA@email.com',
      // phone: '0123456789',
      // location: 'Hà Nội',

    },

  ]
  dataSource = new MatTableDataSource<any>(this.products);
  selection = new SelectionModel<any>(true, []);


  // products: ProductManage[] = Array.from({ length: 50 }, (_, i) => ({
  //   id: i + 1,
  //   name: `Sản phẩm ${i + 1}`,
  //   price: (i + 1) * 100000,
  //   category: `Loại ${i % 3 + 1}`,
  //   status: i % 2 === 0 ? 'Còn hàng' : 'Hết hàng',
  //   image: 'path-to-image',
  //   // email: `product${i + 1}@email.com`,
  //   // phone: `09000000${i}`,
  //   // location: i % 2 === 0 ? 'Hà Nội' : 'Hồ Chí Minh',
  // }));

  openAddProductDialog() {
    console.log('Thêm sản phẩm mới');
  }

  updateProduct(productId: string) {
    console.log(`Cập nhật sản phẩm: ${productId}`);
  }

  deleteProduct(productId: string) {
    // console.log(`Xóa sản phẩm: ${productId}`);
  }

  selectAll(event: any) {
    // console.log('Chọn tất cả:', event.target.checked);
  }
  setPage(page: number){
    if(page >= 1 && page <= this.totalPages){
      this.currentPage = page;
    }
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedProducts();
  }
  updatePaginatedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
    // this.updateShowBigPopup();
  }


  onSelectionChange() {
    this.selectedRows = this.selection.selected;
    const selectedIds = this.selection.selected.map((row) => row.status);
    // this.bigPopupSelectedIds = selectedIds;
    this.selectedQuestion = null;

    // this.toggleBigPopup();
  }
}
