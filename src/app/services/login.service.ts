import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hp:HttpClient , private route:Router) { }

  login(data:any):Observable<any> {
    return this.hp.post("http://oshopping.ddns.net/api/user/login",data)
    // .pipe(
    //   map(user => {
    //     return user
    //     if(user){
    //    localStorage.setItem("token",data)
    //     }
    // })
    // )
  }

  logout() {
    localStorage.clear()
    this.route.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem("token")
  }

  public deactivate(data:any):Observable<any> {
    return this.hp.post("http://localhost:3000/users",data)
  }

  deleteaccount(data:any):Observable<any> {
    return this.hp.delete("http://localhost:3000/users/"+data)
  }
   
  forgotpost(data:any):Observable<any> {
    return this.hp.post("http://oshopping.ddns.net/api/user/forgotpassword?mobile="+data,{})
  }

  paymentGateway(token:any):Observable<any> {
    const headers = new HttpHeaders().set("orderId",localStorage.getItem("id") || "").set("token",token);
    console.log(headers);
    return this.hp.post("http://oshopping.ddns.net/api/payment/charge",{},{'headers': headers})
  }

}
