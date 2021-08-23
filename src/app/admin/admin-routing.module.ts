import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CouponComponent } from './coupon/coupon.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AlltransactionsComponent } from './transactionComponents/alltransactions/alltransactions.component';
import { FailedComponent } from './transactionComponents/failed/failed.component';
import { PendingCancellationComponent } from './transactionComponents/pending-cancellation/pending-cancellation.component';
import { SuccessfulComponent } from './transactionComponents/successful/successful.component';
import { TransactionHomeComponent } from './transactionComponents/transaction-home/transaction-home.component';
import { UserdemograpicsComponent } from './userdemograpics/userdemograpics.component';
import { UsermanagmentComponent } from './usermanagment/usermanagment.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminNavbarComponent,
    data: {
      breadcrumb:
        { alias: 'Parent' }
    },
    children: [
      {
        path: '',
        component: AdminHomeComponent,
        children: [
          {
            path: "",
            component: InventoryComponent,
            data: {
              breadcrumb:
                { alias: 'ChildOne' }
            }
          },
          {
            path: 'coupon',
            component: CouponComponent,
            data: {
              breadcrumb:
                { alias: 'ChildTwo' }
            }
          },
          {
            path: "usermanagement",
            component: UserdemograpicsComponent,
            data: {
              breadcrumb:
                { alias: 'ChildThree' }
            }
          },
          {
            path: "transactions",
            component: TransactionHomeComponent,
            children: [
              {
                path: "",
                component: AlltransactionsComponent,
                data: {
                  breadcrumb:
                    { alias: 'ChildOne' }
                }
              },
              {
                path: "all",
                component: AlltransactionsComponent,
                data: {
                  breadcrumb:
                    { alias: 'ChildTwo' }
                }
              },
              {
                path: "failed",
                component: FailedComponent,
                data: {
                  breadcrumb:
                    { alias: 'ChildThree' }
                }
              },
              {
                path: "pending",
                component: PendingCancellationComponent,
                data: {
                  breadcrumb:
                    { alias: 'ChildFour' }
                }
              },
              {
                path: "success",
                component: SuccessfulComponent,
                data: {
                  breadcrumb:
                    { alias: 'ChildFive' }
                }
              }
            ]
          }
        ]
      }
      , {
        path: "adminProfile",
        component: AdminProfileComponent,
        data: {
          breadcrumb:
            { alias: 'ChildOne' }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ADMINRoutingModule { }
