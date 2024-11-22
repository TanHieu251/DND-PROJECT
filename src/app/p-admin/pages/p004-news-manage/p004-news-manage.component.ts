import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-p004-news-manage',
  templateUrl: './p004-news-manage.component.html',
  styleUrl: './p004-news-manage.component.scss'
})
export class P004NewsManageComponent {

  visible = false;
  newForm!: FormGroup;
  date = null;
  isEnglish = false;
  currentNews : any =[];
  isEditing = false;
  value = 1;
  statuses = ['Active', 'Inactive'];
  defaultFileList: NzUploadFile[] = [
  ];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsNews: string[] = ['Name','Description', 'Date', 'Image', 'Caption', 'Status','popup'];
  news: any[] =[
    {
      // id:'N01',
      Name:'News Title',
      Description:'News Content',
      Date:new Date(),
      Image:'https://example.com/image.jpg',
      Caption:'News Caption',
      Status:'ACtive',
    }
  ]
  dataSource = new MatTableDataSource<any>(this.news);
  selection = new SelectionModel<any>(true, []);



  fileList1 = [...this.defaultFileList];
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {}
  ngOnInit(): void {
    this.newForm = this.fb.group({
      name: ['', [Validators.required]],
      // describetion: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      image: ['', [Validators.required]],
      // description: ['', [Validators.required]],
      createdDate: ['', [Validators.required]],
      // expiryDate: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.newForm.valid) {
      console.log('Form Data:', this.newForm.value);
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
    this.currentNews = null;
    this.isEditing = false;
    this.newForm.reset();
    this.visible = true;
  }
  openDrawerForEdit(customer: any) :void{
    this.currentNews = {...customer};
    this.isEditing = true;
    this.newForm.patchValue({
      Name: this.currentNews.Name,
      Description: this.currentNews.Description,
      Caption: this.currentNews.Caption,
      // Location: this.currentNews.Location,
      Status: this.currentNews.Status,
      Image: this.currentNews.Image,
    });
    this.visible = true;
    console.log(this.currentNews);
  }
  saveProduct(): void{
    if (this.isEditing) {
      // Cập nhật sản phẩm
      const index = this.news.findIndex((p) => p.name === this.currentNews.name);
      if (index > -1) {
        this.news[index] = { ...this.currentNews };
      }
    } else {
      // Thêm sản phẩm mới
      const newProduct = { ...this.currentNews, id: Date.now() }; // Tạo ID giả
      this.news.push(newProduct);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    this.news = this.news.filter((p) => p.id !== productId);
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
    this.currentNews = null;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
