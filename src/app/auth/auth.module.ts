import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P001RegisterComponent } from './pages/p001-register/p001-register.component';
import { P000LoginComponent } from './pages/p000-login/p000-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    P000LoginComponent,
    P001RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
    
  ],
  
})
export class AuthModule { }
