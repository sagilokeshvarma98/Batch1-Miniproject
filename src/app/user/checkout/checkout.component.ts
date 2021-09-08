import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private fb: FormBuilder, private cs: CheckoutService,
    private adress: AddressService, private couponservice: CouponService
    , public cart: CartService,private route:Router) { }

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


  
 public data=
 {
 "id": 43,
 "userId": 1243,
 "token": null,
 "subTotal": 499.010,
 "itemDiscount":50,
 "qty":"1",
 "tax": 0,
 "shipping": 0,
 "total": 459.010,
 "promo": null,
 "discount": 0,
 "grandTotal": 459.010,
 "status": {
 "id": 1,
 "name": "NEW",
 "description": "Order initiated"
 },
 "fullName": "Sagi Lokesh varma",
 "mobile": "9182074913",
 "email": "lokeshvibe@gmail.com",
 "createdAt": null,
 "updatedAt": null,
 "content": null,
 "orderItems": null
 }

 couponApply(){
this.click=true;   
 }
 couponCancel(){
  this.click=false;
 }

 checkOut(){
   this.cs.checkout(localStorage.getItem("id")).subscribe(
     (res)=>{
       console.log(res)
      //  this.route.navigate(['/order'])
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
      this.defaultid = posres.default
      console.log("defaultid")
      console.log(this.defaultid)
      this.adress.getdefaultadress(this.defaultid).subscribe((res) => {
        this.default = res

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
  ngOnInit(): void {
    this.getchecked()
    this.getadress();
    this.getcoupon();

  }

}
