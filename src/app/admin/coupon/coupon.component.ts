import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CouponService } from 'src/app/services/coupon.service';
import { CouponPostComponent } from '../coupon-post/coupon-post.component';


@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  couponCard: any;
  modalService: any;
  couponPost: any;
  submitted:boolean=false;

  openDialog() {
    const dialogRef = this.dialog.open(CouponPostComponent);
    dialogRef.afterClosed().subscribe(
      (res => {
        console.log(`CouponPost : ${res}`)
      })
    )
  }

  constructor(private cup: CouponService,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCoupon();
  }

  getCoupon() {
    this.cup.getCoupons().subscribe(
      (data) => { this.couponCard = data }
    )
  }
}
