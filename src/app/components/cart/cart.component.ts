import { Component, OnInit } from '@angular/core';

import { ElementSchemaRegistry } from '@angular/compiler';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total = 0;
  grandtotal:any;
  cart: any;
  confirm: any

  constructor(private os: CartService) { }

  change(val: any, id: any) {

    if (val.target.value == 0) {

      this.confirm = confirm("do you want confirm delet item")
      if (this.confirm == true) {

        this.os.deleteitem(id).subscribe((posres) => {
          console.log(posres)
          this.getcartitem();


        })

      }
      else {
        alert("ok")
      }

    }

    console.log(val.target.value)

    console.log(id)

  }





  placeOrder() {
    console.log("It is called")
    if (this.cart.length > 0)
      this.os.makeOrder();
    else
      alert("cart is empty")
  }

  getcartitem() {
    this.os.getitem().subscribe((posres) => {
      this.cart = posres

      console.log(this.cart)
      for (let x of this.cart) {
       
      this.total += x.quantity * x.price;
        console.log(this.total)
      }
    }
    )

  }


  ngOnInit() {

    this.getcartitem();

  }

}
