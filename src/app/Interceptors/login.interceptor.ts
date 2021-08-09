import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private ls:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   let token = this.ls.getToken()
   console.log(token);
   if(token){
     request = request.clone({
       setHeaders : {
         Authorization : `Bearer ${token}`
       }
     });
   }
    return next.handle(request);
  }
}
