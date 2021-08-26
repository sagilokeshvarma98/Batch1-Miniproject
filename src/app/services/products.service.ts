import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private hc:HttpClient) { }

  public term = new BehaviorSubject<string>("");

   searchTerm = this.term.asObservable();

   public changeSearchTerm(arg:string){
      this.term.next(arg)
   }

  productsData():Observable<any>{
     return this.hc.get("http://oshopping.ddns.net/api/products/all")
  }


  testOrderApi():Observable<any>{
    return this.hc.get("http://oshopping.ddns.net/api/orders/user/all")
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
