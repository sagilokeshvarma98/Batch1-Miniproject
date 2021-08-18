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
import { SuccessfulComponent } from './transactionComponents/successful/successful.component';
import { PendingCancellationComponent } from './transactionComponents/pending-cancellation/pending-cancellation.component';
import { FailedComponent } from './transactionComponents/failed/failed.component';
import { AlltransactionsComponent } from './transactionComponents/alltransactions/alltransactions.component';
import { TransactionHomeComponent } from './transactionComponents/transaction-home/transaction-home.component';
import { RouterModule } from '@angular/router';
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AdminHomeComponent,
    InventoryComponent,
    ValuePipe,
    SearchPipe,
    UserdemograpicsComponent,
    UsermanagmentComponent,
    RecoveryComponent,
    CouponComponent,
    SuccessfulComponent,
    PendingCancellationComponent,
    FailedComponent,
    AlltransactionsComponent,
    TransactionHomeComponent
  ],
  imports: [
    CommonModule,
    ADMINRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngmaterialModule,
    ToastrModule.forRoot(),
  ]
})
export class ADMINModule { }
