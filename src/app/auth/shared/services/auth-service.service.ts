import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, url } from '../../../../evironment/environment';
import { DTOLogin } from '../DTO/DTOLogin';
import { catchError, map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { DTORegister } from '../DTO/DTORegister';
import { DTOResetPassword } from '../DTO/DTOResetPassword';
// import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // common
  apiUrl: string = environment.apiUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  //#region LOGIN
  onLogin(data: DTOLogin): Observable<any> {
    return this.http.post(`${this.apiUrl + url.login}`, data).pipe(
      map((res: any) => {
        if (res) {
          localStorage.setItem(this.tokenKey, res.token);
          return res;
        }
      })
    );
  }

  isLoggedIn(): boolean {
    const token = this.onGetToken();
    if (!token) return false;
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

  onLogout() {
    localStorage.removeItem(this.tokenKey);
  }

  public onGetToken(): string | null {
    return localStorage.getItem(this.tokenKey || '');
  }

  //#endregion

  //#region REGISTER
  onRegister(req: DTORegister) {
    return this.http.post(`${this.apiUrl + url.register}`, req).pipe(
      map((res: any) => {
        if (res) {
          return res;
        }
      })
    );
  }
  //#endregion

  //#region PASSWORD
  forgotPassword(email: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<any>(`${this.apiUrl + url.forgotPassword}`, email, {
        headers: headers,
      })
      .pipe(
        map((res) => {
          if (res) return res;
          else return null;
        })
      );
  }

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
          console.error('Error resetting password:', error);
          throw error;
        })
      );
  }
  //#endregion
}
