import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DTOResetPassword } from '../../DTO/DTOResetPassword';
import { __param } from 'tslib';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationServiceService } from '../../../../p-lib/services/notification-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent implements OnInit, OnChanges {
  // common
  @Input() isReset: boolean = false;
  DTODefault: DTOResetPassword = new DTOResetPassword();
  emailReq: String = '';
  resetPassword: string = '';

  constructor(
    private apiService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<ResetPasswordComponent>,
    private cdRef: ChangeDetectorRef,
    private notiService: NotificationServiceService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isReset);
    if (this.isReset == false) {
      this.onCheckRoute();
    }
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {
    this.isReset = this.route.snapshot.data['isReset'];
    this.cdRef.detectChanges();
  }

  onCheckRoute() {
    this.route.queryParams.subscribe((p) => {
      this.DTODefault.email = p['email'];
      this.DTODefault.token = encodeURIComponent(p['token']);
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  resetPasswordHandle() {
    this.DTODefault.newPassword = this.resetPassword;
    this.onCheckRoute();
    if (this.isReset) {
      this.APIResetPassword(this.DTODefault);
    } else {
      const req = { email: this.emailReq };
      this.APIForgotPassword(req);
    }
  }

  APIResetPassword(req: DTOResetPassword) {
    this.apiService.resetPassword(req).subscribe(
      (res) => {
        this.notiService.success('Tạo mật khẩu mới thành công ');

        this.router.navigate(['/login']);
      },
      (error) => {
        this.notiService.error('Xảy ra lỗi khi tạo mật khẩu');
      }
    );
  }

  APIForgotPassword(req: any) {
    this.apiService.forgotPassword(req).subscribe({
      next: (response) => {
        this.notiService.success('Gửi yêu cầu thành công ');
      },
      error: (error) => {
        this.notiService.error('Xảy ra lỗi khi gửi yêu cầu ');
      },
    });
  }
}
