import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slide-banner',
  templateUrl: './slide-banner.component.html',
  styleUrl: './slide-banner.component.scss'
})
export class SlideBannerComponent {
  productsBanner = [
    {
      image: 'assets/bannerProduct.png',
      name: 'search'
    }
  ]
}
