import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMINRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ValuePipe } from './pipes/value.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdemograpicsComponent } from './userdemograpics/userdemograpics.component';
import { UsermanagmentComponent } from './usermanagment/usermanagment.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { CouponComponent } from './coupon/coupon.component';
import { ToastrModule } from 'ngx-toastr';
import { AngmaterialModule } from '../angmaterial/angmaterial.module';

@NgModule({
  declarations: [
    AdminHomeComponent,
    InventoryComponent,
    ValuePipe,
    SearchPipe,
    UserdemograpicsComponent,
    UsermanagmentComponent,
    RecoveryComponent,
    CouponComponent
  ],
  imports: [
    CommonModule,
    ADMINRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngmaterialModule,
    ToastrModule.forRoot(),
  ]
})
export class ADMINModule { }
