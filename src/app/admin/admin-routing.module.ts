import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
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

const routes: Routes = [{
  path:'admin',
  component:AdminHomeComponent,
  children:[
    {
      path:"",
      component:InventoryComponent
    },
    {
      path:'coupon',
      component:CouponComponent
    },
    { 
      path:"usermanagement",
      component:UsermanagmentComponent,
      children:[
        {
          path:"udg",
          component:UserdemograpicsComponent
         },
         {
           path:"recovery",
           component:RecoveryComponent
          }
      ]
    },
    {
      path:"transactions",
      component:TransactionHomeComponent,
      children:[
        {
          path:"",
          component:AlltransactionsComponent
        },
        {
          path:"all",
          component:AlltransactionsComponent
        },
        {
          path:"failed",
          component:FailedComponent
        },
        {
          path:"pending",
          component:PendingCancellationComponent
        },
        {
          path:"success",
          component:SuccessfulComponent
        }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ADMINRoutingModule { }
