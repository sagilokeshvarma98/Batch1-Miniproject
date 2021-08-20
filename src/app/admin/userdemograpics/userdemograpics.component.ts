import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomvalidatorsService } from 'src/app/services/custom-validators.service';
import { UsermanagementService } from 'src/app/services/usermanagement.service';

@Component({
  selector: 'app-userdemograpics',
  templateUrl: './userdemograpics.component.html',
  styleUrls: ['./userdemograpics.component.css']
})
export class UserdemograpicsComponent implements OnInit {
id:any

userdemographics:any
moredetails:boolean=false;
panelOpenState = false;
passwordreset:FormGroup;
submitted:boolean=false;
strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

constructor(private fb:FormBuilder,private customvalid:CustomvalidatorsService ,private ud:UsermanagementService, public route:Router ) {
  this.passwordreset=this.fb.group(
    {
     
      password: ['',[Validators.required,Validators.pattern(this.strongRegex)]],
      confirmPassword: ['', [Validators.required]],
  

    },{
      validator: this.customvalid.MatchPassword('password', 'confirmPassword'),
    }
  )
 }
_id(id:any){
  this.id=id
  console.log(id)
}


 onSubmit(){
 
  
  let userData = {
  

    "password":  this.passwordreset.value.password,
     
 
    
  }
 this.ud.updatepassword(userData,this.id)
 
 .subscribe((res:any)=>{
   console.log(res);
   console.log(this.id);
   
 })

 this.submitted = true;

  if (this.submitted==true) {
    console.log("Form Submitted!");
    this.passwordreset.reset();
  }
 

 }
 get registerFormControl() {
  return this.passwordreset.controls;
}



  toggleShow() {

    this.moredetails = ! this.moredetails;
    
    }

getuser(){
  this.ud.userdemographics().subscribe((posres)=>{

    this.userdemographics=posres;
  })
}

recoversuccess(value:any){
  console.log(value);
  if(value=="success"){
    this.getuser();
  }
}

  ngOnInit(): void {
 
    this.getuser();
   
  }

}
