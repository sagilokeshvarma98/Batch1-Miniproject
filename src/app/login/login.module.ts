import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SuccessfulRegistrationComponent } from './successful-registration/successful-registration.component';
import { PasswordShowDirective } from './directives/password-show.directive';


@NgModule({
  declarations: [
    RegisterComponent,
    SigninComponent,
    ForgotPasswordComponent,
    SuccessfulRegistrationComponent,
    PasswordShowDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
