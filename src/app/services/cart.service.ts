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
  return this.http.get("http://localhost:3000/cart").pipe(
  //  return this.http.get("http://oshopping.ddns.net/api/carts/all").pipe(
      map((x:any )=> {
        console.log(x);
        this.len=x.length
        console.log("this is length");
        console.log(this.len);
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
  // return this.http.delete(`http://oshopping.ddns.net/api/cartitems/${data}`)

}
makeOrder(){
  alert("order placed")
}

getname(obj:any):Observable<any>{

  return this.http.get('http://oshopping.ddns.net/api/products/${​obj}​')

  //  this.http.get("oshopping.ddns.net/api/products/1",{})

  
}

selcetquantity(data:any,id:any):Observable<any>{
  console.log(data)
  return  this.http.patch("http://localhost:3000/cart/"+id,data)
}


public additem(data:any):Observable<any>{

  return this.http.post("http://localhost:3000/cart",data)
}



}