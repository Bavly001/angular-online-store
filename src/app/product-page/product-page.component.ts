import { ProductsService } from './../components/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    private _productService: ProductsService,
    private _activeRouter: ActivatedRoute
  ) {}

  product: any = {};

  public show = false;
  showImages() {
    this.show = !this.show;
  }

  randomProducts: any[] = [];

  getSomeProducts() {
    for (let index = 0; index < 4; index++) {
      this._productService
        .getProducts(Math.floor(Math.random() * 99))
        .subscribe((product) => this.randomProducts.push(product));
    }
  }

  changeLocation(id: number | undefined) {
    window.location.replace('/product/' + id);
  }

  ngOnInit(): void {
    this._productService
      .getProducts(Number(this._activeRouter.snapshot.paramMap.get('id')))
      .subscribe((product) => (this.product = product));
    this.getSomeProducts();
  }
}
