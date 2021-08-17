import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  istoken:any = false
  currentUser: any;

 
  constructor(private token:LoginService) { }
   
  ngOnInit(): void {

    this.gettoken()
  }
  islogout(){
    this.token.logout()
  }
  gettoken(){
    if (this.token.getToken()) {
      this.istoken = true
    }
  }




  
}
