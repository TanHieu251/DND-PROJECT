import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-project-manage',
  templateUrl: './project-manage.component.html',
  styleUrl: './project-manage.component.scss'
})
export class ProjectManageComponent {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumnsProject: string[] = ['id', 'title', 'content', 'date', 'image','popup'];
  ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  projects: any[] = [
    {
      id:'P01',
      title: 'project new',
      content: 'This project',
      date: Date.now(),
      image: 'content',
    },
    {
      id:'P01',
      title: 'project new',
      content: 'This project',
      date: Date.now(),
      image: 'content'
    },
  ]
  dataSource = new MatTableDataSource<any>(this.projects);
  selection = new SelectionModel<any>(true, []);
}
