import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private http:HttpClient) { }

  postForget(data:any):Observable<any>{
    return this.http.post("http://oshopping.ddns.net/api/user/forgotpassword",data);
  }
}
