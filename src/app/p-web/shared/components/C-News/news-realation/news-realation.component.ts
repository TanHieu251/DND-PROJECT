import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newsData } from '../../../../../data/product';

@Component({
  selector: 'app-news-realation',
  templateUrl: './news-realation.component.html',
  styleUrl: './news-realation.component.scss'
})
export class NewsRealationComponent implements OnInit {

  dataNewsRelation = newsData;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.loadNewsData();
  }

  goToNewDetail(title: string) {
    this.router.navigate(['/newDetail', title])
    window.scrollTo({top: 0, behavior:'smooth'});
  }
  private loadNewsData(): void {
    this.dataNewsRelation = this.filterNewsType("relation");
  }
  private filterNewsType(type: "relation" ): any[]{
    return newsData.filter(newType => newType.type === type);
}
}
