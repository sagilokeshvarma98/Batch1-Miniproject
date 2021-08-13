import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CouponComponent } from './coupon/coupon.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RecoveryComponent } from './recovery/recovery.component';
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
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ADMINRoutingModule { }
