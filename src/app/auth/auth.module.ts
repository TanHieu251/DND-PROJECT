import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P001RegisterComponent } from './pages/p001-register/p001-register.component';
import { P000LoginComponent } from './pages/p000-login/p000-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ResetPasswordComponent } from './shared/components/reset-password/reset-password.component';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    P000LoginComponent,
    P001RegisterComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatDialogModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzCheckboxModule,
    NzButtonModule,

  ],
})
export class AuthModule {}
