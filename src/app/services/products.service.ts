import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private hc:HttpClient) { }

  products:any

  productsData():Observable<any>{
    return this.hc.get("http://localhost:5100/products")
  }
}
