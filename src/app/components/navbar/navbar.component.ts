import { Component, EventEmitter, OnInit, Output ,ViewChild, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  istoken:any = false
  currentUser: any;
  cart: any;
  result: any;

 
  constructor(private token:LoginService ,private cartservice:CartService) { }
   
  ngOnInit(): void {
    
    this.cartservice.cast.subscribe((posRes: any)=>{
      this.result = posRes;
      
      });
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
