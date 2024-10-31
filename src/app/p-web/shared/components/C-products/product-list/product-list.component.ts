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
  searchTerm: string = '';
  filteredProducts: any[] =this.products;
  selectedCategory: string = 'Dịch vụ';

  currentPage: number = 1;
  totalPages: number = 0;
  itemPerPage: number = 12;
  displayedPages: number[] = [];

  itemToggle: any;
  sortOrder: string = 'asc'

    items = [
      {
        subcategories: 'Thiết Bị Điện Hạ Thế',
        // subcategories: ['Máy cắt hạ thế', 'Aptomat', 'Contactor', 'Rơ le bảo vệ', 'Tụ bù'],
        isOpen: false
      },
      {
        subcategories: 'Thiết Bị Truyền Tải và Phân Phối Điện',
        // subcategories: ['Máy biến áp', 'Tủ trung thế', 'Máy cắt trung thế', 'Cầu dao phụ tải'],
        isOpen: false
      },
      {
        subcategories: 'Thiết Bị Theo Dõi và Đo Lường',
        // subcategories: ['Ampe kìm', 'Đồng hồ vạn năng', 'Cảm biến nhiệt độ', 'Thiết bị đo dòng rò', 'Đồng hồ đo điện áp'],
        isOpen: false
      },
      {
        subcategories: 'Công Tắc Ổ Cắm',
        // subcategories: ['Công tắc điện', 'Ổ cắm điện', 'Ổ cắm công nghiệp', 'Ổ cắm kéo dài'],
        isOpen: false
      },
      {
        subcategories: 'Thiết Bị Năng Lượng Mới',
        // subcategories: ['Tấm pin mặt trời', 'Inverter năng lượng mặt trời', 'Bộ điều khiển sạc', 'Hệ thống lưu trữ năng lượng'],
        isOpen: false
      }
  ]
  productsBanner = [
    {
      image: 'assets/bannerProduct.png',
      name: 'search'
    }
  ];

   constructor(private router: Router){
    this.totalPages = Math.ceil(this.products.length / this.itemPerPage);
    this.calculateDisplayedPages();
  }
  viewDetailProduct(productName: string ){
    // event.stopPropagation();
    this.router.navigate(['/product', productName])
    window.scrollTo({top: 0, behavior:'smooth'});
    // console.log('products.name')
  }

  filterProductsByCategory(category: string){
    this.selectedCategory = category;
    switch (category) {
      case 'Thiết Bị Điện Hạ Thế':
        this.filteredProducts = this.products.filter(product =>
          product.name.includes('Cầu Dao') ||
          product.name.includes('Aptomat')
        );
        break;
      case 'Thiết Bị Truyền Tải và Phân Phối Điện':
        this.filteredProducts = this.products.filter(product =>
          product.name.includes('Bộ Truyền Tải') ||
          product.name.includes('Biến Áp')
        );
        break;
      case 'Thiết Bị Theo Dõi và Đo Lường':
        this.filteredProducts = this.products.filter(product =>
          product.name.includes('Đồng Hồ') ||
          product.name.includes('Cảm Ứng')
        );
        break;
      case 'Công Tắc Ổ Cắm':
        this.filteredProducts = this.products.filter(product =>
          product.name.includes('Công Tắc') ||
          product.name.includes('Ổ Cắm')
        );
        break;
      case 'Thiết Bị Năng Lượng Mới':
        this.filteredProducts = this.products.filter(product =>
          product.name.includes('Pin Mặt Trời') ||
          product.name.includes('Inverter')
        );
        break;
      default:
        this.filteredProducts = this.products;
    }
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
    const productsToDisplay = this.filteredProducts.length > 0 ? this.filteredProducts : this.products;

    const sortedProducts = productsToDisplay.sort((a, b) => {
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

  toggleSort(){
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  searchProduct(): void {
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.products);

    if (this.filteredProducts.length > 0) {
      console.log('Filtered Products:', this.filteredProducts);

      // this.router.navigate(['/products', this.filteredProducts[0].name]);
      } else {
      alert('Không tìm thấy sản phẩm nào phù hợp với từ khóa bạn tìm.');
    }
  }
  clearSearch(): void {
    this.searchTerm = '';
    this.filteredProducts = [];
  }
}
