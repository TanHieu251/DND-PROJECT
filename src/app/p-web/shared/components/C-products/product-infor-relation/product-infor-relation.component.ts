import { ActivatedRoute } from '@angular/router';
import { productData } from './../../../../../data/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-infor-relation',
  templateUrl: './product-infor-relation.component.html',
  styleUrls: ['./product-infor-relation.component.scss'],
})
export class ProductInforRelationComponent implements OnInit {

  products = productData;
  product: any;
  selectedTab = 0;

  constructor (private activatedRoute: ActivatedRoute){}
  ngOnInit() {
    let productName = this.activatedRoute.snapshot.paramMap.get('name');
    if(productName){
      this.product = this.products.find(p => p.name === productName);
    }
  }

  selectTab(index: number) {
    this.selectedTab = index;
  }

  get tabs()  {
    return [
      {
        title: 'Mô tả sản phẩm',
      },
      {
        title: 'Tính năng sản phẩm',
      },
      {
        title: 'Thông số kỹ thuật',
      },
      {
        title: 'Đánh giá sản phẩm',
      }
    ];
  }

}
