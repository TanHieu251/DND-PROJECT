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

  //#region PRODUCT
  GetAllProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl + url.GetAllProduct}`).pipe(
      map((res) => {
        if (!res) {
          this.noficiService.error('Xảy ra lỗi khi lấy danh sách sản phẩm');
        }
        return res;
      }),
      catchError((error) => {
        this.noficiService.error(`Error when get list Product: ${error}`);
        throw error;
      })
    );
  }

  UpdateProduct(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl + url.UpdateProduct}`, JSON.stringify(params))
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi cập nhật sản phẩm');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when update Product: ${error}`);
          throw error;
        })
      );
  }

  AddProduct(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl + url.AddProduct}`, JSON.stringify(params))
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi tạo mới sản phẩm');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when add Product: ${error}`);
          throw error;
        })
      );
  }

  DeleteProduct(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl + url.DeleteProduct}`, JSON.stringify(params))
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi khi xoá sản phẩm');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when delete Product: ${error}`);
          throw error;
        })
      );
  }
  //#endregion

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

  UpdateTypeProduct(params: any): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl + url.UpdateTypeProduct}`,
        JSON.stringify(params)
      )
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi cập nhật loại sản phẩm');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when update Type Product: ${error}`);
          throw error;
        })
      );
  }

  AddTypeProduct(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl + url.AddTypeProduct}`, JSON.stringify(params))
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi tạo mới loại sản phẩm');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when add Type Product: ${error}`);
          throw error;
        })
      );
  }

  DeleteTypeProduct(params: any): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl + url.DeleteTypeProduct}`,
        JSON.stringify(params)
      )
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi khi xoá loại sản phẩm');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when delete Type Product: ${error}`);
          throw error;
        })
      );
  }

  //#endregion
}
