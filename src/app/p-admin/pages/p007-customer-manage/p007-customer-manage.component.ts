import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-p007-customer-manage',
  templateUrl: './p007-customer-manage.component.html',
  styleUrl: './p007-customer-manage.component.scss'
})
export class P007CustomerManageComponent {

  visible = false;
  customerForm!: FormGroup;
  date = null;
  isEnglish = false;
  value = 1;
  currentCustomer : any =[];
  isEditing = false;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsCustomer: string[] = [ 'Name', 'Email', 'Phone', 'Location', 'Date', 'Status','popup'];

  customers: any[] = [
    {
      // id:'',
      Name: 'John Doe',
      Email: 'john.doe@example.com',
      Phone: '1234567890',
      Location: 'New York',
      Date: new Date(),
      Status: 'Active',
      // popup: ''
    }
  ]
  dataSource = new MatTableDataSource<any>(this.customers);
  selection = new SelectionModel<any>(true, []);


  statuses = ['Active', 'Inactive'];
  defaultFileList: NzUploadFile[] = [

  ];

  fileList1 = [...this.defaultFileList];
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {}
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.min(1)]],
      phone: ['', [Validators.required]],
      location: ['', [Validators.required]],
      image: ['', [Validators.required]],
      status: ['', [Validators.required]],
      // description: ['', [Validators.required]],
      // createdDate: ['', [Validators.required]],
      // expiryDate: ['', [Validators.required]],
    });
    // this.loadFormData();
  }
  onSubmit(): void {
    if (this.customerForm.valid) {
      console.log('Form Data:', this.customerForm.value);
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
    this.currentCustomer = null;
    this.isEditing = false;
    this.customerForm.reset();
    this.visible = true;
  }
  openDrawerForEdit(customer: any) :void{
    this.currentCustomer = {...customer};
    this.isEditing = true;
    this.customerForm.patchValue({
      Name: this.currentCustomer.Name,
      Email: this.currentCustomer.Email,
      Phone: this.currentCustomer.Phone,
      Location: this.currentCustomer.Location,
      Status: this.currentCustomer.Status,
      Image: this.currentCustomer.Image,
    });
    this.visible = true;
    console.log(this.currentCustomer);
  }
  saveProduct(): void{
    if (this.isEditing) {
      // Cập nhật sản phẩm
      const index = this.customers.findIndex((p) => p.name === this.currentCustomer.name);
      if (index > -1) {
        this.customers[index] = { ...this.currentCustomer };
      }
    } else {
      // Thêm sản phẩm mới
      const newProduct = { ...this.currentCustomer, id: Date.now() }; // Tạo ID giả
      this.customers.push(newProduct);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    this.customers = this.customers.filter((p) => p.id !== productId);
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
    this.currentCustomer = null;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
