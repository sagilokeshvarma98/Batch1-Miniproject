import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  constructor(private os: CartService, private route: Router) { }

  @Input() itemData: any
  @Input() quantity: any = 0
  @Output() displayNotification = new EventEmitter()
  isincart: boolean = false;
  ngOnInit(): void {
    console.log(this.quantity)
  }
  getitem() {
    this.os.getitem().subscribe((posres) => {
      console.log("this posres")
      console.log(posres.cartItems.map((user: any) => {
        console.log(user.product.id)
        if (user.product.id == this.itemData.id) {
          console.log("hai")
          this.isincart = true;
        }
      }))
      if (!this.isincart) {
        console.log("if")
        this.os.additem(this.quantity, this.itemData.id).subscribe((posres) => {
          console.log("item added")
          console.log(posres)

          this.os.changeData();
        })
      }
      else {
        console.log("else")
        this.route.navigate(['cart']);
      }
      console.log(this.isincart)
    })
  }



  AddToCart() {
    if(this.quantity>0){
      this.getitem()
    }
    else{
      this.displayNotification.emit(true)
    }
  }
}
