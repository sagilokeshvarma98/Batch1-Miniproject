import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  submitted:boolean=false;
  err:any;

  constructor(private formbuilder: FormBuilder,private forgot:LoginService) {
    this.forgotForm = this.formbuilder.group({
      mobileNumber: ['',[ Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }
  get forgetFormControl() {
    return this.forgotForm.controls;
  }

  ngOnInit(): void {
  }
  
  onSubmit(value: any) {
    console.log("forgotForm", value.mobileNumber);
    this.forgotForm.reset();
    this.forgot.forgotpost(value.mobileNumber).subscribe(res=>{
      console.log(res),
      this.err="Check Your Register Email"
    })
    // console.log(userData);
  }


}
