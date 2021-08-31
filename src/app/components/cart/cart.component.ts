import { Component, Input, OnInit } from '@angular/core';
// import { ElementSchemaRegistry } from '@angular/compiler';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public total = 0;
  public grandtotal: any;
  public cart: any;
  public confirm: any
  public cartlength:any
  public cartitems:Array<any>=[];
  public obj:any
  public result:any;
  public length:boolean = false

  constructor(private os: CartService , public check:CheckoutService) { }

  change(val: any, id: any) {
let qty={
  "quantity":val.target.value
};
// this.os.selcetquantity(qty ,id).subscribe((res)=>{
//   this.getcartitem();
//   console.log(res)
// })
    if (val.target.value == 0) {
      this.confirm = confirm("do you want confirm delet item")
      if (this.confirm == true) {
        this.os.deleteitem(id).subscribe((posres) => {
          console.log(posres)
          this.getcartitem();
          // window.location.reload();
          this.os.changeData();
          console.log("delete success")
        })
      }
      else {
        alert("ok")
      }
    }
    // console.log(val.target.value)
    // console.log(id)
  }

  deleteItem(id:any){

    console.log(id);
    
    this.confirm = confirm("do you want confirm delete item")
      if (this.confirm == true) {
        this.os.deleteitem(id).subscribe((posres) => {
          console.log(posres)
          this.getcartitem();
          // window.location.reload();
          this.os.changeData();
          console.log("delete success")
        })
      }
      else {
        alert("ok")
      }
  }

  addQuantity(id:any){
    this.cart.cartItems.map((x:any)=>{
      if(x.id == id){
        if(x.quantity<x.product.quantity)
        {
          x.quantity = x.quantity+1
        }
        else
        alert(`The seller has only ${x.product.quantity} available`)
      }
    })
  }

  updateItem(id:any){
    this.cart.cartItems.map((x:any)=>{
      if(x.id == id)
        this.os.updateItem(id,x.quantity).subscribe(res=>this.getcartitem())
    })
  }

  minusQuantity(id:any){
    this.cart.cartItems.map((x:any)=>{
      if(x.id == id){
        if(x.quantity>1){
          x.quantity = x.quantity-1
        }
        else
        this.deleteItem(id)
      }
    })
  }

  chechOutCart(){
    this.check.checkout().subscribe(res=>console.log(res)
    )
  }


  getcartitem() {
    this.os.getitem().subscribe((posres) => {
      this.total = 0  
      this.cart = posres
      console.log(this.cart);
      this.cart.cartItems.map(
        (x:any)=>{
          x.quantityChange = x.quantity
          this.total = this.total+x.price-x.discount
        }
      ) 
      if(this.cart.cartItems.length>0)
        this.length = true
    //  this.cartitems=this.cart.cartItems[0]
      // for(var i=0; i<=this.cart.length;i++){
      //   // this.cartitems=this.cart[i].cartItems[0];
      //  this.cartitems[i]= this.cart[i].cartItems[0]
      //  console.log(this.cartitems)
      // }
    //  console.log(this.os.changeData())
    // 
    //  
    //  this.cartlength =this.cartitems.length
    //  console.log("product")
    //   console.log(this.cartitems[0].product.imageUrls[0])
    //   console.log("imageurl")
    //   console.log(this.cartitems[0].product.imageUrls[0].imgUrl)

      // this.total += this.total;

      // for (let x of this.cart.cartItems) {
      // //  for (let x of this.cartitems) {

      //  this.total += x.quantity*x.price;
      // //  console.log("total")
      //   //  console.log(this.total)
      // }
     }
    )
  }


  ngOnInit() {
    this.getcartitem();
    // this.os.getname(1).subscribe((posres)=>{
    //   console.log(posres)
    // })
    this.os.cast.subscribe((posRes)=>{
      this.result = posRes;
  })
}


}
