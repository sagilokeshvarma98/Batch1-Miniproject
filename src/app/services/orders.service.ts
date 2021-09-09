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

 public reOrder(id:any):Observable<any>{
  return this.http.post("http://oshopping.ddns.net/api/orders/user/reorder/"+id,{})
 }

public deleteOrder(id:any):Observable<any>{
  return this.http.post("http://oshopping.ddns.net/api/orders/user/cancel/"+id,{})
}
}
