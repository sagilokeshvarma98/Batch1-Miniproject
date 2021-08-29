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

  //to get user cart items


getitem():Observable<any>{
  //return this.http.get("http://localhost:3000/cart").pipe(
    return this.http.get("http://oshopping.ddns.net/api/carts/user").pipe(
      map((x:any)=> {
        console.log(x);
        this.len=x.cartItems.length
        console.log("this is length");
        return x
    })
    )
}

updateItem(id:any,data:any){
  this.http.post("http://oshopping.ddns.net/api/cartitems/update/usercart/"+id,data)
}


private data = new BehaviorSubject<any>("");
 public cast = this.data.asObservable();
 public changeData(){
 this.data.next(this.len);
 };



//to delete user cart item

deleteitem(data:any):Observable<any>{
  console.log(data);
  return this.http.delete(`http://oshopping.ddns.net/api/cartitems/${data}`)
  // return this.http.delete(`http://oshopping.ddns.net/api/cartitems/${data}`)
}

// selcetquantity(data:any,id:any):Observable<any>{
//   console.log(data)
//   return  this.http.patch("http://localhost:3000/cart/"+id,data)
// }

 //add product to cart



public additem(data:any,id:any):Observable<any>{
  console.log(data,id);
  return this.http.post("http://oshopping.ddns.net/api/cartitems/add/usercart/product/"+id,{
   "quantity" : data 
  })
}


}