import { Component, HostListener, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { projectsData } from '../../../../../data/product';

// import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-slide',
  templateUrl: './project-slide.component.html',
  styleUrl: './project-slide.component.scss'
})
export class ProjectSlideComponent {
  @Input() titleBig: string='Title Big'
  @Input() title: string= 'Title';
  @Input() description: string= 'Description';
  @Input() imageSrc: string= 'assets/images/projectimage.jpg';
  @Input() buttonText: string='Xem thêm dự án';
  projects = projectsData.slice(0,4);
  constructor(private router: Router){}
  currentProjectIndex = 0;
  isResponsive = window.innerWidth <=780;
  goToProject(){
    this.router.navigate(['/project']).then(() =>{
      window.scrollTo({top: 0, behavior:'smooth'});
    })
  }


  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.isResponsive = event.target.innerWidth <=780;
  }
  prevSlide(){
    this.currentProjectIndex = (this.currentProjectIndex + 1 - this.projects.length)
       % this.projects.length;
  }
  nextSlide(){
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }


  get visibleProjects(){
    if(this.isResponsive){
      return [
      this.projects[this.currentProjectIndex],
      this.projects[(this.currentProjectIndex + 1) % this.projects.length]
        //  ...this.projects.slice(0, this.currentProjectIndex).reverse()
        ];
      }
      return this.projects;
    }

}
