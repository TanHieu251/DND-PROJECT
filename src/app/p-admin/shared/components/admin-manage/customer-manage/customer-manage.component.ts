import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-customer-manage',
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.scss'
})
export class CustomerManageComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'location'];
  dataSource = [
    {
      id:'',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      location: 'New York'
    }
  ]
}
