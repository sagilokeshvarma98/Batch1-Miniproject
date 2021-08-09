import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url="http://localhost:5100/comment";

  httpOptions:any;

  constructor(public http:HttpClient) { }

  

  getComment():Observable<Object>{
    return this.http.get(`${this.url}`).pipe(catchError(this.handelError));
  }

  postComment(obj:any):Observable<Object>{
    this.httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
    return this.http.post(`${this.url}`,obj,this.httpOptions).pipe(catchError(this.handelError));
  }

  private handelError(er:HttpErrorResponse){
    if(er.error instanceof ErrorEvent){
      console.error('Client side error : 404',er.error)
    }else{
      console.error('Server side error :',er)
    }
    return throwError('There is a Problem with the Service!')
  }
}
