import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-kitchen-subpage',
  templateUrl: './kitchen-subpage.component.html',
  styleUrls: ['./kitchen-subpage.component.css']
})
export class KitchenSubpageComponent implements OnInit {

  constructor(private homepageservice:ProductsService) { }
jwelery:any;
  ngOnInit(): void {
    

    this.homepageservice.productsData().subscribe((posres)=>{
  
      this.jwelery=posres;
      
      })
  }

}
