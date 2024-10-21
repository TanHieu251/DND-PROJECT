import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, url } from '../../../../evironment/environment';
import { DTOLogin } from '../DTO/DTOLogin';
import { catchError, map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { DTORegister } from '../DTO/DTORegister';
import { DTOResetPassword } from '../DTO/DTOResetPassword';
import { NotificationServiceService } from '../../../p-lib/services/notification-service.service';
import { DTOAuthResponse } from '../DTO/DTOAuthResponse';
import { Until_check } from '../../../p-lib/until/until';
// import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // common
  apiUrl: string = environment.apiUrl;
  private tokenKey = 'token';

  constructor(
    private http: HttpClient,
    private noficiService: NotificationServiceService
  ) {}

  //#region LOGIN
  onLogin(data: DTOLogin): Observable<DTOAuthResponse> {
    return this.http.post(`${this.apiUrl + url.login}`, data).pipe(
      map((res: any) => {
        if (Until_check.hasListValue(res)) {
          localStorage.setItem(this.tokenKey, res.token);
          return res;
        }
      })
    );
  }

  //#region TOKEN

  isLoggedIn(): boolean {
    const token = this.onGetToken();
    if (!Until_check.hasValueString(token)) return false;
    return !this.isTokenExpired();
  }

  private isTokenExpired() {
    const token = this.onGetToken();
    if (!token) return true;
    const decoded = jwtDecode(token);
    const isTokenExpired = Date.now() >= decoded['exp']! * 1000;
    if (isTokenExpired) this.onLogout();
    return isTokenExpired;
  }

  public onGetToken(): string | null {
    return localStorage.getItem(this.tokenKey || '');
  }

  //#endregion

  //#region LOGOUT
  onLogout() {
    localStorage.removeItem(this.tokenKey);
  }
  //#endregion

  //#endregion

  //#region REGISTER

  onRegister(req: DTORegister) {
    return this.http.post(`${this.apiUrl + url.register}`, req).pipe(
      map((res: any) => {
        if (Until_check.hasListValue(res)) {
          return res;
        }
      })
    );
  }
  //#endregion

  //#region PASSWORD

  /**
   * API QUÊN MẬT KHẨU
   * @param email EMAIL
   * @returns
   */
  forgotPassword(email: string): Observable<DTOAuthResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<any>(`${this.apiUrl + url.forgotPassword}`, email, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          if (Until_check.hasListValue(res)) return res;
          else return null;
        })
      );
  }

  /**
   * API CẬP NHẬT MẬT KHẨU
   * @param req DTO RESET PASSWORD
   * @returns
   */
  resetPassword(req: DTOResetPassword): Observable<DTOResetPassword> {
    return this.http
      .post<DTOResetPassword>(`${this.apiUrl + url.resetPassword}`, req)
      .pipe(
        map((res) => {
          if (!res) {
            throw new Error('No response received from the server');
          }
          return res;
        }),
        catchError((error) => {
          this.noficiService.error(`Error resetting password: ${error}`);
          throw error;
        })
      );
  }
  //#endregion
}
