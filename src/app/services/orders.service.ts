import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public http:HttpClient) { }
 public getmyorders():Observable<any>{
   return this.http.get("http://oshopping.ddns.net/api/orders/user/all")
 }

 public posttocancel(data:any):Observable<any>{
  return this.http.post("http://localhost:3000/cancel",data)
}
}
