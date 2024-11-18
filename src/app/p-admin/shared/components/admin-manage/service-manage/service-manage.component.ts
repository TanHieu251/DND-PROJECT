import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-service-manage',
  templateUrl: './service-manage.component.html',
  styleUrl: './service-manage.component.scss'
})
export class ServiceManageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatPaginator, {static: true}) paginator !: MatPaginator
  displayedColumnsServices = ['id', 'Title', 'Content', 'Image', 'popup']
  services: any[] =[
    {
      id: 'S01',
      Title: 'Service 1',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S02',
      Title: 'Service 2',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S03',
      Title: 'Service 3',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S04',
      Title: 'Service 4',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S05',
      Title: 'Service 5',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
    {
      id: 'S06',
      Title: 'Service 6',
      Content: 'This is service 1',
      Image: 'https://picsum.photos/200/300',
      popup: true
    },
  ]
  dataSource = new MatTableDataSource<any>(this.services);
  selection = new SelectionModel<any>(true, []);
}
