import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';
import { ProjectServicesService } from '../../shared/services/project-services.service';

@Component({
  selector: 'app-p009-project-category',
  templateUrl: './p009-project-category.component.html',
  styleUrl: './p009-project-category.component.scss',
})
export class P009ProjectCategoryComponent implements OnInit, OnDestroy {
  visible = false;
  isEditing = false;
  currentCategory: any = null;
  categoryForm!: FormGroup;
  Unsubscribe = new Subject<void>();
  listTypeProject: any[] = [];

  listOptionStatus: any[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsCategoryProduct: string[] = ['Name', 'StatusName', 'popup'];

  productCategories: any[] = [
    { Name: 'Năng lượng mặt trời', Status: 0, StatusName: 'Đang soạn' },
    // { Name: 'O cam', Status: 1, StatusName: 'Duyệt' },
    // { Name: 'Cau dao', Status: 2, StatusName: 'Ngưng' },
  ];
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
    this.categoryForm = this.fb.group({
      Name: ['', Validators.required],
      Status: ['', Validators.required],
      StatusName: ['', Validators.required],
    });
  }

  openDrawerForCreate(): void {
    this.currentCategory = null;
    this.isEditing = false;
    this.visible = true;
    this.categoryForm.reset();
  }
  openDrawerForEdit(project: any): void {
    this.currentCategory = { ...project };
    this.openStatus();

    this.isEditing = true;
    this.categoryForm.patchValue({
      Name: project.Name,
      Status: project.Status,
      StatusName: project.StatusName,
    });
    this.visible = true;
  }
  saveProduct(): void {
    let data = this.categoryForm.value;
    if (!this.isEditing) {
      data = 0;
      this.APIUpdateTypeProject(data);
    } else {
      this.APIAAddTypeTypeProject(data);
    }
    this.closeDrawer();
  }

  deleteProduct(productId: number): void {
    this.productCategories = this.productCategories.filter(
      (p) => p.id !== productId
    );
    this.closeDrawer();
  }

  closeDrawer(): void {
    this.visible = false;
    this.currentCategory = null;
  }

  openStatus() {
    this.listOptionStatus = [];
    let Status = this.currentCategory.Status;
    console.log(Status);
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

  //#region API
  APIGetListTypeProject() {
    return this.apiService
      .GetListTypeProject()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.listTypeProject = res.data;
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi lấy danh sách loại dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi lấy danh sách loại dựi án: ${error}`
          );
        }
      );
  }

  APIUpdateTypeProject(params: any) {
    return this.apiService
      .UpdateTypeProject(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Cập nhật loại dự án thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi cập nhật loại dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi cập nhật loại dự án: ${error}`
          );
        }
      );
  }

  APIAAddTypeTypeProject(params: any) {
    return this.apiService
      .AddTypeTypeProject(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Thêm mới loại dự án thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi thêm mới loại dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi thêm mới loại dự án: ${error}`
          );
        }
      );
  }

  APIDeleteTypeTypeProject(params: any) {
    return this.apiService
      .DeleteTypeTypeProject(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Xoá loại dự án thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi xoá loại dự án: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(`Đã xảy ra lỗi khi xoá loại dự án: ${error}`);
        }
      );
  }
  //#endregion
}
