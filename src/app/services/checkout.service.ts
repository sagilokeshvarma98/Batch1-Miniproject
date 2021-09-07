import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }


public check():Observable<any>{
    return this.http.get("http://oshopping.ddns.net/api/carts/user")
  // return this.http.get("http://localhost:3000/cart")
  }


  applyCoupon(id:any):Observable<any>{
    return this.http.post("http://oshopping.ddns.net/api/orders/coupon/apply/"+id,{})
  }

  cancelCoupon(id:any):Observable<any>{
    return this.http.post("http://oshopping.ddns.net/api/orders/coupon/cancel/"+id,{})
  }

  checkout(id:any):Observable<any>{
    return this.http.post("http://oshopping.ddns.net/api/orders/checkout/"+id,{})
  }


  initializeCart():Observable<any>{
    let data ={
      coupon : ""
    }
    //before billing
    return this.http.post("http://oshopping.ddns.net/api/orders/user/init",data)
    //after billing
    // return http.post("http://oshopping.ddns.net/api/orders/checkout/Orderid",{})  
  }

  stripetoken(data: any): Observable<any> {

    return this.http.post("http://localhost:3000/users", data)

  }

  


}
