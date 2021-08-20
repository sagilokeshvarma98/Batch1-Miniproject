import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public http:HttpClient) { }
 public getmyorders():Observable<any>{
   return this.http.get("http://localhost:3600/orders")
 }

 public posttocancel(data:any):Observable<any>{
  return this.http.post("http://localhost:3400/cancel",data)
}




}
