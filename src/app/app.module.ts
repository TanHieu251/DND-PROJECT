import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { PWebModule } from './p-web/p-web.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './auth/shared/guard/interceptor/auth.interceptor';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  NzNotificationServiceModule,
  NzNotificationModule,
} from 'ng-zorro-antd/notification';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PWebModule,
    NzNotificationServiceModule,
    NzNotificationModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
