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
  total = 0;
  grandtotal: any;
  cart: any;
  confirm: any
  cartlength:any
  cartitems:Array<any>=[];
  obj:any
 result:any;

  

  constructor(private os: CartService , public check:CheckoutService) { }

  change(val: any, id: any) {
let qty={
  "quantity":val.target.value
};
this.os.selcetquantity(qty ,id).subscribe((res)=>{
  this.getcartitem();
  console.log(res)

})
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


  chechOutCart(){
    this.check.checkout().subscribe(res=>console.log(res)
    )
  }





  getcartitem() {
    this.os.getitem().subscribe((posres) => {
      this.cart = posres
     console.log(posres)
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

      this.total += this.total;

      for (let x of this.cart.cartItems) {
      //  for (let x of this.cartitems) {

       this.total += x.quantity*x.price;
      //  console.log("total")
        //  console.log(this.total)
      }
     }
    )

  }


  ngOnInit() {

    this.getcartitem();
    this.os.getname(1).subscribe((posres)=>{
      console.log(posres)
      
    

    })


    this.os.cast.subscribe((posRes)=>{
      this.result = posRes;
 
  })

  

}


}
