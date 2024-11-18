import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newsData } from '../../../../../data/product';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.scss'
})
export class NewsContentComponent implements OnInit {
  mainData = newsData;
  featureData = newsData;

  constructor(private router: Router){}
  ngOnInit(): void {
    this.loadNewsData();
  }
  goToProjectDetail(title: string){
      this.router.navigate(['/newDetail', title]);
    }
    private loadNewsData(): void {
      // this.mainData = newsData.slice(0, 1);
      // this.featureData = newsData.slice(1, 3);
      this.mainData = this.filterNewsType("main");
      this.featureData = this.filterNewsType("feature");
    }

    private filterNewsType(type: "main" | "feature"): any[]{
      return newsData.filter(newType => newType.type === type);
  }
}
