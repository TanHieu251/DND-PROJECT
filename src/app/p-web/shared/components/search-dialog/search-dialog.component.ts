import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { productData, projectsData } from '../../../../data/product';


@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrl: './search-dialog.component.scss'
})
export class SearchDialogComponent {
  selectedMenu: string | null = null;
  productData = productData;
  projectsData = projectsData;
  isMenuVisible = false;

  menu = [
    { name: 'Trang chủ' },
    { name: 'Giới thiệu' },
    { name: 'Dịch vụ' },
    { name: 'Sản phẩm' },
    { name: 'Dự án' },
    { name: 'Tin tức' },
    { name: 'Liên hệ' }
  ];
  constructor(
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  selectMenu(menuName: string) {
    this.selectedMenu = menuName;
  }

  clearSelection() {
    this.selectedMenu = null;
  }

  closeDialog() {
    this.dialogRef.close();
  }
  openSearchPopup(){
    this.isMenuVisible = !this.isMenuVisible;
  }
}
