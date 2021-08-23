import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  len:any
httpOptions:any;
  constructor(private http:HttpClient) { }
getitem():Observable<any>{

   return this.http.get("http://oshopping.ddns.net/api/cart/getcarts")
   .pipe(
      map((x:any )=> {
        console.log(x);
        this.len=x.length
        return x
      
    })
    )
}


private data = new BehaviorSubject<any>("");
 public cast = this.data.asObservable();
 public changeData(){
 this.data.next(this.len);
 };





deleteitem(data:any):Observable<any>{
  console.log(data);
  return this.http.delete(`http://localhost:3000/cart/${data}`)

  //return this.http.delete(`http://oshopping.ddns.net/api/cartitems/1`)
}
makeOrder(){
  alert("order placed")
}

getname(obj:any):Observable<any>{

  return this.http.get('http://oshopping.ddns.net/api/products/${​obj}​')

  //  this.http.get("oshopping.ddns.net/api/products/1",{})

  
}



public additem(data:any):Observable<any>{

  return this.http.post("http://localhost:3000/cart",data)
}



}