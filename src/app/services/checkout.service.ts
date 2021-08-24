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

  stripetoken(data: any): Observable<any> {

    return this.http.post("http://localhost:2030/users", data)

  }




}
