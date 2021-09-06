import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  url=" http://oshopping.ddns.net/api/coupon/add";
  
  httpOptions: any;

  constructor(private http:HttpClient) { }

  private handelError(er:HttpErrorResponse){
    if(er.error instanceof ErrorEvent){
      console.error('Client side error : 404',er.error)
    }else{
      console.error('Server side error :',er)
    }
    return throwError('There is a Problem with the Service!')
  }

  getCoupons():Observable<any>{

    return this.http.get<Object>(`${this.url}`).pipe(catchError(this.handelError))
  }

 postCoupon(obj:any):Observable<Object>{
    this.httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
    return this.http.post(`${this.url}`,obj,this.httpOptions).pipe(catchError(this.handelError));
  }
}