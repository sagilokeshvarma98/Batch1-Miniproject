import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }

public check():Observable<any>{
    return this.http.get("http://oshopping.ddns.net/api/carts/user")
  
  // return this.http.get("http://localhost:3000/cart")




}

stripetoken(data:any):Observable<any>{

return this.http.post(" https://api.stripe.com/v1/tokens",data )

}




}
