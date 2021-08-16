import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hp:HttpClient , private route:Router) { }

  login(data:any):Observable<any>{
    console.log(data);
    return this.hp.post("http://oshopping.ddns.net/api/authenticate",data)
    // .pipe(
    //   map(user => {
    //     return user
    //     if(user){
    //    localStorage.setItem("token",data)
    //     }
    // })
    // )
  }

  logout(){
    localStorage.removeItem("token")
    this.route.navigate(['/login'])
  }


  getToken(){
    return localStorage.getItem("token") || ''
    // this.unsplittedtoekn = localStorage.getItem("token") || '{}' ;
    // this. splittedtoekn=this.unsplittedtoekn.split(".");
 
 
    // this.currentUser=JSON.parse( atob(this.splittedtoekn[1]));
    // console.log(this.currentUser)
    // return this.currentUser;
  }


  public deactivate(data:any):Observable<any>{
    return this.hp.post("http://localhost:2030/users",data)
  }
  deleteaccount(data:any):Observable<any>{
    console.log(data);
  
    return this.hp.delete("http://localhost:2030/users/"+data)
  }


}
