import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

import { ProductsService } from 'src/app/services/products.service';
import { convertToObject } from 'typescript';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private myorder:OrdersService) { }

  id:any;
myorders:any;
confirm:any
status="shipped"
state:boolean=false;

cancelorder(id: any){
  this.confirm = confirm("do you want confirm cancel item")
  if (this.confirm == true) {

    

  this.status="canceld"

  if( this.status="canceld"){
    this.state=true
  }
 
  this.getorder();
  console.log(id);
  
  }
else {
  alert("ok")
}
}
reorder(){
  this.state=false;
  this.status="reorderd"
}

getorder(){
  this.myorder.getmyorders() .subscribe(
    (data)=>{this.myorders = data
      console.log(data);
      }  )
}






  ngOnInit(): void {
this.getorder();
 
  
  }
}
