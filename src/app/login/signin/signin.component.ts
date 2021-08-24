import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  constructor(public ls:LoginService, public route:Router) { }

  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  })

  price:any = '500'

  wrongCreden:Boolean = false

  inputClass:string = "loginForm"

  ngOnInit(): void {
  }

  get controls(){
    return this.loginForm.controls
  }

  errorInForms(){
    console.log("error occured");
  }

  controller(){

  }

  submit(){
    let username = this.loginForm.value.username
    let password = this.loginForm.value.password
    if(username !="" || password!=""){
      this.ls.login(this.loginForm.value).subscribe(res=>{
       if(res.token){
        let user = JSON.parse(atob(res.token?.split(".")[1]))
        localStorage.setItem("currentUser",user.sub)
        localStorage.setItem("token",res.token)
        console.log(user.sub,user.admin);
        if(user.admin==0)
        this.route.navigate([`/`])
        else
        this.route.navigate(['/admin'])    
       }
       },
       error=>{
         console.log(error);
       }
       )
    }
    else{
      this.wrongCreden = true
      this.inputClass = "loginFormError"
    }
  }

  routeToRegister(){
    this.route.navigate(['/register'])
  }

}
