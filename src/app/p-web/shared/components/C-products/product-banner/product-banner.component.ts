import { Component } from '@angular/core';
import { productData } from '../../../../../data/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.scss'
})
export class ProductBannerComponent {
  productList = productData;
  searchTerm: string = '';
  searchResults: any;

  constructor(private router: Router){}

  productsBanner = [
    {
      image: 'assets/bannerProduct.png',
      name: 'search'
    }
  ]
  searchProduct(){
    const foundProduct = this.productList.find(p =>{
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    if(foundProduct){
      this.router.navigate(['/productdetails', foundProduct.name])
    } else{
      alert('Không tìm thấy sản phẩm nào phù hợp với từ khóa bạn tìm.');
    }
  }
}
