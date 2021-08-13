import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMINRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ValuePipe } from './pipes/value.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CouponComponent } from './coupon/coupon.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    InventoryComponent,
    ValuePipe,
    SearchPipe,
    InventoryComponent,
    CouponComponent
  ],
  imports: [
    CommonModule,
    ADMINRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ADMINModule { }
