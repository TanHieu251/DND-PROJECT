import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrl: './news-manage.component.scss'
})
export class NewsManageComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsNews: string[] = ['id', 'Title','Content', 'Date', 'Image', 'Caption','popup'];
  news: any[] =[
    {
      id:'N01',
      Title:'News Title',
      Content:'News Content',
      Date:'2020-01-01',
      Image:'https://example.com/image.jpg',
      Caption:'News Caption'

    }
  ]
  dataSource = new MatTableDataSource<any>(this.news);
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
