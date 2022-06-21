import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { 

  }
  getproducts():Observable<any>
  {
   return this._HttpClient.get('https://fakestoreapi.com/products?sort=desc'); 
  }
}
