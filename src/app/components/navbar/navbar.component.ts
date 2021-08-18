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
  count:any
  
  //  userName:any=JSON.parse(`${localStorage.getItem("currentUser")}`);

  @Output() SideNavToggle = new EventEmitter(); 
   result:any;
  constructor(private token:LoginService ,private cart:CartService) { }

  openSidenav(){
    this.SideNavToggle.emit();
  }







  ngOnInit(): void {


    this.cart.cast.subscribe((posRes)=>{
      this.result = posRes;
      });
     



    this.gettoken()
this.cart.getitem().subscribe(posres=>{
  this.count=posres;
  console.log(this.count.length)
})
  

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
