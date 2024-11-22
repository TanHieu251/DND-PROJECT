import { Component, ViewChild } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-p002-product-manage',
  templateUrl: './p002-product-manage.component.html',
  styleUrl: './p002-product-manage.component.scss'
})
export class P002ProductManageComponent {

  visible = false;
  isEditing = false;
  currentProduct : any = null;
  productForm!: FormGroup;
  date = null;
  value = 0;

  defaultFileList: NzUploadFile[] = [
  ];

  fileList1 = [...this.defaultFileList];


  @ViewChild(MatPaginator, {static:true}) paginator !: MatPaginator
  displayedColumnsProduct: string[] = [ 'Name', 'Description', 'Type' ,'Price', 'Image', 'Date', 'status', 'popup'];

  products: any[] = [
    { id: 1, Name: 'Product A', Price: 1000, Type: 'Type 1', status: 'pending', Description: 'Description A', Date: new Date() },
    { id: 2, Name: 'Product B', Price: 2000, Type: 'Type 2', status: 'block', Description: 'Description B' , Date: new Date()},
  ];
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Price: [0, [Validators.required, Validators.min(0)]],
      Type: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      Image: [''],
    });
  }
  openDrawerForCreate(): void{
    this.currentProduct = null;
    this.isEditing = false;
    this.productForm.reset();
    this.visible = true;
  }
  openDrawerForEdit(product: any) :void{
    this.currentProduct = {...product};
    this.isEditing = true;
    this.productForm.patchValue({
      Name: this.currentProduct.Name,
      Description: this.currentProduct.Description,
      Price: this.currentProduct.Price,
      Type: this.currentProduct.Type,
      Status: this.currentProduct.Status,
      Image: this.currentProduct.Image,
    });
    this.visible = true;
    console.log(this.currentProduct);
  }
  saveProduct(): void{
    if (this.isEditing) {
      // Cập nhật sản phẩm
      const index = this.products.findIndex((p) => p.name === this.currentProduct.name);
      if (index > -1) {
        this.products[index] = { ...this.currentProduct };
      }
    } else {
      // Thêm sản phẩm mới
      const newProduct = { ...this.currentProduct, id: Date.now() }; // Tạo ID giả
      this.products.push(newProduct);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
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
    this.currentProduct = null;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
