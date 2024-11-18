import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrl: './news-manage.component.scss'
})
export class NewsManageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsNews: string[] = ['id', 'Title','Content', 'Date', 'Image', 'Caption','popup'];
  news: any[] =[
    {
      id:'N01',
      Title:'News Title',
      Content:'News Content',
      Date:'2020-01-01',
      Image:'https://example.com/image.jpg',
      Caption:'News Caption'

    }
  ]
  dataSource = new MatTableDataSource<any>(this.news);
  selection = new SelectionModel<any>(true, []);
}
