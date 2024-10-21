import { Component } from '@angular/core';
import { productData } from '../../../../../data/product';
import { Router } from '@angular/router';
import { Item } from '../../../../../data/product';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.scss'
})
export class ProductBannerComponent {
  productList = productData;
  searchTerm: string = '';
  searchResults: any;
  filteredProducts: any[] = [];


  constructor(private router: Router){}

  productsBanner = [
    {
      image: 'assets/bannerProduct.png',
      name: 'search'
    }
  ]
  searchProduct(): void{
    this.filteredProducts = this.productList.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.filteredProducts.length > 0) {
      this.router.navigate(['/product', this.filteredProducts[0].name]);
    } else {
      alert('Không tìm thấy sản phẩm nào phù hợp với từ khóa bạn tìm.');
    }
  }
}
