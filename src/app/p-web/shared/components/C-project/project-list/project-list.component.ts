import { Component } from '@angular/core';
import { projectsData } from '../../../../../data/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projects = projectsData;

  constructor(private router: Router){}

  goToProjectDetail(projectTitle:string){
    this.router.navigate(['/project-detail', projectTitle])
    window.scrollTo({top: 0, behavior:'smooth'});
  }
}
