import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P001RegisterComponent } from './pages/p001-register/p001-register.component';
import { P000LoginComponent } from './pages/p000-login/p000-login.component';



@NgModule({
  declarations: [
    P000LoginComponent,
    P001RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
