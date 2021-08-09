import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private myorder:ProductsService) { }

  id:any;
myorders:any;

  ngOnInit(): void {

    this.myorder.productsData()  .subscribe(
      (data)=>this.myorders = data
    )
    // this.route.params.subscribe(
    //   (idNo)=>{
    //     this.id = 3
    //     console.log(this.id);
    //   },
    //   ()=>console.log("id no is not found")      
    // )
    //   this.myorder.getmensdata(this.id).subscribe(
    //     (data)=>this.myorders = data
    //   )
  }
}
