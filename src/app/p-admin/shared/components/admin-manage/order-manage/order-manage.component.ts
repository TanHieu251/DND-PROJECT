import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { zh_CN, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrl: './order-manage.component.scss'
})
export class OrderManageComponent implements OnInit {
  visible = false;
  productForm!: FormGroup;
  date = null;
  isEnglish = false;
  value = 1;
  fb: any;
  i18n: any;

  @ViewChild(MatPaginator, {static:true}) paginator !: MatPaginator
  displayedColumnsOrder: string[] = ['id', 'name', 'price', 'Payment', 'Total', 'status', 'popup'];
  orders: any[] = [
    {
      id: 'ODR01',
      name: 'Order 1',
      price: '10000',
      payment: 'Cash',
      total: '10000',
      status: 'Pending',
      // action: 'Detail'
    }
  ]
  ngOnInit(): void {
    this.productForm = this.fb.group({

    });
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
