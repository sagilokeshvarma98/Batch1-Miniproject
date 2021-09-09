import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidatorsService } from 'src/app/services/custom-validators.service';
import { ForgetService } from 'src/app/services/forget.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  submitted: boolean = false;
  resetForm: FormGroup;
  err:any;
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  constructor(private formBuilder: FormBuilder, public reset: ForgetService, public customvalid: CustomvalidatorsService, public route: Router) {

    this.resetForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.pattern(this.strongRegex)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: this.customvalid.MatchPassword('password', 'confirmPassword'),
    }
    )
  }
  onSubmit() {
    this.submitted = true
    console.log(this.resetForm.value);
    this.reset.resPassword(this.resetForm.value, this.token).subscribe(res => {
      console.log(res);
      localStorage.clear(),
      this.err="Your Password is Reset"

    }, () => { localStorage.clear(); })
  }
  get resetFormControl() {
    return this.resetForm.controls;
  }
  public token: string = ""

  ngOnInit(): void {
    let urlArr = this.route.url.split('=')
    this.token = urlArr[1]
    console.log("token is", this.token);

  }

}
