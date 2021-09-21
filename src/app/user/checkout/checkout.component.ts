import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CouponService } from 'src/app/services/coupon.service';
import {Location} from "@angular/common"

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private fb: FormBuilder, private cs: CheckoutService,
    private adress: AddressService, private couponservice: CouponService
    , public cart: CartService,private route:Router , public routes:ActivatedRoute , public location:Location) { }

  check: any
  grandtotal = 0;
  checkitems: any
  coupon: any
  default: any
  defaultid: any
  paytotal = 0;
  applied: boolean = false;
  discount = 0;
  isLinear = false;
  click:boolean=false;

  public couponResponse:string = "Enter the coupon code in the form below."
  public couponResponseClass:string = "staticText"
  
 public data:any = {}


ngOnInit(): void {

  
  
  this.getOrderById()
  // this.getchecked()
  // this.getadress();
  // this.getcoupon();
  // this.cs.cast.subscribe(res=>this.data=res)
}

getOrderById(){
  this.routes.params.subscribe(res=>{
    this.cs.getOrderById(res.id).subscribe(res => {
      console.log(res);
      if(res.promo){
        this.couponResponseClass = "staticText"
        this.couponResponse = `${res.promo} promo applied`
        this.click = true
      }
      else
        this.click = false
      this.data = res
    })
  })
}

 couponApply(couponValue:any){
   if(couponValue == ""){
    this.couponResponse = "Enter a coupon to proceed"
    this.couponResponseClass = "errorStaticText"
   }
  else
   this.cs.applyCoupon(this.data.id,couponValue).subscribe(res=>{   
     this.getOrderById()
   },
   (err)=>{
     this.couponResponse = err.error.apiresponse.description
     this.couponResponseClass = "errorStaticText"
   })  
 }
 couponCancel(){
  this.cs.cancelCoupon(this.data.id).subscribe(res=>{
    this.couponResponse = res.apiresponse.description
    this.getOrderById()
  })
 }

 checkOut(){
   this.cs.checkout(this.data.id).subscribe(
     (res)=>{
       console.log(res)
      localStorage.setItem("id",this.data.id)
      //  this.route.navigate([`/payment/${this.data.id}`])
      this.route.navigate([`/payment/${this.data.id}`])
     }
   )
 }

  getcoupon() {
    this.couponservice.getCoupons().subscribe((coupounres) => {
      this.coupon = coupounres;
    })
  }
  
  onSubmit() { }

  getadress() {
    this.adress.getdefult().subscribe((posres) => {
      console.log("abcedefghijklmnopqrst");
      console.log(posres)
      this.defaultid = posres.default
      console.log("defaultid")
      console.log(this.defaultid)
      this.adress.getdefaultadress().subscribe((res) => {
        this.default = res
        console.log("abcedefghijklmnopqrst");
        console.log(this.default)
      })
    })
  }

 
  getchecked() {
    this.cart.getitem().subscribe(res => {
      console.log(res);
      this.check = res

    })

    // this.cs.check().subscribe((posres)=>{
    //   this.check=posres;
    //   // this.checkitems=this.check[0].cartItems
    //   this.grandtotal += this.grandtotal;
    //   for (let x of this.check.cartItems) {
    //   // for (let x of this.checkitems) {

    //     this.grandtotal += x.quantity*x.price;
    //       console.log(this.grandtotal)
    //    }
    // })
  }

  change(val: any) {
    this.paytotal = this.grandtotal - val.target.value;
    this.discount = this.grandtotal - this.paytotal
    this.applied = true;
  }

}