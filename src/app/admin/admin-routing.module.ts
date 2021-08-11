import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
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
      path:"addProduct",
      component:AddProductComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ADMINRoutingModule { }
