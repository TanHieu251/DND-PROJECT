import { Component, OnInit } from '@angular/core';
import { productData } from '../../../../../data/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-home',
  templateUrl: './product-list-home.component.html',
  styleUrl: './product-list-home.component.scss',
})
export class ProductListHomeComponent implements OnInit {
  constructor(private router: Router) {}

  products = productData;
  visibleProducts: any[] = [];
  currentIndex = 0;
  itemsPerSlide = 4;

  ngOnInit(): void {
    this.updateVisibleProducts();
  }

  updateVisibleProducts() {
    this.visibleProducts = this.products.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerSlide
    );
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updateVisibleProducts();
    }
  }

  nextSlide() {
    if (this.currentIndex + 1 < this.products.length) {
      this.currentIndex += 1; 
      this.updateVisibleProducts();
    }
  }
  viewDetailProduct(productName: string) {
    this.router.navigate(['/product', productName]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
