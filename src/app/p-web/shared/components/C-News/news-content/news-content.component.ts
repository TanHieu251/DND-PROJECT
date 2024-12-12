import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newsData } from '../../../../../data/product';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.scss',
})
export class NewsContentComponent implements OnInit {
  @Input() mainData:any = {};
  @Input() featureData: any[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {}
  goToProjectDetail(title: string) {
    this.router.navigate(['/newDetail', title]);
  }
}
