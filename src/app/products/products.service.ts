import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product'
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  getCategories(): Observable<Category[]>
  {
    const categoriesUrl= 'http://localhost:3000/categories';
    return this.httpClient.get<Category[]>(categoriesUrl);
  }


  getAllProducts():Observable<Product[]>
  {
    const productUrl= 'http://localhost:3000/products';
    return this.httpClient.get<Product[]>(productUrl);
  }

  createProduct(productBody: any): Observable<Product>
  {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody);
  }

  viewProduct(productId: number): Observable<Product>
  {
    const productUrl = 'http://localhost:3000/products?productId='+productId;
    return this.httpClient.get<Product>(productUrl);
  }

  updateProduct(productId: any, productBody: any): Observable<Product>
  {
    debugger
    const productUrl = 'http://localhost:3000/products?productId='+productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }

  deleteProduct(productId: number)
  {
    const productUrl = 'http://localhost:3000/products'+productId;
    return this.httpClient.delete(productUrl);
  }

  searchCategoryproducts(categoryId: any): Observable<Product[]>
  {
    const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;
    return this.httpClient.get<Product[]>(productUrl);
  }

  searchDateProducts(dateParam: any): Observable<Product>
  {
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<Product>(productUrl);
  }

}
