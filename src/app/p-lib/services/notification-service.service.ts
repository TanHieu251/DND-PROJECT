import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationServiceService {
  constructor(private notification: NzNotificationService) {}

  success(content: string, content2?: string) {
    this.notification.success('', content + content2, {
      nzDuration: 5000,
      nzAnimate: true,
      nzPauseOnHover: true,
      nzPlacement: 'bottomLeft',
    });
  }

  error(content: string, content2?: string) {
    this.notification.error('', content + content2, {
      nzDuration: 5000,
      nzAnimate: true,
      nzPauseOnHover: true,
      nzPlacement: 'bottomLeft',
    });
  }

  warning(content: string, content2?: string) {
    this.notification.warning('', content + content2, {
      nzDuration: 5000,
      nzAnimate: true,
      nzPauseOnHover: true,
      nzPlacement: 'bottomLeft',
    });
  }
}
