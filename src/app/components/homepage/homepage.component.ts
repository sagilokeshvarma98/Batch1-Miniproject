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
  ngOnInit(): void {

this.homepageservice.productsData().subscribe((posres)=>{

this.mens=posres;

})
this.homepageservice.productsData().subscribe((posres)=>{

  this.elctronics=posres;
  
  })
  this.homepageservice.productsData().subscribe((posres)=>{

    this.jwelery=posres;
    
    })


   
  }

}
