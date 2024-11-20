import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent implements OnInit {
  visible = false;
  projectForm!: FormGroup;
  date = null;
  isEnglish = false;

  statuses = ['Active', 'Inactive'];
  defaultFileList: NzUploadFile[] = [
    // {
    //   uid: '-1',
    //   name: 'xxx.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    // },
    // {
    //   uid: '-2',
    //   name: 'yyy.png',
    //   status: 'error'
    // }
  ];

  fileList1 = [...this.defaultFileList];
  fileList2 = [...this.defaultFileList];
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {}
  ngOnInit(): void {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.min(1)]],
      // category: ['', [Validators.required]],
      // status: ['', [Validators.required]],
      image: ['', [Validators.required]],
      // description: ['', [Validators.required]],
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
  close(){}
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}
