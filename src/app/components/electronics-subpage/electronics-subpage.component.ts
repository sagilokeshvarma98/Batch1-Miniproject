import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-electronics-subpage',
  templateUrl: './electronics-subpage.component.html',
  styleUrls: ['./electronics-subpage.component.css']
})
export class ElectronicsSubpageComponent implements OnInit {

  constructor(private homepageservice:ProductsService) { }
electronics:any;
  ngOnInit(): void {
    

  this.homepageservice.productsData().subscribe((posres)=>{
  
    this.electronics=posres;
    
    })
   
  }

}
