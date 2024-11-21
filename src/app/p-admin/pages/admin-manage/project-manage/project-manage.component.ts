import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-project-manage',
  templateUrl: './project-manage.component.html',
  styleUrl: './project-manage.component.scss'
})
export class ProjectManageComponent {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsProject: string[] = ['id', 'title', 'content', 'date', 'image','popup'];

  projects: any[] = [
    {
      id:'P01',
      title: 'project new',
      content: 'This project',
      date: Date.now(),
      image: 'content',
    },
    {
      id:'P01',
      title: 'project new',
      content: 'This project',
      date: Date.now(),
      image: 'content'
    },
  ]
  dataSource = new MatTableDataSource<any>(this.projects);
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
