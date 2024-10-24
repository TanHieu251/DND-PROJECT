import { Component, Inject, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../../auth/shared/services/auth-service.service';
import { ServiceService } from '../../service/service.service';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { productData, projectsData } from '../../../../data/product';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-p-heaader',
  templateUrl: './p-heaader.component.html',
  styleUrl: './p-heaader.component.scss',
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  isPopupVisible = false;
  searchTerm: string ='';
  //mock data
  productData = productData;
  projectsData = projectsData;
  showDropdown: boolean = false;
  showMenuSearch: boolean = false;
  // menuForm: FormGroup ;
  selectedMenu: string | null = null;
  isMenuVisible = false;
  displayedColumns: string[] = ['name', 'price', 'description', 'image'];
  filteredProducts: any[] =this.productData;

  constructor(
    private authService: AuthServiceService,
    private cartService: ServiceService,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

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
  projectData = [...this.originalProjectsData];
  productsData = [...this.originalProductData];

  ngOnInit() {
    this.cartSubscription = this.cartService
      .getCartCountObservable()
      .subscribe((count) => {
        this.cartCount = count;
      });
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
    this.searchItem();
  }
  closePopup(){
  this.isPopupVisible = false;
  }
  searchItem(){
  if (this.selectedMenu === 'Dự án') {
    this.projectsData = this.originalProjectsData.filter(project =>
      project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } else if (this.selectedMenu === 'Sản phẩm') {
    this.productData = this.originalProductData.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.price.toString().includes(this.searchTerm)
    );
  }
  }
}
