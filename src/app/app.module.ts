
import { provideHttpClient } from '@angular/common/http';
import { PWebModule } from './p-web/p-web.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, PWebModule],
  // exports:[RouterModule],
  providers: [provideHttpClient()],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
