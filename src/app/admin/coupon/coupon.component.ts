import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  couponPost: FormGroup;
  submitted= false;
  couponCode: any;
  modalService: any;

  constructor(private cup: CouponService, private fb: FormBuilder, private toastr: ToastrService) {

    this.couponPost = this.fb.group({
      coupon: ['', [Validators.required,Validators.minLength(6)]],
      eligibul: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]]
    }
    );
  }
  get couponFormControl() {
    return this.couponPost.controls;
  }

  ngOnInit(): void {
    this.getCoupon();
  }
  onSaveCoupon() {
    this.submitted=true;
    let temp = {
      coupon: this.couponPost.value.coupon,
      eligibul: this.couponPost.value.eligibul,
      start: this.couponPost.value.start,
      end: this.couponPost.value.end

    }
    this.cup.postCoupon(temp).subscribe(
      () => {
        this.couponPost.reset();
        this.toastr.success("Coupons are saved successfully.", "Success")
      },
      ()=>{
        this.toastr.error("Plz Check Your Coupons.", "Error")
      } 
    );
  }
  getCoupon(){
    this.cup.getCoupons().subscribe(
      (data)=>{this.couponCode= data}
    )
  }


}
