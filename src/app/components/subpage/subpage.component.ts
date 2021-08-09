import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
export class SubpageComponent implements OnInit {

  constructor(public productsthumbanail:ProductsService) { }
product:any;
  ngOnInit(): void {

    this.productsthumbanail.productsData().subscribe((posres)=>{
      this.product=posres;
    })




  }

}
