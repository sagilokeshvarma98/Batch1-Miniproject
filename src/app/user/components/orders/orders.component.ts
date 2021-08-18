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

cancelorder(obj:any,id: any){
  this.confirm = confirm("do you want confirm delet item")
  if (this.confirm == true) {

    
this.myorder.posttocancel(obj).subscribe((posres)=>{
  console.log(id);
  console.log(posres);
 
})

this.myorder.cancelorder(id).subscribe((posres)=>{
  this.getorder();
  console.log(id);
  console.log(posres);
})
  }
else {
  alert("ok")
}



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
