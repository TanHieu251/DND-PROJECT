import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../shared/services/auth-service.service';
import { DTOLogin } from '../../shared/DTO/DTOLogin';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { P001RegisterComponent } from '../p001-register/p001-register.component';
import { ResetPasswordComponent } from '../../shared/components/reset-password/reset-password.component';

@Component({
  selector: 'app-p000-login',
  templateUrl: './p000-login.component.html',
  styleUrl: './p000-login.component.scss',
})
export class P000LoginComponent {
  img =
    'https://i.pinimg.com/564x/8c/80/0b/8c800b5f60e36488f0ba19a53b3709d0.jpg';

  //common
  tokenStorage: string = '';
  dataFromDialog: any;

  //FORM

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log('asdasdsa');
    if (this.loginForm.valid) {
      this.APILogin(this.loginForm.value);
      if (this.tokenStorage != '') {
        this.router.navigate(['/home']);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  APILogin(data: DTOLogin) {
    this.authService.onLogin(data).subscribe((res) => {
      this.tokenStorage = res.token;
      if (this.tokenStorage != '') {
        this.router.navigate(['/']);
      }
    });
  }

  onForGotPassword() {
    const dialogRef = this.dialog.open(ResetPasswordComponent, {
      width: 'fit-content',
      height: 'fit-content',
      hasBackdrop: true,
      disableClose: true,
      data: { isReset: true },
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialog = data.form;
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
      }
    });
  }

  onRegister() {
    // this.isRegister = true;
    const dialogRef = this.dialog.open(P001RegisterComponent, {
      width: 'fit-content',
      height: 'fit-content',
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialog = data.form;
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
      }
    });
  }
}
