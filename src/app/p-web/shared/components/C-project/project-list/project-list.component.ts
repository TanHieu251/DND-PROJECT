import { Component } from '@angular/core';
import { projectsData } from '../../../../../data/product';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projects = projectsData;

}
