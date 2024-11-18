import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrl: './order-manage.component.scss'
})
export class OrderManageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatPaginator, {static:true}) paginator !: MatPaginator
  displayedColumnsOrder: string[] = ['id', 'name', 'price', 'Payment', 'Total', 'status', 'action'];
  orders: any[] = [
    {
      id: 'ODR01',
      name: 'Order 1',
      // price: "10000",
      payment: 'Cash',
      // total: '10000',
      status: 'Pending',
      // action: 'Detail'
    }
  ]
}
