import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API_link = 'https://dummyjson.com/products';
  products: any;
  constructor(private http: HttpClient) {}

  getProducts(data: string | number | null): Observable<any> {
    if (data === 'all') return this.http.get(this.API_link + '?&limit=100');
    else if (data === 'categories')
      return this.http.get(this.API_link + '/categories');
    else if (typeof data === 'number')
      return this.http.get(this.API_link + '/' + data);
    else return this.http.get(this.API_link + '/category/' + data);
  }
  addProduct(product: any) {
    return this.http.post(this.API_link + '/add', product);
  }
}
