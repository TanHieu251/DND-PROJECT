import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageProduct } from '../../../../../data/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

// import { ProductManageComponent

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent implements OnInit  {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsProducts: string[] = [
    'id',
    'name',
    'price',
    'status',
    'image',
    'popup',
  ];
  constructor(private router: Router){
  }
  ngOnInit(): void {
    // this.updatePaginatedProducts();
    throw new Error('Method not implemented.');
  }
  products :any []= [
    {
      id: "DND01",
      name: 'Sản phẩm A',
      price: 100000,
      category: 'Loại 1',
      status: 'Còn hàng',
      image: 'path-to-image',
    },

  ]
  dataSource = new MatTableDataSource<any>(this.products);
  selection = new SelectionModel<any>(true, []);

}
