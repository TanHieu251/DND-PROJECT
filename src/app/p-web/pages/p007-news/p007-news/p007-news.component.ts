import { Component, OnInit } from '@angular/core';
import { newsData } from '../../../../data/product';

@Component({
  selector: 'app-p007-news',
  templateUrl: './p007-news.component.html',
  styleUrl: './p007-news.component.scss',
})
export class P007NewsComponent implements OnInit {
  //commoon
  mainNew: any = {};
  favoriteNew: any[] = [];
  listNew: any[] = [];

  ngOnInit(): void {
    this.mainNew = newsData[0];
    this.favoriteNew = this.newData.filter((s) => s.isFavorite == true);
    this.listNew = this.newData.filter((s) => s.isFavorite !== true);
  }
  newData = newsData;
}
