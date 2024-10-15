import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productData } from '../../../../../data/product';
import { Item } from '../../../../../data/product';


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
  itemToggle: any;
  sortOrder: string = 'asc'

  viewDetailProduct(productName: string){
    this.router.navigate(['/product', productName])
    window.scrollTo({top: 0, behavior:'smooth'});
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

  getDisplayedProducts() {
    const sortedProducts = this.products.sort((a, b) => {
      const priceA = Number(a.price.replace(/[^0-9.-]+/g, ''));
      const priceB = Number(b.price.replace(/[^0-9.-]+/g, ''));

      if (isNaN(priceA) || isNaN(priceB)) {
        return 0;
      }

      if (this.sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    const startIndex = (this.currentPage - 1) * this.itemPerPage;
    const endIndex = startIndex + this.itemPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }

  reloadPage()
  {
    window.location.href = '/';
  }

  toggleItem(itemToggle: Item) {
    itemToggle.isOpen = !itemToggle.isOpen;
  }

  toggleSort(){
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  items = [
    {
      title:'Thiết Bị Điện Hạ Thế',
      subcategories: ['Thiết Bị Điện Hạ Thế 1', 'Thiết Bị Điện Hạ Thế 2', 'Thiết Bị Điện Hạ Thế 3'],
      isOpen: false
    },
    {
      title:'Thiết Bị Truyền Tải và Phân Phối Điện',
      subcategories: ['Thiết Bị Truyền Tải và Phân Phối Điện 1', 'Thiết Bị Truyền Tải và Phân Phối Điện 2'],
      isOpen: false
    },
    {
      title:'Thiết Bị Theo Dõi và Đo Lường',
      subcategories: ['Thiết Bị Theo Dõi và Đo Lường 1', 'Thiết Bị Theo Dõi và Đo Lường 2', 'Thiết Bị Theo Dõi và Đo Lường 3'],
      isOpen: false
    },
    {
      title:'Công Tắc Ổ Cắm',
      subcategories: ['Công Tắc Ổ Cắm 1'],
      isOpen: false
    },
    {
      title:'Thiết Bị Năng Lượng Mới',
      subcategories: ['Thiết Bị Năng Lượng Mới 1', 'Thiết Bị Năng Lượng Mới 2'],
      isOpen: false
    },
  ]

}
