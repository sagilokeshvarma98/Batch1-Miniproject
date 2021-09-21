import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminProtectionGuard implements CanActivate {
  constructor(public route:Router , public login:LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token:string = this.login.getToken() || ""
      let isAdmin:number = JSON.parse(atob(token.split(".")[1])).admin
      if(token && isAdmin===1)
        return true
      else{
        let toRoute = confirm("Please login as ADMIN to continue")
        if(toRoute === true){
          this.route.navigate(['/login'])
        }
        return false
      }
  }
  
}
