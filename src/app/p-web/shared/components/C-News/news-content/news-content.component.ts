import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { newsData } from '../../../../../data/product';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.scss'
})
export class NewsContentComponent {
  dataNews = newsData;

  constructor(private router: Router){}
  dataMain =[
    {
        imgSrcNewsMain:'assets/tintuc.png',
        titleNewsMain:'Tin tuc chinh thuc trang chu',
    }
  ]
  goToProjectDetail(newDetail: string){
    this.router.navigate(['/newDetail', newDetail]);

  }
}
