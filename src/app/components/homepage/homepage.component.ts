import { Component, OnInit } from '@angular/core';

import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private homepageservice:ProductsService) { }
mens:any;
elctronics:any;
jwelery:any;
showFiller = false;

isShown: boolean = false ; // hidden by default
public toggleShow() {
    
  this.isShown =  this.isShown;
  
  }
  hs=[
    {'heading':'100% SECURE PAYMENTS', 'confirm':"Moving your card deatails into  more secure place ", 'img':'assets/Homeappliance/s.png'},
    {'heading':'TRUSTPAY', 'confirm': '100% Payments Protection.Easy Return Policy'  ,'img':'assets/Homeappliance/z.png'},
    { 'heading':'HELP CENTER', 'confirm':'Got a Question?look at this further Submit your FAQ here','img':'assets/Homeappliance/x.png'},
    { 'heading':'SHOP ON THE GO', 'confirm':'Download the app and  get exiciting the app  only offers at your fingertips' ,'img':'assets/Homeappliance/icon.png'},
    
    
    
  ]
  ngOnInit(): void {

// this.homepageservice.productsData().subscribe((posres)=>{

// this.mens=posres;

// })
// this.homepageservice.productsData().subscribe((posres)=>{

//   this.elctronics=posres;
  
//   })
//   this.homepageservice.productsData().subscribe((posres)=>{

//     this.jwelery=posres;
    
//     })


   
  }

}
