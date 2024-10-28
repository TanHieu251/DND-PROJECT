import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../../../../auth/shared/services/auth-service.service';
import { ServiceService } from '../../service/service.service';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { productData, projectsData, serviceData } from '../../../../data/product';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-p-heaader',
  templateUrl: './p-heaader.component.html',
  styleUrl: './p-heaader.component.scss',
  // standalone: true,
  // imports: [MatPaginatorModule],
})
export class HeaderComponent implements OnInit {
  // [x: string]: any;
  isPopupVisible = false;
  searchTerm: string ='';
  //mock data
  productData = productData;
  projectsData = projectsData;
  serviceData= serviceData;

  showDropdown: boolean = false;
  showMenuSearch: boolean = false;
  selectedMenu: string  = '';
  isMenuVisible = false;
  displayedColumns: string[] = ['name', 'price', 'description', 'image'];
  filteredProducts: any[] =this.productData;

  currentPage: number = 1;
  totalPages: number = 50;
  displayedPages: number[] = [];
  selectedMenuItem: string ='Dịch vụ'

  paginatedProducts = new MatTableDataSource<any>();
  paginatedProjectsData = new MatTableDataSource<any>();
  paginatedServiceData = new MatTableDataSource<any>();

  totalProductsLength: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private authService: AuthServiceService,
    private cartService: ServiceService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<HeaderComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      // this.totalPages = Math.ceil(this.productData.length / this.itemPerPage);
      // this.calculateDisplayedPages();
    }
  cartCount: number = 0;
    private cartSubscription!: Subscription;
  menu = [
    { name: 'Trang chủ', routes: '/home' },
    { name: 'Giới thiệu', routes: '/about' },
    { name: 'Dịch vụ', routes: '/services' },
    { name: 'Sản phẩm', routes: '/products' },
    { name: 'Dự án', routes: '/projects' },
    { name: 'Tin tức', routes: '/news' },
    { name: 'Liên hệ', routes: '/contacts' },
  ];
  menuSearch = [
    { name: 'Dịch vụ' },
    { name: 'Sản phẩm' },
    { name: 'Dự án' },
    { name: 'Tin tức' },
  ];
    originalProjectsData = [...projectsData];
    originalProductData = [...productData];
    originalServiceData = [...serviceData];
    projectData = [...this.originalProjectsData];
    productsData = [...this.originalProductData];
    servicesData = [...this.originalServiceData];

  ngOnInit() {
    this.cartSubscription = this.cartService
      .getCartCountObservable()
      .subscribe((count) => {
        this.cartCount = count;
      });
      // this.updateDisplayedPages();
      // this.loadProducts();
      this.paginateServices();
      this.paginateProducts();
      this.paginateProjects();
      this.updateDisplayedPages();
      this.selectMenu;
  }
  ngAfterViewInit() {
    this.paginatedProducts.paginator = this.paginator;
  }
  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  onLogOut() {
    return this.authService.onLogout();
  }
  currentRoute: string = '';
  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }
  toggleMenuSearch(){
    this.showMenuSearch = !this.showMenuSearch;
  }
  navigateTo(route: string, menuName : string){
    this.router.navigate([route]);
    this.selectedMenu = menuName;
    this.showDropdown = false;
    this.showMenuSearch = false;
  }
  closeMenu(){
    this.selectedMenu = '';
    this.projectsData = [...this.originalProjectsData];
    this.productData = [...this.originalProductData];
    this.isPopupVisible = false;
  }
  openSearchPopup() {
    this.isPopupVisible = true;
  }
  selectMenu(menuName: string) {
    this.selectedMenu = menuName;
    this.selectedMenuItem = menuName;
    this.searchItem();
  }
  closePopup(){
  this.isPopupVisible = false;
  }
  searchItem(): void{
  if (this.selectedMenu === 'Dự án') {
    this.projectsData = this.originalProjectsData.filter(project =>
      project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.paginateProjects();
    // console.log(this.projectsData)
  } else if (this.selectedMenu === 'Sản phẩm') {
    this.productData = this.originalProductData.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.price.toString().includes(this.searchTerm)
    );
    this.paginateProducts();
  } else if (this.selectedMenu === 'Dịch vụ'){
    this.serviceData = this.originalServiceData.filter(service =>
      service.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      service.description.toString().includes(this.searchTerm)
    );
    this.paginateServices();
  }
  else{
    alert('Không tìm thấy nội dung cần tìm');
  }
  this.currentPage = 1;
  this.updateDisplayedPages();
    // alert('Not found')
  }
  //paginator
  setPage(page: number){
    if(page >= 1 && page <= this.totalPages){
      this.currentPage = page;
      this.paginateServices();
      this.paginateProducts();
      this.paginateProjects();
      this.updateDisplayedPages();
    }
  }
  paginateServices(){
    const start = (this.currentPage - 1) * 4;
    const end = start + 4;
    this.paginatedServiceData.data = this.serviceData.slice(start, end);
  }
  paginateProducts(){
    const start = (this.currentPage - 1) * 7;
    const end = start + 6;
    this.paginatedProducts.data = this.productData.slice(start, end);
  }
  paginateProjects(){
    const start = (this.currentPage - 1) * 4;
    const end = start + 3;
    this.paginatedProjectsData.data = this.projectsData.slice(start, end);
  }
  updateDisplayedPages(){
    const pageShow = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(pageShow / 2));
    let endPage = Math.min(this.totalPages, startPage + pageShow - 1);

    if(endPage - startPage < pageShow - 1){
      startPage = Math.max(1, endPage - (pageShow + 1));
    }
    this.displayedPages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedProducts.data = this.productsData.slice(startIndex, endIndex);
  }
  // loadProducts() {
  //   this.paginatedProducts.data = this.productsData;
  //   this.totalProductsLength = this.productsData.length;
  //   this.paginatedProducts.paginator = this.paginator;
  // }

  // updateDisplayedPages(){
  //   const maxPages = 5; // Maximum number of page buttons to show
  //   const half = Math.floor(maxPages / 2);
  //   let startPage = Math.max(1, this.currentPage - half);
  //   let endPage = Math.min(this.totalPages, startPage + maxPages - 1);

  //   if (endPage - startPage < maxPages - 1) {
  //     startPage = Math.max(1, endPage - maxPages + 1);
  //   }

  //   this.displayedPages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  // }
  // onItemPerPageChange(event: any) {
  //   this.pageSize = event;
  //   this.currentPage = 1
  //   this.totalPages = Math.ceil(this.productData.length / this.pageSize);
  //   this.calculateDisplayedPages();
  // }
  // setPage(page: number) {
  //   if(page < 1 || page > this.totalPages) return;
  //   this.currentPage = page;
  //   this.updateDisplayedPages();
  // }
  // get paginatedProducts() {
  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   return this.productData.slice(startIndex, endIndex);
  // }

  // calculateDisplayedPages(){
  //   const maxDisplayedPages = 10;

  //   if(this.totalPages <= maxDisplayedPages){
  //     this.displayedPages = Array.from({length: this.totalPages}, (_,i) => i + 1);
  //   } else {
  //     if(this.currentPage <= 3 ) {
  //       this.displayedPages = [1, 2, 3 , this.totalPages];
  //     } else if (this.currentPage > this.totalPages - 3){
  //       this.displayedPages = [1,  this.totalPages - 2, this.totalPages - 1, this.totalPages];
  //     } else {
  //       this.displayedPages = [1, this.currentPage - 1, this.currentPage, this.currentPage + 1,  this.totalPages];
  //     }
  //   }
  // }
}
