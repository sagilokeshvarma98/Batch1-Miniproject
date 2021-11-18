import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  submitted:boolean=false;
  success:string=""
  err:string='';

  constructor(private formbuilder: FormBuilder,private forgot:LoginService) {
    this.forgotForm = this.formbuilder.group({
      mobileNumber: ['',[ Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }

  get forgetFormControl() {
    return this.forgotForm.controls;
  }

  
  onSubmit(value: any) {
    console.log("forgotForm", value.mobileNumber);
    this.forgotForm.reset();
    this.forgot.forgotpost(value.mobileNumber).subscribe(res=>{
      console.log(res),
      this.err=""
      this.success="Check your email for reset link"
    },
    (err)=>{
      this.success = ""
      this.err="Phone number is incorrect"
    })
    // console.log(userData);
  }


}
