import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-p003-project-manage',
  templateUrl: './p003-project-manage.component.html',
  styleUrl: './p003-project-manage.component.scss'
})
export class P003ProjectManageComponent {

  visible = false;
  isEditing = false;
  currentProject : any = null;
  projectForm!: FormGroup;
  date = null;
  value = 0;

  defaultFileList: NzUploadFile[] = [
  ];

  fileList1 = [...this.defaultFileList];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsProject: string[] = [ 'Name', 'Description', 'Date', 'Image', 'Status', 'popup'];

  projects: any[] = [
    {
      // id:'P01',
      Name: 'project new',
      Description: 'This project',
      Date: Date.now(),
      Image: 'content',
      Status: 'Active'
    },
    {
      // id:'P01',
      Name: 'project new',
      Description: 'This project',
      Date: Date.now(),
      Image: 'content',
      Status: 'Active'

    },
  ]
  dataSource = new MatTableDataSource<any>(this.projects);
  selection = new SelectionModel<any>(true, []);



  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      // Price: [0, [Validators.required, Validators.min(0)]],
      Type: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      Image: [''],
    });
  }
  openDrawerForCreate(): void{
    this.currentProject = null;
    this.isEditing = false;
    this.projectForm.reset();
    this.visible = true;
  }
  openDrawerForEdit(product: any) :void{
    this.currentProject = {...product};
    this.isEditing = true;
    this.projectForm.patchValue({
      Name: this.currentProject.Name,
      Description: this.currentProject.Description,
      Price: this.currentProject.Price,
      Type: this.currentProject.Type,
      Status: this.currentProject.Status,
      Image: this.currentProject.Image,
    });
    this.visible = true;
  }
  saveProduct(): void{
    if (this.isEditing) {
      // Cập nhật sản phẩm
      const index = this.projects.findIndex((p) => p.name === this.currentProject.name);
      if (index > -1) {
        this.projects[index] = { ...this.currentProject };
      }
    } else {
      // Thêm sản phẩm mới
      const newProduct = { ...this.currentProject, id: Date.now() }; // Tạo ID giả
      this.projects.push(newProduct);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    this.projects = this.projects.filter((p) => p.id !== productId);
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
    this.currentProject = null;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
