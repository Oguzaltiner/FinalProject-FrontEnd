import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44319/api/products/getall';

  constructor(private httpClient: HttpClient) { }
  getProducts():Observable<ProductResponseModel> {
    //gelen datayı productresponsemodele map et
   return this.httpClient
      .get<ProductResponseModel>(this.apiUrl);
  }
}
