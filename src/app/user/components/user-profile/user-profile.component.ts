import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { LoginService } from 'src/app/services/login.service';
import { UserprofileService } from 'src/app/services/userprofile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  splittedtoekn: any
  unsplittedtoekn: any
  currentUser: any;

  constructor(private token: LoginService,private user:UserprofileService) { }

  logout() {
    this.token.logout();
  }

  gettoken() {
    if (this.token.getToken()) {
      this.unsplittedtoekn = localStorage.getItem("token") || '{}';
      this.splittedtoekn = this.unsplittedtoekn.split(".");


      this.currentUser = JSON.parse(atob(this.splittedtoekn[1]));
      localStorage.setItem("currentUser", this.currentUser);
      return this.currentUser;
    }
  }
  
deactivate(){

  // this.user.deleteaccount().subscribe((posres) => {

  //   console.log("deleted")
  // })
  this.user.deleteaccount().subscribe((posres) => {
console.log(posres)
    console.log("deactivated")
    this.logout();
  })
}

userprofile(){
  this.user.userprofile().subscribe((posres)=>{
    this.currentUser=posres
    console.log(posres)
  })
}

ngOnInit(): void {
  console.log("hai")
  // this.gettoken()
  this.userprofile();
  
}

}


