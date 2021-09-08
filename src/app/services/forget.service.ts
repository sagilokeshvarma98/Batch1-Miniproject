import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private http: HttpClient) { }

  postForget(data: any): Observable<any> {
    return this.http.post("http://oshopping.ddns.net/api/user/forgotpassword", data);
  }
  
  resPassword(data: any, token: any): Observable<any> {
    localStorage.setItem('token',token)
    return  this.http.post("http://oshopping.ddns.net/api/user/profile/changepassword", data);
  }
}
