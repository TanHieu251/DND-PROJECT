import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationServiceService {
  constructor(private notification: NzNotificationService) {}

  success(content: string) {
    this.notification.success('', content, {
      nzDuration: 5000,
      nzAnimate: true,
      nzPauseOnHover: true,
      nzPlacement: 'bottomLeft',
    });
  }

  error(content: string) {
    this.notification.error('', content, {
      nzDuration: 5000,
      nzAnimate: true,
      nzPauseOnHover: true,
      nzPlacement: 'bottomLeft',
    });
  }

  warning(content: string) {
    this.notification.warning('', content, {
      nzDuration: 5000,
      nzAnimate: true,
      nzPauseOnHover: true,
      nzPlacement: 'bottomLeft',
    });
  }
}
