import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';

// import { ProductManageComponent

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss'],
})
export class ProductManageComponent implements OnInit {
  visible = false;
  productForm!: FormGroup;
  date = null;
  isEnglish = false;
  value = 1;
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {}
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsProducts: string[] = [
    'id',
    'name',
    'category',
    'price',
    'status',
    'image',
    'popup',
  ];

  products: any[] = [
    {
      id: 'DND01',
      name: 'Sản phẩm A',
      price: 100000,
      category: 'Loại 1',
      status: 'Còn hàng',
      image: 'path-to-image',
    },
  ];

  dataSource = new MatTableDataSource<any>(this.products);
  selection = new SelectionModel<any>(true, []);

  statuses = ['Active', 'Inactive'];
  defaultFileList: NzUploadFile[] = [];

  fileList1 = [...this.defaultFileList];

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
    this.visible = true;
  }
  closeDrawer(): void {
    this.visible = false;
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

  close() {
    this.closeDrawer();
  }
  
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
