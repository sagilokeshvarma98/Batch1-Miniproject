import { HttpClient } from '@angular/common/http';
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


  checkout():Observable<any>{
    let data ={
      coupon : ""
    }
    return this.http.post("http://oshopping.ddns.net/api/orders/user/checkout",data)
  }

  stripetoken(data: any): Observable<any> {

    return this.http.post("http://localhost:3000/users", data)

  }




}
