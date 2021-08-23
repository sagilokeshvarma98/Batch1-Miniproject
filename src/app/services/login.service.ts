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
  }

  logout(){
    localStorage.removeItem("token")
    this.route.navigate(['/login'])
  }


  getToken(){
    return localStorage.getItem("token") || ''
   
  }


  public deactivate(data:any):Observable<any>{
    return this.hp.post("http://localhost:3000/users",data)
  }
  deleteaccount(data:any):Observable<any>{
    console.log(data);
  
    return this.hp.delete("http://localhost:3000/users/"+data)
  }


}
