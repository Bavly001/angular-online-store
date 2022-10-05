import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  constructor(
    private _activeRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this._productsService
      .getProducts(this._activeRoute.snapshot.paramMap.get('data'))
      .subscribe((data) => (this.productsData = data.products));

    this._productsService
      .getProducts('categories')
      .subscribe((data) => (this.productsCategories = data));
    if (this._activeRoute.snapshot.paramMap.get('data') === 'all')
      this.all = true;
    else this.product = this._activeRoute.snapshot.paramMap.get('data');
  }
  productsData: any[] = [];
  productsCategories: any[] = [];
  all = false;
  product: any;
  changeLocation(direction: string): void {
    window.location.replace('/products/' + direction);
  }

  page: number = 1;
  count: number = 0;
  pageSize: number = 9;

  onPageChange(event:any) {
    this.page = event;
  }
}
