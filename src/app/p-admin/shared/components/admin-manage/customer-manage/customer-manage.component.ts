import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-manage',
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.scss'
})
export class CustomerManageComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsCustomer: string[] = ['id', 'name', 'email', 'phone', 'location','popup'];
  ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  customers: any[] = [
    {
      id:'',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      location: 'New York'
    }
  ]
  dataSource = new MatTableDataSource<any>(this.customers);
  selection = new SelectionModel<any>(true, []);
}

