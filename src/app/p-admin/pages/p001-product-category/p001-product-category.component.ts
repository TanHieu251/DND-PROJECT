import { Component } from '@angular/core';
import { ProductServicesService } from '../../shared/services/product-services.service';
import { Until_check } from '../../../p-lib/until/until';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';

@Component({
  selector: 'app-p001-product-category',
  templateUrl: './p001-product-category.component.html',
  styleUrl: './p001-product-category.component.scss',
})
export class P001ProductCategoryComponent {
  data = [
    {
      Name: 'Công tắc',
      Status: 0,
      StatusName: 'Đang soạn thảo',
    },

    {
      Name: 'Tủ',
      Status: 1,
      StatusName: 'Đang soạn thảo',
    },
    {
      Name: 'Áp suất',
      Status: 2,
      StatusName: 'Đang soạn thảo',
    },
  ];

  //common
  ListTypeProduct: any[] = [];
  dataItem: any = {};
  ListStatusOption: any[] = [];
  isDrawerOpen: boolean = false;
  isAddNew: boolean = false;

  //table
  displayedColumns: string[] = ['Name', 'Status', 'StatusName', 'popup'];

  constructor(
    private apiService: ProductServicesService,
    private notifiService: NotificationServiceService
  ) {}

  //#region Table
  onClickAction(e: any) {
    this.dataItem = JSON.parse(JSON.stringify(e));
    this.toggleDrawer();
  }
  //#endregion

  //#region HANDLE
  onAddNew() {
    this.isAddNew = true;
    this.dataItem = {};
    this.isDrawerOpen = true;
  }
  onUpdate() {
    this.isAddNew = false;
    this.isDrawerOpen = false;
    this.dataItem.DateTime = new Date();
    console.log(this.dataItem);
  }
  onDelete() {
    console.log(this.dataItem);
  }
  onChangeStatus() {
    this.dataItem.Status = 1;
    this.dataItem.StatusName = 'Duyệt';

    console.log(this.dataItem);
  }

  onGetStatusOption() {
    this.ListStatusOption = [];
    let Status = this.dataItem.Status;

    if (Status == 0) {
      this.ListStatusOption.push({
        Status: 1,
        StatusName: 'Duyệt',
      });
    }
    if (Status == 1) {
      this.ListStatusOption.push({
        Status: 1,
        StatusName: 'Ngưng',
      });
    }
    if (Status == 2) {
      this.ListStatusOption.push({
        Status: 0,
        StatusName: 'Đang soạn',
      });
    }
    return this.ListStatusOption;
  }

  //#endregion

  //#region DRAWER
  toggleDrawer() {
    this.onGetStatusOption();
    this.isDrawerOpen = !this.isDrawerOpen;
    this.isAddNew = false;
  }

  //#region API

  /**
   *
   * @param data
   */
  APIGetListTypeProduct() {
    this.apiService.GetListTypeProduct().subscribe(
      (res: any) => {
        if (Until_check.hasListValue(res)) {
          this.notifiService.success('Đăng hập thành công');
          this.ListTypeProduct = res.data;
        } else {
          this.notifiService.error('Lấy danh sách không thành công');
        }
      },
      (error) => {
        this.notifiService.error('Đã xảy ra lỗi khi lấy danh sách', error);
      }
    );
  }
  //#endregion

  //#endregion
}
