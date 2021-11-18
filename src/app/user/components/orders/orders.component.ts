import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

// import { ProductsService } from 'src/app/services/products.service';
// import { convertToObject } from 'typescript';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private OS: OrdersService) { }

  id: any;
  myorders: any
  confirm: any
  status = "shipped"
  state: boolean = false;
  orderItems: any[] = []

  cancelorder(id: any) {
    this.confirm = confirm("do you want confirm cancel item")
    if (this.confirm == true) {
      this.status = "canceld"
      if (this.status = "canceld") {
        this.state = true
      }
      this.getorder();
      console.log(id);
    }
    else {
      alert("ok")
    }
  }

  reorder() {
    this.state = false;
    this.status = "reorderd"
  }

  reOrder(id:any) {
    this.OS.reOrder(id).subscribe(res=>{
      console.log(res);
      this.getorder()
    }
    )
  }

  getorder() {
    console.log("hai");
    this.OS.getmyorders().subscribe(
      (data) => {
        this.myorders = data
        console.log(this.myorders);
        this.myorders.map((x: any) => {
          x.orderItems.map((y: any) => {
            y.status = x.status
            this.orderItems.push(y)
          })
        })
        console.log(this.orderItems);
      })
  }

  deleteItem(id:any) {
    this.OS.deleteOrder(id).subscribe(res=>this.getorder())
  }


  ngOnInit(): void {
    this.getorder();
  }
}
