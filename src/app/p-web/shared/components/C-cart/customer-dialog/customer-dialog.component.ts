import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationServiceService } from '../../../../../p-lib/services/notification-service.service';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrl: './customer-dialog.component.scss'
})
export class CustomerDialogComponent {
  constructor(public dialogRef: MatDialogRef<CustomerDialogComponent>,
    private notification: NotificationServiceService
  ){}

  customer = {
    name: '',
    phone: '',
    address: '',
    email: '',
  };
  confirmCusInfor(){
    this.notification.success(`Thông tin khách hàng đã được xác nhận` );
  }
  confirmCustomerInfo(){
    this.dialogRef.close(this.customer);
  }
  onCancel(){
    this.dialogRef.close();
  }

}
