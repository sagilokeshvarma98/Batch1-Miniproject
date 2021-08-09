import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-mens-subpage',
  templateUrl: './mens-subpage.component.html',
  styleUrls: ['./mens-subpage.component.css']
})
export class MensSubpageComponent implements OnInit {

  constructor(private homepageservice:ProductsService) { }
mens:any;
  ngOnInit(): void {
    

    this.homepageservice.productsData().subscribe((posres)=>{
  
      this.mens=posres;
      
      })
  }

}
