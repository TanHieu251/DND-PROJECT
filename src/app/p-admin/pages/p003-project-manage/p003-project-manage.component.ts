import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { SelectionModel } from '@angular/cdk/collections';
import { ProjectServicesService } from '../../shared/services/project-services.service';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';

@Component({
  selector: 'app-p003-project-manage',
  templateUrl: './p003-project-manage.component.html',
  styleUrl: './p003-project-manage.component.scss',
})
export class P003ProjectManageComponent implements OnInit, OnDestroy {
  visible = false;
  isEditing = false;
  currentProject: any = null;
  projectForm!: FormGroup;
  Unsubscribe = new Subject<void>();
  ListProject: any[] = [];
  ListTypeProject: any[] = [];
  listOptionStatus: any[] = [];

  defaultFileList: NzUploadFile[] = [];

  fileList1 = [...this.defaultFileList];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsProject: string[] = [
    'Name',
    'Description',
    'Feature',
    'TypeData',
    // 'DateStart',
    // 'DateEnd',
    'StatusName',
    'popup',
  ];

  projects: any[] = [
    {
      // id:'P01',
      Name: 'Năng lượng mặt trời công ty ABC',
      Description: 'Năng lượng mặt trời tại công ty ABC ',
      ListImages: '',
      StatusName: 'Đang soạn',
      TypeData: 1,
      Feature: 'Chi phí 3 triệu USD',
      Status: 0,
    },
    // {
    //   // id:'P01',
    //   Name: 'project new',
    //   Description: 'This project',
    //   Date: Date.now(),
    //   ListImages: 'content',
    //   StatusName: 'Ngưng',
    //   Status: '2',
    // },
  ];
  dataSource = new MatTableDataSource<any>(this.projects);
  selection = new SelectionModel<any>(true, []);

  constructor(
    private fb: FormBuilder,
    private apiService: ProjectServicesService,
    private nofiService: NotificationServiceService
  ) {}
  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  ngOnInit(): void {
    this.APIGetAllProject();
    this.APIGetListTypeProject();
    this.ListTypeProject.push({ TypeData: 1, TypeName: 'Năng lượng mặt trời' });
    this.projectForm = this.fb.group({
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Feature: [''],
      // Price: [0, [Validators.required, Validators.min(0)]],
      TypeData: [0, [Validators.required, Validators.min(0)]],
      Status: [0, [Validators.required, Validators.min(0)]],
      StatusName: ['Đang soạn'],
      // DateStart: [Date],
      // DateEnd: [Date],
      ListImages: [''],
    });
  }
  openDrawerForCreate(): void {
    this.currentProject = null;
    this.isEditing = false;
    this.projectForm.reset();
    this.visible = true;
  }
  openDrawerForEdit(product: any): void {
    this.currentProject = { ...product };
    this.openStatus();
    this.isEditing = true;
    this.projectForm.patchValue({
      Name: this.currentProject.Name,
      Description: this.currentProject.Description,
      Price: this.currentProject.Price,
      Feature: this.currentProject.Feature,
      DateStart: this.currentProject.DateStart,
      DateEnd: this.currentProject.DateEnd,
      TypeData: this.currentProject.TypeData,
      Status: this.currentProject.Status,
      StatusName: this.currentProject.StatusName,
      ListImages: this.currentProject.ListImages,
    });
    this.visible = true;
  }
  saveProduct(): void {
    let data = this.projectForm.value;
    if (!this.isEditing) {
      data = 0;
      this.APIUpdateProject(data);
    } else {
      this.APIAAddProject(data);
    }
    // this.closeDrawer();
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    // this.projects = this.projects.filter((p) => p.id !== productId);
    this.APIDeleteProject(productId);
    this.closeDrawer();
  }

  close() {
    this.visible = false;
  }
  openDrawer(): void {
    this.visible = true; // Mở Drawer
  }
  closeDrawer(): void {
    this.visible = false;
    this.currentProject = null;
  }

  openStatus() {
    this.listOptionStatus = [];
    let Status = this.currentProject.Status;
    if (Status == 0) {
      this.listOptionStatus.push({
        Status: 0,
        StatusName: 'Đang soạn',
      });
      this.listOptionStatus.push({
        Status: 1,
        StatusName: 'Duyệt',
      });
    }
    if (Status == 1) {
      this.listOptionStatus.push({
        Status: 1,
        StatusName: 'Duyệt',
      });
      this.listOptionStatus.push({
        Status: 2,
        StatusName: 'Ngưng',
      });
    }
    if (Status == 2) {
      this.listOptionStatus.push({
        Status: 1,
        StatusName: 'Duyệt',
      });
      this.listOptionStatus.push({
        Status: 2,
        StatusName: 'Ngưng',
      });
    }

    return this.listOptionStatus;
  }

  APIGetAllProject() {
    return this.apiService
      .GetAllProject()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.ListProject = res.data;
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi lấy danh sách  dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi lấy danh sách  dự án: ${error}`
          );
        }
      );
  }

  APIGetListTypeProject() {
    return this.apiService
      .GetListTypeProject()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.ListTypeProject = res.data;
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi lấy danh sách loại dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi lấy danh sách loại  dự án: ${error}`
          );
        }
      );
  }

  APIUpdateProject(params: any) {
    return this.apiService
      .UpdateProject(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Cập nhật dự án thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi cập nhật dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(`Đã xảy ra lỗi khi cập nhật dự án: ${error}`);
        }
      );
  }

  APIAAddProject(params: any) {
    return this.apiService
      .AddProject(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Thêm mới dự án thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi thêm mới dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(`Đã xảy ra lỗi khi thêm mới dự án: ${error}`);
        }
      );
  }

  APIDeleteProject(params: any) {
    return this.apiService
      .DeleteProject(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Xoá dự án thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi xoá dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(`Đã xảy ra lỗi khi xoá dự án: ${error}`);
        }
      );
  }
}
