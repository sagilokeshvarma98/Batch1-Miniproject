import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetService } from 'src/app/services/forget.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  submitted:boolean=false;

  constructor(private forget:ForgetService,private formbuilder: FormBuilder) {
    this.forgotForm = this.formbuilder.group({

      mobileNumber: ['', Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],

    });
  }
  get forgetFormControl() {
    return this.forgotForm.controls;
  }

  ngOnInit(): void {
  }
  
  onSubmit(value: any) {
    this.submitted=true;
    this.forget.postForget(value).subscribe(res=>{
      console.log("forgotForm",res);
      this.forgotForm.reset();
    })
  }


}
