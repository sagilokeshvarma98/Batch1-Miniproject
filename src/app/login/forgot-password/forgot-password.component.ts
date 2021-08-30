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

  constructor(private forget:ForgetService,private formbuilder: FormBuilder) {
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
    this.forget.postForget("thota.nagaraju1432@gmail.com").subscribe(res=>{
      console.log("forgotForm",res);
      this.forgotForm.reset();
    })
    
  }

}
