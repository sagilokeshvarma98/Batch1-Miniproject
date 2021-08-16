import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  istoken:any = false

  @Output() SideNavToggle = new EventEmitter(); 
 
  constructor(private token:LoginService) { }

  openSidenav(){
    this.SideNavToggle.emit();
  }
   
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
