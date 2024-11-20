import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-customer-manage',
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.scss'
})
export class CustomerManageComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsCustomer: string[] = ['id', 'name', 'email', 'phone', 'location','popup'];

  customers: any[] = [
    {
      id:'',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      location: 'New York'
    }
  ]
  dataSource = new MatTableDataSource<any>(this.customers);
  selection = new SelectionModel<any>(true, []);
  visible = false;
  productForm!: FormGroup;
  date = null;
  isEnglish = false;
  value = 1;

  statuses = ['Active', 'Inactive'];
  defaultFileList: NzUploadFile[] = [

  ];

  fileList1 = [...this.defaultFileList];
  fileList2 = [...this.defaultFileList];
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {}
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      category: ['', [Validators.required]],
      status: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdDate: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
    });
    // this.loadFormData();
  }

  openDrawer(): void {
    this.visible = true; // Mở Drawer
  }
  closeDrawer(): void {
    this.visible = false; // Đóng Drawer
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Form Data:', this.productForm.value);
      this.closeDrawer();
    }
  }
  onImageChange(event: any): void {
    // Handle image file change
    console.log(event.target.files);
  }
  close(){}
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}

