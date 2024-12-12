import { Component } from '@angular/core';

@Component({
  selector: 'app-service-banner',
  templateUrl: './service-banner.component.html',
  styleUrl: './service-banner.component.scss',
})
export class ServiceBannerComponent {
  productsBanner = [
    {
      image: 'assets/bannerProduct.png',
      name: 'search',
    },
  ];

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
