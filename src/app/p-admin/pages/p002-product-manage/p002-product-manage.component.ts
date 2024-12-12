import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ProductServicesService } from '../../shared/services/product-services.service';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { Until_check } from '../../../p-lib/until/until';

@Component({
  selector: 'app-p002-product-manage',
  templateUrl: './p002-product-manage.component.html',
  styleUrl: './p002-product-manage.component.scss',
})
export class P002ProductManageComponent implements OnInit, OnDestroy {
  visible = false;
  isEditing = false;
  currentProduct: any = null;
  productForm!: FormGroup;
  Unsubscribe = new Subject<void>();

  listOptionStatus: any[] = [];

  ListProduct: any[] = [];
  ListTypeProduct: any[] = [];

  defaultFileList: NzUploadFile[] = [];

  fileList1 = [...this.defaultFileList];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsProduct: string[] = [
    'Name',
    'Description',
    'Feature',
    'Specfication',
    'Review',
    'StockQuantity',
    'TypeData',
    'Price',
    'Image',
    'StatusName',
    'popup',
  ];

  products: any[] = [
    {
      id: 1,
      Name: 'Công tắc',
      Price: 1000,
      Type: 1,
      StatusName: 'Duyệt',
      Description: 'Công tắc điện',
      Status: 1,
      Date: new Date(),
    },
    {
      id: 2,
      Name: 'Máy biến áp',
      Price: 2000,
      Type: 2,
      StatusName: 'Ngưng',
      Description: 'Máy biến áp điện loại lớn',
      Date: new Date(),
      Status: 2,
    },
    {
      id: 3,
      Name: 'Công tắc đèn',
      Price: 10000,
      TypeData: 1,
      StatusName: 'Đang soạn',
      Description: 'Sử dụng trong các công trình dân dụng và thương mại.',
      Feature: 'Có đèn báo; thiết kế hiện đại.',
      Specfication: 'Điện áp: 220V; Công suất tối đa: 16A.',
      Review: 'Thiết kế đẹp, tiện lợi và dễ sử dụng.',
      StockQuantity: 300,
      Status: 0,
    },
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
    this.APIGetAllProduct();
    this.GetListTypeProduct();
    this.ListTypeProduct.push({ TypeData: 1, TypeName: 'Công tắc' });
    this.productForm = this.fb.group({
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Feature: [''],
      Specfication: [''],
      Review: [''],
      Price: [0, [Validators.required, Validators.min(0)]],
      StockQuantity: [0, [Validators.required, Validators.min(0)]],
      TypeData: [0, [Validators.required, Validators.min(0)]],
      Status: [0, [Validators.required, Validators.min(0)]],
      ListImages: [''],
      StatusName: ['Đang soạn'],
    });
  }
  openDrawerForCreate(): void {
    this.currentProduct = null;
    this.isEditing = false;
    this.productForm.reset();
    this.visible = true;
  }
  openDrawerForEdit(product: any): void {
    this.currentProduct = { ...product };

    this.openStatus();
    this.isEditing = true;
    this.productForm.patchValue({
      Name: this.currentProduct.Name,
      Description: this.currentProduct.Description,
      Feature: this.currentProduct.Feature,
      Price: this.currentProduct.Price,
      Specfication: this.currentProduct.Specfication,
      Review: this.currentProduct.Review,
      StockQuantity: this.currentProduct.StockQuantity,
      TypeData: this.currentProduct.TypeData,
      Type: this.currentProduct.Type,
      Status: this.currentProduct.Status,
      StatusName: this.currentProduct.StatusName,
      ListImages: this.currentProduct.ListImages,
    });
    this.visible = true;
  }
  saveProduct(): void {
    let data = this.productForm.value;
    if (!this.isEditing) {
      data = 0;
      this.APIUpdateProduct(data);
    } else {
      this.APIAddProduct(data);
    }
    this.closeDrawer();
  }
  deleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
    this.closeDrawer();
  }

  openDrawer(): void {
    this.visible = true; // Mở Drawer
  }
  closeDrawer(): void {
    this.fileList1 = [];
    this.visible = false;
    this.currentProduct = null;
  }
  openStatus() {
    this.listOptionStatus = [];
    let Status = this.currentProduct.Status;
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
  APIGetAllProduct() {
    return this.apiService
      .GetAllProduct()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.ListProduct = res.data;
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi lấy danh sách  sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi lấy danh sách  sản phẩm: ${error}`
          );
        }
      );
  }
  GetListTypeProduct() {
    return this.apiService
      .GetListTypeProduct()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.ListTypeProduct = res.data;
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi lấy danh sách loại sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi lấy danh sách loại  sản phẩm: ${error}`
          );
        }
      );
  }

  APIUpdateProduct(params: any) {
    return this.apiService
      .UpdateProduct(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Cập nhật  sản phẩm thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi cập nhật  sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi cập nhật  sản phẩm: ${error}`
          );
        }
      );
  }

  APIAddProduct(params: any) {
    return this.apiService
      .AddProduct(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Thêm mới  sản phẩm thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi thêm mới  sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi thêm mới  sản phẩm: ${error}`
          );
        }
      );
  }

  DeleteProduct(params: any) {
    return this.apiService
      .DeleteProduct(params)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.nofiService.success(` Xoá sản phẩm thành công`);
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi xoá sản phẩm: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(`Đã xảy ra lỗi khi xoá sản phẩm: ${error}`);
        }
      );
  }
  //#endregion
}
