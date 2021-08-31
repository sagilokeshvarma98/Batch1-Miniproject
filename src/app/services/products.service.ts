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
     return this.hc.get("http://oshopping.ddns.net/api/products/all")
    //  return this.hc.get("https://fakestoreapi.com/products")
  }

  addProduct(data:any){
    return this.hc.post("http://oshopping.ddns.net/api/products/add",data)
  }

  getCartItem():Observable<any>{
    return this.hc.get("http://oshopping.ddns.net/api/products/1")
  }

  getProductbyId(id:number){
    return this.hc.get("http://oshopping.ddns.net/api/products/"+id)
  }

}
