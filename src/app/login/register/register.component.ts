import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { CustomvalidatorsService } from 'src/app/services/custom-validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted:boolean= false;
  Getresponse:any
   Email_pattern= new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  constructor(private fb:FormBuilder, private customvalid:CustomvalidatorsService , public route:Router ,private cs:CartService) {
    this.registerForm=this.fb.group(
      {
        fullName:['',[Validators.required,Validators.minLength(3)]],
        username:['',[Validators.required,Validators.minLength(3)]],
        email:['',[Validators.required,Validators.pattern(this.Email_pattern)]],
        mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        password: ['',[Validators.required,Validators.pattern(this.strongRegex)]],
        confirmPassword: ['', [Validators.required]],
        term:['',[Validators.required]]

      },{
        validator: this.customvalid.MatchPassword('password', 'confirmPassword'),
      }
    )
   }

   public wrongCreden:any = false
   ErrorMessage : string = ""
   registerFormValidate : string = "card"

   onSubmit(){
    this.submitted = true;
    let userData = {
      ...this.registerForm.value
    }
   this.customvalid.postdata(userData)
   .subscribe((res:any)=>{
    this.route.navigate(['successfulRegister'])
   },
   (error:HttpErrorResponse)=>{
     this.registerFormValidate = "card loginFormError"
     this.ErrorMessage = error.error.apierror.subErrors
    this.wrongCreden = true
   })
   }
   get registerFormControl() {
    return this.registerForm.controls;
  }

  hideEmailValidate = false

  checkUsername(check:any){
    let userName = this.registerForm.value.username
    if(!check.errors)
    this.customvalid.checkUsername(userName).subscribe(res=>console.log(res)
    ,
    error=>{
      this.ErrorMessage = error.error.apiresponse.description
    })
  }

   validteEmail(check:any){
     let Email = this.registerForm.value.email
    if(!check.errors)
    this.customvalid.checkEmail(Email).subscribe(res=>{
      this.ErrorMessage = ""
    }
    ,
    error=>{
      this.ErrorMessage = error.error.apiresponse.description
    })
   }

   validteMobile(check:any){
    let Mobile = this.registerForm.value.mobile
   if(!check.errors)
     this.customvalid.checkMobile(Mobile).subscribe(res=>console.log(res)
     ,
    error=>{
      this.ErrorMessage = error.error.apiresponse.description
    })
  }
  
  ngOnInit(): void {
    this.route.navigate(['successfulRegister'])
  // this.getData();
 }

}
