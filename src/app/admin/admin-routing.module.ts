import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CouponComponent } from './coupon/coupon.component';
import { InventoryComponent } from './inventory/inventory.component';

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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ADMINRoutingModule { }
