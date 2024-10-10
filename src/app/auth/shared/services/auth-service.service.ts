import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, url } from '../../../../evironment/environment';
import { DTOLogin } from '../DTO/DTOLogin';
import { map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
// import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // common
  apiUrl: string = environment.apiUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  onLogin(data: DTOLogin): Observable<any> {
    return this.http.post(`${this.apiUrl+url.login}`, data).pipe(
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

private  isTokenExpired() {
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

  private onGetToken(): string | null {
    return localStorage.getItem(this.tokenKey || '');
  }
}
