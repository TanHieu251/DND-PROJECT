import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { newsData } from '../../../../../data/product';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {
  newsDetail: any;

  constructor(private activatedRoute: ActivatedRoute,
    router: Router
  ) {}

  ngOnInit(): void {
    let newTitle = this.activatedRoute.snapshot.paramMap.get('title');
    if(newTitle){
      this.newsDetail = newsData.find(n => n.title === newTitle)
      console.log(this.newsDetail);
    }
  }
}
