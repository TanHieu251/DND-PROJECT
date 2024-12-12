import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MatPaginator } from '@angular/material/paginator';
import { ProductServicesService } from '../../shared/services/product-services.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';

@Component({
  selector: 'app-p001-product-category',
  templateUrl: './p001-product-category.component.html',
  styleUrl: './p001-product-category.component.scss',
})
export class P001ProductCategoryComponent implements OnInit, OnDestroy {
  visible = false;
  isEditing = false;
  currentCategory: any = null;
  categoryForm!: FormGroup;

  Unsubscribe = new Subject<void>();

  listOptionStatus: any[] = [];

  listTypeProduct: any[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsCategoryProduct: string[] = ['Name', 'StatusName', 'popup'];

  productCategories: any[] = [
    { Name: 'Cong tac', Status: 0, StatusName: 'Đang soạn' },
    { Name: 'O cam', Status: 1, StatusName: 'Duyệt' },
    { Name: 'Cau dao', Status: 2, StatusName: 'Ngưng' },
    { Name: 'Đèn', Status: 0, StatusName: 'Đang soạn' },
  ];
  constructor(
    private fb: FormBuilder,
    private apiService: ProductServicesService,
    private nofiService: NotificationServiceService
  ) {}
  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  ngOnInit(): void {
    this.APIGetTypeProduct();
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
  openDrawerForEdit(product: any): void {
    this.currentCategory = { ...product };
    this.openStatus();

    this.isEditing = true;
    this.categoryForm.patchValue({
      Name: product.Name,
      Status: product.Status,
      StatusName: product.StatusName,
    });
    this.visible = true;
    console.log(this.currentCategory);
  }
  saveProduct(): void {
    let data = this.categoryForm.value;
    if (!this.isEditing) {
      data = 0;
      this.APIUpdateTypeProduct(data);
    } else {
      this.APIAddTypeProduct(data);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    // this.productCategories = this.productCategories.filter(
    //   (p) => p.id !== productId
    // );
    this.APIDeleteTypeProduct(productId);
    this.closeDrawer();
  }

  closeDrawer(): void {
    this.visible = false;
    this.currentCategory = null;
  }

  openStatus() {
    this.listOptionStatus = [];
    let Status = this.currentCategory.Status;
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
  APIGetTypeProduct() {
    return this.apiService
      .GetListTypeProduct()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.listTypeProduct = res.data;
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi lấy danh sách loại sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi lấy danh sách loại sản phẩm: ${error}`
          );
        }
      );
  }

  APIUpdateTypeProduct(params: any) {
    return this.apiService
      .UpdateTypeProduct(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Cập nhật loại sản phẩm thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi cập nhật loại sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi cập nhật loại sản phẩm: ${error}`
          );
        }
      );
  }

  APIAddTypeProduct(params: any) {
    return this.apiService
      .AddTypeProduct(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Thêm mới loại sản phẩm thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi thêm mới loại sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi thêm mới loại sản phẩm: ${error}`
          );
        }
      );
  }

  APIDeleteTypeProduct(params: any) {
    return this.apiService
      .DeleteTypeProduct(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Xoá loại sản phẩm thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi xoá loại sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi xoá loại sản phẩm: ${error}`
          );
        }
      );
  }
  //#endregion
}
