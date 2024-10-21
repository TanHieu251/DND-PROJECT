import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productData } from '../../../data/product';
@Component({
  selector: 'app-p004-product',
  templateUrl: './p004-product.component.html',
  styleUrl: './p004-product.component.scss'
})
export class P004ProductComponent implements OnInit {
  products = productData;
  filteredProducts: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const searchTerm = params['search'];
      if (searchTerm) {
        this.filteredProducts = this.products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        this.filteredProducts = this.products;
      }
    });
  }
}
