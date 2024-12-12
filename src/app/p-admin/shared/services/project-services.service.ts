import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { environment, url } from '../../../../evironment/environment';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectServicesService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private noficiService: NotificationServiceService
  ) {}

  //#region PROJECT
  GetAllProject(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl + url.GetAllProject}`).pipe(
      map((res) => {
        if (!res) {
          this.noficiService.error('Xảy ra lỗi khi lấy danh sách dự án');
        }
        return res;
      }),
      catchError((error) => {
        this.noficiService.error(`Error when get list Project: ${error}`);
        throw error;
      })
    );
  }

  UpdateProject(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl + url.UpdateProject}`, JSON.stringify(params))
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi cập nhật dự án');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when update Project: ${error}`);
          throw error;
        })
      );
  }

  AddProject(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl + url.AddProject}`, JSON.stringify(params))
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi tạo mới dự án');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when add Project: ${error}`);
          throw error;
        })
      );
  }

  DeleteProject(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl + url.DeleteProject}`, JSON.stringify(params))
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi khi xoá dự án');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when delete Project: ${error}`);
          throw error;
        })
      );
  }
  //#endregion

  //#region TYPE Project

  GetListTypeProject(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl + url.GetListTypeProject}`).pipe(
      map((res) => {
        if (!res) {
          this.noficiService.error('Xảy ra lỗi khi lấy danh sách loại dự án');
        }
        return res;
      }),
      catchError((error) => {
        this.noficiService.error(`Error when get list Type Project: ${error}`);
        throw error;
      })
    );
  }

  UpdateTypeProject(params: any): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl + url.UpdateTypeTypeProject}`,
        JSON.stringify(params)
      )
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi cập nhật loại dự án');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when update Type Project: ${error}`);
          throw error;
        })
      );
  }

  AddTypeTypeProject(params: any): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl + url.AddTypeTypeProject}`,
        JSON.stringify(params)
      )
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi tạo mới loại dự án');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when add Type Project: ${error}`);
          throw error;
        })
      );
  }

  DeleteTypeTypeProject(params: any): Observable<any> {
    return this.http
      .post<any>(
        `${this.apiUrl + url.DeleteTypeTypeProject}`,
        JSON.stringify(params)
      )
      .pipe(
        map((res) => {
          if (!res) {
            this.noficiService.error('Xảy ra lỗi khi xoá loại dự án');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error when delete dự án: ${error}`);
          throw error;
        })
      );
  }

  //#endregion
}
