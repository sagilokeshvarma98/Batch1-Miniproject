
import { Injectable } from '@angular/core';
//import {PubSub }from 'pubsub-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
httpOptions:any;
  constructor(private http:HttpClient) { }
getitem():Observable<any>{

   return this.http.get("http://localhost:5100/products")
}


deleteitem(data:any):Observable<any>{
  console.log(data);

  return this.http.delete(`http://localhost:3000/cart/${data}`)
}
makeOrder(){
  alert("order placed")
}

  
}