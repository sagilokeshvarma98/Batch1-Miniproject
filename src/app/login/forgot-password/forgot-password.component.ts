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

  constructor(private formbuilder: FormBuilder,private forgot:LoginService) {
    this.forgotForm = this.formbuilder.group({

      'mobileNumber': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
    });
  }
  ngOnInit(): void {
  }
  get mobileNumber() {
    return this.forgotForm.get('mobileNumber')
  }
  onSubmit(value: any) {
    console.log("forgotForm", value.mobileNumber);
    this.forgotForm.reset();
    
    // let userData = {
    //   ...this.forgotForm.value
    // }
    this.forgot.forgotpost(value.mobileNumber).subscribe(res=>{
      console.log(res);
    
    })
    // console.log(userData);
  }

}
