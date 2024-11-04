import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.scss'
})
export class NewsContentComponent {
  newsData = [
    {
      imageNews: 'assets/botruyentai3pha.png',
      name:'Ổ cắm điện đa năng'
    },
    {
      imageNews: 'assets/botruyentai3pha.png',
      name:'Ổ cắm điện đa năng'
    },
    {
      imageNews: 'assets/botruyentai3pha.png',
      name:'Ổ cắm điện đa năng'
    },
  ]
}
