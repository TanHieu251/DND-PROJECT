import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { zh_CN, en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-p006-order-manage',
  templateUrl: './p006-order-manage.component.html',
  styleUrl: './p006-order-manage.component.scss'
})
export class P006OrderManageComponent {

  visible = false;
  orderForm!: FormGroup;
  date = null;
  currentOrder: any = null
  isEnglish = false;
  value = 1;
  isEditing = false;
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {}
  @ViewChild(MatPaginator, {static:true}) paginator !: MatPaginator
  displayedColumnsOrder: string[] = [ 'Name', 'Price', 'Payment', 'Description' ,'Total', 'Date' ,'status', 'popup'];
  orders: any[] = [
    {
      // id: 'ODR01',
      Name: 'Order 1',
      Price: '10000',
      Payment: 'Cash',
      Description: 'This is a test order',
      Total: '10000',
      Date: new Date(),
      status: 'Pending',
      // action: 'Detail'
    }
  ]
  dataSource = new MatTableDataSource<any>(this.orders);
  selection = new SelectionModel<any>(true, []);
  statuses = ['Active', 'Inactive'];
  defaultFileList: NzUploadFile[] = [
  ];
  fileList1 = [...this.defaultFileList];
  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name:['', [Validators.required]],
      price: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      description: ['', [Validators.required]],
      total: ['', [Validators.required]],
      date: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }
  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log('Form Data:', this.orderForm.value);
      this.closeDrawer();
    }
  }
  onImageChange(event: any): void {
    // Handle image file change
    console.log(event.target.files);
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
  openDrawerForCreate(): void{
    this.currentOrder = null;
    this.isEditing = false;
    this.orderForm.reset();
    this.visible = true;
  }
  openDrawerForEdit(customer: any) :void{
    this.currentOrder = {...customer};
    this.isEditing = true;
    this.orderForm.patchValue({
      Name: this.currentOrder.Name,
      Email: this.currentOrder.Email,
      Phone: this.currentOrder.Phone,
      Location: this.currentOrder.Location,
      Status: this.currentOrder.Status,
      Image: this.currentOrder.Image,
    });
    this.visible = true;
    console.log(this.currentOrder);
  }
  saveProduct(): void{
    if (this.isEditing) {
      // Cập nhật sản phẩm
      const index = this.orders.findIndex((p) => p.name === this.currentOrder.name);
      if (index > -1) {
        this.orders[index] = { ...this.currentOrder };
      }
    } else {
      // Thêm sản phẩm mới
      const newProduct = { ...this.currentOrder, id: Date.now() }; // Tạo ID giả
      this.orders.push(newProduct);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    this.orders = this.orders.filter((p) => p.id !== productId);
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
    this.currentOrder = null;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
