import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from '../../shared/services/auth-service.service';
import { Router } from '@angular/router';
import { DTOLogin } from '../../shared/DTO/DTOLogin';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DTORegister } from '../../shared/DTO/DTORegister';

@Component({
  selector: 'app-p001-register',
  templateUrl: './p001-register.component.html',
  styleUrl: './p001-register.component.scss',
})
export class P001RegisterComponent {
  //common
  tokenStorage: string = '';
  checked: boolean = false;
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<P001RegisterComponent>
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.confirmationValidator]],
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      agree: [false, [Validators.requiredTrue]],
    });
  }
  confirmationValidator: ValidatorFn = (
    control: AbstractControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  onSubmit() {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.APIRegister(this.registerForm.value);
    } else {
      Object.values(this.registerForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  closeDialog() {
    this.dialogRef.close(true);
  }

  APIRegister(req: DTORegister) {
    this.authService.onRegister(req).subscribe((res) => {
      if (res) {
        console.log(res.Status);
        return res;
      }
    });
  }
}
