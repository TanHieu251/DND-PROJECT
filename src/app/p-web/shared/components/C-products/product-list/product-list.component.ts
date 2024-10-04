import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  currentPage: number = 1;
  totalPages: number = 0;
  itemPerPage: number = 12;
  displayedPages: number[] = [];
  // maxDisplayedPages = 10

  constructor(){
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
    const maxDisplayedPages = 10; //chinh hien thi gioi han so trang

    if(this.totalPages <= maxDisplayedPages){
      this.displayedPages = Array.from({length: this.totalPages}, (_,i) => i + 1);
    } else {
      // this.displayedPages = [];

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
      title:'TThiết Bị Theo Dõi và Đo Lường'
    },
    {
      title:'Công Tắc Ổ Cắm'
    },
    {
      title:'Thiết Bị Năng Lượng Mới'
    },
  ]

  products = [

    {
      name: 'LS ACB Metasol 1',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 2',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 3',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 4',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 5',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 6',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 7',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 8',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 9',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 10',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 11',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 12',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 13',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 14',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 15',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 16',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 17',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 18',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 19',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 20',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 21',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 22',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 23',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 24',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 25',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 26',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 27',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 28',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 29',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 30',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 31',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 32',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 33',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 34',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },{
      name: 'LS ACB Metasol 35',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: 'Hết hàng',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
    {
      name: 'LS ACB Metasol 36',
      description: 'Metasol ACB (Air Circuit Breaker) của LS đáp ứng dòng ngắt mạch...',
      price: '50,000 VND',
      inStock: '',
      image: 'assets/image 5.png',
      // status: 'out-of-stock'
    },
  ]
}
