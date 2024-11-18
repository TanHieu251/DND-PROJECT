import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { newsData } from '../../../../../data/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss',
})
export class HomeNewsComponent implements OnInit {
  currentProjectIndex = 0;
  isResponsive = window.innerWidth <= 780;
  @Input() new: any[] = [];
  newsDetail :any;


  @ViewChild('newsContent', { static: true }) newsContent!: ElementRef;
  news = newsData.slice(0, 5);
  constructor(private router: Router, private activatedRoute: ActivatedRoute){}
  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.isResponsive = event.target.innerWidth <=780;
  }
  ngOnInit(): void {
    let newTitle = this.activatedRoute.snapshot.paramMap.get('title');
    if(newTitle){
      this.newsDetail = newsData.find(n => n.title === newTitle)
      console.log(this.newsDetail);
    }
  }
  nextSlide() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.news.length;

  }

  prevSlide() {
    this.currentProjectIndex = (this.currentProjectIndex + 1 - this.news.length)
    % this.news.length;
  }
  get visibleProducts(){
    if(this.isResponsive){
      return[
        this.news[this.currentProjectIndex],
        this.news[(this.currentProjectIndex + 1) % this.news.length]
      ]
    }
    return this.news;
  }
  gotoAllNews(){
    this.router.navigate(['/news']).then(() =>{
      window.scrollTo({top: 0, behavior:'smooth'});
    })
  }

  goToProjectDetail(title: string){
    this.router.navigate(['/newDetail', title]);
  }
}
