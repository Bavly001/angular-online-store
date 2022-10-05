import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private _productsService: ProductsService) {}
  bgColor = 'beige';
  lighting =
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/illuminated-pendant-lights-hanging-from-ceiling-royalty-free-image-1576719488.jpg';

  ngOnInit(): void {
    this._productsService
      .getProducts('categories')
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
  categories: any[] = [];
}
