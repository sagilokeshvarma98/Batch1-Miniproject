import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  splittedtoekn: any
  unsplittedtoekn: any
  currentUser: any;

  constructor(private token: LoginService) { }

  logout() {
    this.token.logout();
  }

  gettoken() {
    if (this.token.getToken()) {
      this.unsplittedtoekn = localStorage.getItem("token") || '{}';
      this.splittedtoekn = this.unsplittedtoekn.split(".");


      this.currentUser = JSON.parse(atob(this.splittedtoekn[1]));
      localStorage.setItem("currentUser",this.currentUser);
      return this.currentUser;
    }
  }
  ngOnInit(): void {
    this.gettoken()
  }

}
