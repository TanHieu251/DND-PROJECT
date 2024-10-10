import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../shared/services/auth-service.service';
import { DTOLogin } from '../../shared/DTO/DTOLogin';
import { Router } from '@angular/router';

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

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log('asdasdsa');
    if (this.loginForm.valid) {
      this.APILogin(this.loginForm.value);
      if (this.tokenStorage != "") {
        this.router.navigate(['/home']);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  APILogin(data: DTOLogin) {
    this.authService.onLogin(data).subscribe((res) => {
      this.tokenStorage = res.token;
      if (this.tokenStorage != "") {
        this.router.navigate(['/']);
      }

    });
  }

  loginToHomePage(){

  }
}
