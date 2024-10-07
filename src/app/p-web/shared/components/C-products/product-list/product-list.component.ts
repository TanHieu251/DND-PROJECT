import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productData } from '../../../../../data/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = productData;
  status: boolean = true;

  currentPage: number = 1;
  totalPages: number = 0;
  itemPerPage: number = 12;
  displayedPages: number[] = [];
  // selectedProduct: any = this.products[0];  

  // selectProduct(productName: string) {
  //   this.selectedProduct = this.products.find(p => p.name === productName);
  // }

  // selectProductByName(){

  // }

  viewDetialProduct(productname: string){
    this.router.navigate(['/productdetails', productname])
  }
  constructor(private router: Router){
    this.totalPages = Math.ceil(this.products.length / this.itemPerPage);
    this.calculateDisplayedPages();
  }
  onItemPerPageChange(event: any) {
    this.itemPerPage = event;
    this.currentPage = 1
    this.totalPages = Math.ceil(this.products.length / this.itemPerPage);
    this.calculateDisplayedPages();
  }
  setPage(page: number) {
    if(page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.calculateDisplayedPages();
  }

  calculateDisplayedPages(){
    const maxDisplayedPages = 10;

    if(this.totalPages <= maxDisplayedPages){
      this.displayedPages = Array.from({length: this.totalPages}, (_,i) => i + 1);
    } else {
      if(this.currentPage <= 3 ) {
        this.displayedPages = [1, 2, 3 , this.totalPages];
      } else if (this.currentPage > this.totalPages - 3){
        this.displayedPages = [1,  this.totalPages - 2, this.totalPages - 1, this.totalPages];
      } else {
        this.displayedPages = [1, this.currentPage - 1, this.currentPage, this.currentPage + 1,  this.totalPages];
      }
    }
  }

  getDisplayedProducts(){
    const startIndex = (this.currentPage - 1) * this.itemPerPage;
    const endIndex = startIndex + this.itemPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  items = [
    {
      title:'Thiết Bị Điện Hạ Thế'
    },
    {
      title:'Thiết Bị Truyền Tải và Phân Phối Điện'
    },
    {
      title:'Thiết Bị Theo Dõi và Đo Lường'
    },
    {
      title:'Công Tắc Ổ Cắm'
    },
    {
      title:'Thiết Bị Năng Lượng Mới'
    },
  ]
}
