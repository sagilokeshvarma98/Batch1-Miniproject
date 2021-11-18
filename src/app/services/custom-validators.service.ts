import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidatorsService {

 
  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  constructor(public http:HttpClient) { }

  checkUsername(name:any):Observable<any> {
    return this.http.get("http://oshopping.ddns.net/api/user/checkusername/"+name)
  }

  checkEmail(email:any):Observable<any> {
    return this.http.get("http://oshopping.ddns.net/api/user/checkemail/"+email)
  }

  checkMobile(mobile:any):Observable<any> {
    return this.http.get("http://oshopping.ddns.net/api/user/checkmobile/"+mobile)
  }

   postdata(data:any) {
    return this.http.post("http://oshopping.ddns.net/api/user/register",data) 
  }

}
