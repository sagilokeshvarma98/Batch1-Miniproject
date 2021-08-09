import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectRoutesGuard } from '../Guards/protect-routes.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FiltersComponent } from './filters/filters.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
