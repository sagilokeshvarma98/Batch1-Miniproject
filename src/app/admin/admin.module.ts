import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMINRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { InventoryComponent } from './inventory/inventory.component';
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
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CouponPostComponent } from './coupon-post/coupon-post.component';
import { ProductPostComponent } from './product-post/product-post.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    InventoryComponent,
    UserdemograpicsComponent,
    UsermanagmentComponent,
    RecoveryComponent,
    CouponComponent,
    SuccessfulComponent,
    PendingCancellationComponent,
    FailedComponent,
    AlltransactionsComponent,
    TransactionHomeComponent,
    AdminProfileComponent,
    AdminNavbarComponent,
    CouponPostComponent,
    ProductPostComponent,
  ],
  imports: [
    CommonModule,
    ADMINRoutingModule,
    RouterModule,
    AngmaterialModule,
    ToastrModule.forRoot(),
    SharedModuleModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ]
})
export class ADMINModule { }
  