// import { projectsDetailInfor } from './../../../../../data/product';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projectsData } from '../../../../../data/product';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  projectsDetail  = projectsData;
  projectDetail: any;

  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit() {
    let projectTitle = this.activatedRoute.snapshot.paramMap.get('title');
    if(projectTitle){
      this.projectDetail = this.projectsDetail.find(p => p.title === projectTitle)
    }
    console.log(projectTitle)
  }
}
