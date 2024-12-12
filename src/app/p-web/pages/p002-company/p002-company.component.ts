import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CompanyServiceService } from '../../shared/service/company-service.service';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { Until_check } from '../../../p-lib/until/until';

@Component({
  selector: 'app-p002-company',
  templateUrl: './p002-company.component.html',
  styleUrls: ['./p002-company.component.scss'],
})
export class P002CompanyComponent implements OnInit, OnDestroy {
  Unsubscribe = new Subject<void>();
  dataCompany: any = {};

  constructor(
    private companyService: CompanyServiceService,
    private nofiService: NotificationServiceService
  ) {}

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  ngOnInit(): void {
    this.APIGetCompany();
  }
  //#region API
  APIGetCompany() {
    return this.companyService
      .GetCompany()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.dataCompany = res.data;
          } else {
            this.nofiService.error(
              `Đã xảy ra lỗi khi lấy danh sách chính sách: ${res.ErrorString}`
            );
          }
        },
        (error) => {
          this.nofiService.error(
            `Đã xảy ra lỗi khi lấy danh sách chính sách: ${error}`
          );
        }
      );
  }
  //#endregion
}
