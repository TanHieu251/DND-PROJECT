import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthServiceService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.onGetToken()) {
      const cloned = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + this.authService.onGetToken()
        ),
      });
      return next.handle(cloned); 
    }
    return next.handle(req);
  }
}