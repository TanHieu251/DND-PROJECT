import { Component, ViewChild } from '@angular/core';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-p001-product-category',
  templateUrl: './p001-product-category.component.html',
  styleUrl: './p001-product-category.component.scss',
})
export class P001ProductCategoryComponent {
  visible = false;
  isEditing = false;
  currentCategory : any = null;
  categoryForm!: FormGroup;
  date = null;
  value = 0;

  defaultFileList: NzUploadFile[] = [
  ];

  fileList1 = [...this.defaultFileList];

  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
  displayedColumnsCategoryProduct: string[] =['Name', 'Status', 'Status Name', 'popup'];

  productCategories: any[]=[
    {Name: 'Cong tac', Status:'0', StatusName:'pending'},
    {Name: 'O cam', Status:'1', StatusName:'success'},
    {Name: 'Cau dao', Status:'2', StatusName:'error'},
  ]
  constructor(private fb: FormBuilder){}

  ngOnInit(): void{
    this.categoryForm = this.fb.group({
      Name: ['', Validators.required],
      Status: ['', Validators.required],
      StatusName: ['', Validators.required],

    })
  }

  openDrawerForCreate():void{
    this.currentCategory = null;
    this.isEditing = false;
    this.visible = true;
    this.categoryForm.reset();
  }
  openDrawerForEdit(product: any) :void{
    this.currentCategory = {...product};
    this.isEditing = true;
    this.categoryForm.patchValue({
      Name: product.Name,
      Status: product.Status,
      StatusName: product.StatusName,
    });
    this.visible = true;
    console.log(this.currentCategory);
  }
  saveProduct():void{
    if (this.isEditing) {
      const index = this.productCategories.findIndex((p) => p.name === this.currentCategory.name);
      if(index > 1){
        this.productCategories[index] = {...this.currentCategory};
      }
    }
    else{
      const newCategory = {...this.currentCategory, id: Date.now()};
      this.productCategories.push(newCategory);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    this.productCategories = this.productCategories.filter((p) => p.id !== productId);
    this.closeDrawer();
  }
  close(){
    this.visible = false;
  }
  openDrawer(): void {
    this.visible = true; // Mở Drawer
  }
  closeDrawer(): void {
    this.visible = false;
    this.currentCategory = null;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
