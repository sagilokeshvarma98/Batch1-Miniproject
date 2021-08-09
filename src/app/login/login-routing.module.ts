import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SuccessfulRegistrationComponent } from './successful-registration/successful-registration.component';

const routes: Routes = [{path:"login",component:SigninComponent},
{path:"register",component:RegisterComponent},
{path:"forgotPass",component:ForgotPasswordComponent},
{path:"successfulRegister",component:SuccessfulRegistrationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
