import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon-post',
  templateUrl: './coupon-post.component.html',
  styleUrls: ['./coupon-post.component.css']
})
export class CouponPostComponent implements OnInit {

  couponPost: FormGroup ;
  submitted= false;
  modalService: any;

  constructor(private cup: CouponService, private fb: FormBuilder, private toastr: ToastrService) { 
    this.couponPost = this.fb.group({
      coupon: ['', [Validators.required,Validators.pattern("^[A-Z0-9]{8}"),Validators.minLength(8)]],
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
  }
  onSaveCoupon() {
    this.submitted=true;
    this.cup.postCoupon(this.couponPost.value).subscribe(
      () => {
        this.couponPost.reset();
        this.toastr.success("Coupons are saved successfully.", "Success")
      },
      ()=>{
        this.toastr.error("Plz Check Your Coupons.", "Error")
      } 
    );
  }
}
