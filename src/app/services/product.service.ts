import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44319/api/';

  constructor(private httpClient: HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getall";
    //gelen datayı productresponsemodele map et
   return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getbyCategory?categoryId="+categoryId;
    //gelen datayı productresponsemodele map et
   return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
  }
}
