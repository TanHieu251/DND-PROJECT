import { Injectable } from '@angular/core';
import { environment, url } from '../../../../evironment/environment';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServicesService {
  apiUrl: string = environment.apiUrl;
  private tokenKey = 'token';

  constructor(
    private http: HttpClient,
    private noficiService: NotificationServiceService
  ) {}

  //#region TYPE PRODUCT

  GetListTypeProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl + url.GetListTypeProduct}`).pipe(
      map((res) => {
        if (!res) {
          this.noficiService.error(
            'Xảy ra lỗi khi lấy danh sách loại sản phẩm'
          );
        }
        return res;
      }),
      catchError((error) => {
        this.noficiService.error(`Error when get list Type Product: ${error}`);
        throw error;
      })
    );
  }

  //#endregion
}
