import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AddressService } from 'src/app/services/adress.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private fb:FormBuilder,private cs:CheckoutService,private adress:AddressService,private couponservice:CouponService){}

check:any
grandtotal=0;
checkitems:any
coupon:any
default:any
defaultid:any
paytotal=0;
applied:boolean= false;
discount=0;
isLinear = false;



getcoupon(){
  this.couponservice.getCoupons().subscribe((coupounres)=>{

    this.coupon=coupounres;
  })
}



onSubmit(){}

getadress(){

  this.adress.getdefult().subscribe((posres)=>{
    this.defaultid=posres.default
    console.log("defaultid")
    console.log(this.defaultid)
  


  this.adress.getdefaultadress(this.defaultid).subscribe((res)=>{
    this.default=res

    console.log(this.default)
  })

})

}



getchecked(){
  this.cs.check().subscribe((posres)=>{
    this.check=posres;
    // this.checkitems=this.check[0].cartItems

    this.grandtotal += this.grandtotal;
    for (let x of this.check.cartItems) {
    // for (let x of this.checkitems) {
  
      this.grandtotal += x.quantity*x.price;
        console.log(this.grandtotal)
     }
  })
}


change(val:any){
  this.paytotal= this.grandtotal-val.target.value;
  this.discount=this.grandtotal-this.paytotal
  this.applied=true;



}


  ngOnInit(): void {
this.getchecked()
this.getadress();
this.getcoupon();

  }

}
