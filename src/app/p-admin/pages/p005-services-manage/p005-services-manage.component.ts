import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-p005-services-manage',
  templateUrl: './p005-services-manage.component.html',
  styleUrl: './p005-services-manage.component.scss'
})
export class P005ServicesManageComponent {

  visible = false;
  serviceForm!: FormGroup;
  date = null;
  isEnglish = false;
  isEditing = false;
  value = 1;
  currentService : any= [];

  statuses = ['Active', 'Inactive'];
  defaultFileList: NzUploadFile[] = [
  ];

  fileList1 = [...this.defaultFileList];
  // fileList2 = [...this.defaultFileList];
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {}

  @ViewChild(MatPaginator, {static: true}) paginator !: MatPaginator
  displayedColumnsServices = [ 'Name', 'Description', 'Image', 'Date','Status','popup']
  services: any[] =[
    {
      id: 'S01',
      Name: 'Service 1',
      Description: 'This is service 1',
      Date: new Date(),
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S02',
      Name: 'Service 2',
      Description: 'This is service 1',
      Date: new Date(),
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S03',
      Name: 'Service 3',
      Description: 'This is service 1',
      Date: new Date(),

      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S04',
      Name: 'Service 4',
      Description: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S05',
      Name: 'Service 5',
      Description: 'This is service 1',
      Date: new Date(),

      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S06',
      Name: 'Service 6',
      Description: 'This is service 1',
      Date: new Date(),

      Image: 'https://picsum.photos/200/300',
      popup: true
    },
  ]
  dataSource = new MatTableDataSource<any>(this.services);
  selection = new SelectionModel<any>(true, []);


  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      name: ['', [Validators.required]],
      // describetion: ['', [Validators.required, Validators.min(1)]],
      // category: ['', [Validators.required]],
      status: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdDate: ['', [Validators.required]],
      // expiryDate: ['', [Validators.required]],
    });
    // this.loadFormData();
  }
  openDrawerForCreate(): void{
    this.currentService = null;
    this.isEditing = false;
    this.serviceForm.reset();
    this.visible = true;
  }
  openDrawerForEdit(product: any) :void{
    this.currentService = {...product};
    this.isEditing = true;
    this.serviceForm.patchValue({
      Name: this.currentService.Name,
      Description: this.currentService.Description,
      Price: this.currentService.Price,
      Type: this.currentService.Type,
      Status: this.currentService.Status,
      Image: this.currentService.Image,
    });
    this.visible = true;
  }
  saveProduct(): void{
    if (this.isEditing) {
      // Cập nhật sản phẩm
      const index = this.services.findIndex((p) => p.name === this.currentService.name);
      if (index > -1) {
        this.services[index] = { ...this.currentService };
      }
    } else {
      // Thêm sản phẩm mới
      const newProduct = { ...this.currentService, id: Date.now() }; // Tạo ID giả
      this.services.push(newProduct);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    this.services = this.services.filter((p) => p.id !== productId);
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
    this.currentService = null;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
