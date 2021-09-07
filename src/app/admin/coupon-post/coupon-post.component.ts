import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon-post',
  templateUrl: './coupon-post.component.html',
  styleUrls: ['./coupon-post.component.css']
})
export class CouponPostComponent implements OnInit {

  couponPost: FormGroup;
  submitted = false;
  error: any;

  constructor(private cup: CouponService, private fb: FormBuilder, private toastr: ToastrService) {
    this.couponPost = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(8)]],
      couponType:['',[Validators.required]],
      couponAmount: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
      description:['',[Validators.required]]
    });
  }

  get f() {
    return this.couponPost.controls;
  }

  ngOnInit(): void {
  }

  onSaveCoupon() {
    this.submitted = true;
    if (this.couponPost.invalid) {
      this.error = "Plz Fill All Filelds";
      this.toastr.error("Plz Check Your Coupons.", "Error")
    }
    else {
      this.cup.postCoupon(this.couponPost.value).subscribe(
        () => {
          
          this.toastr.success("Coupons are saved successfully.", "Success"),
          this.couponPost.reset();
        }
      );
    }
  }


}
