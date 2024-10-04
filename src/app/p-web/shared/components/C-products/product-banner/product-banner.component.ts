import { Component } from '@angular/core';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.scss'
})
export class ProductBannerComponent {
  productsBanner = [
    {
      image: 'assets/bannerProduct.png',
      name: 'search'
    }
  ]
}
