import { Component, EventEmitter, OnInit, Output ,ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductsService } from 'src/app/services/products.service';


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
  searchTerm:any

  getSearchValue(searchTerm:any) {
    if(searchTerm === '')
        searchTerm = "All"
    this.PS.changeSearchTerm(searchTerm)
    this.route.navigate([`products/${searchTerm}`])
    // this.PS.searchByTerm(searchTerm).subscribe(res=>console.log(res))
    // this.route.navigate(['products'])
  }
 
  constructor(private token:LoginService ,private cartservice:CartService , private PS:ProductsService , private route:Router) { }
   
  ngOnInit(): void {
    this.cartservice.cast.subscribe((posRes: any)=>{
      this.result = posRes;
      });
    this.cartservice.getitem().subscribe((posRes: any)=>{
      this.result = posRes.cartItems.length;
      });
    this.gettoken()
  }

  islogout() {
    this.token.logout()
  }

  gettoken() {
    if (this.token.getToken()) {
      this.istoken = true
    }
  }

 


  
}
