import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-service-manage',
  templateUrl: './service-manage.component.html',
  styleUrl: './service-manage.component.scss'
})
export class ServiceManageComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator !: MatPaginator
  displayedColumnsServices = ['id', 'Title', 'Content', 'Image', 'popup']
  services: any[] =[
    {
      id: 'S01',
      Title: 'Service 1',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S02',
      Title: 'Service 2',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S03',
      Title: 'Service 3',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S04',
      Title: 'Service 4',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S05',
      Title: 'Service 5',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S06',
      Title: 'Service 6',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
  ]
  dataSource = new MatTableDataSource<any>(this.services);
  selection = new SelectionModel<any>(true, []);

  visible = false;
  projectForm!: FormGroup;
  date = null;
  isEnglish = false;
  value = 1;

  statuses = ['Active', 'Inactive'];
  defaultFileList: NzUploadFile[] = [
  ];

  fileList1 = [...this.defaultFileList];
  // fileList2 = [...this.defaultFileList];
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {}
  ngOnInit(): void {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required]],
      // describetion: ['', [Validators.required, Validators.min(1)]],
      category: ['', [Validators.required]],
      status: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdDate: ['', [Validators.required]],
      // expiryDate: ['', [Validators.required]],
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
    if (this.projectForm.valid) {
      console.log('Form Data:', this.projectForm.value);
      this.closeDrawer();
    }
  }
  onImageChange(event: any): void {
    // Handle image file change
    console.log(event.target.files);
  }
  // close(){}
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}
