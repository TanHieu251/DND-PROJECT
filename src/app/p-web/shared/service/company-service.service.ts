import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment, url } from '../../../../evironment/environment';
import { HttpClient } from '@angular/common/http';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private noficiService: NotificationServiceService
  ) {}

  GetCompany(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl + url.GetCompany}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        this.noficiService.error(`Error when get list Type Product: ${error}`);
        throw error;
      })
    );
  }
}
