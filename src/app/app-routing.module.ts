import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ElectronicsSubpageComponent } from './components/electronics-subpage/electronics-subpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { KitchenSubpageComponent } from './components/kitchen-subpage/kitchen-subpage.component';
import { MensSubpageComponent } from './components/mens-subpage/mens-subpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtectRoutesGuard } from './Guards/protect-routes.guard';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { SubnavComponent } from './components/subnav/subnav.component';

import { AddressComponent } from './user/components/address/address.component';
import { AdressdiplayComponent } from './user/components/adressdiplay/adressdiplay.component';
import { OrdersComponent } from './user/components/orders/orders.component';
import { TrackingComponent } from './user/components/tracking/tracking.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile.component';
import { FiltersComponent } from './user/filters/filters.component';
import { ItemDisplayComponent } from './user/item-display/item-display.component';

const routes: Routes = [
  {
    path:'',
    component:NavbarComponent,
     children:[
       {
         path:"",
         component:HomepageComponent
       },
      
    {
      path: 'mens',
      component: MensSubpageComponent
    },
    {
      path: 'electronics',
      component: ElectronicsSubpageComponent,
      
    },
    {
      path: 'kitchen',
      component: KitchenSubpageComponent
    },
    {
      path: 'cart',
      component: CartComponent,canActivate:[ProtectRoutesGuard]
    },
    {
        path: 'adress',
        component: AddressComponent
    },
    {path:"useradress", 
  component:AdressdiplayComponent
  },
    {
path:"checkout",
component:CheckoutComponent


    },
    {
      path: 'profile',
      component:UserProfileComponent
    },
    {path:"products",component:FiltersComponent},
{path:"itemData",component:ItemDisplayComponent},
    {
      path: 'order',
      component: OrdersComponent,
      children:[
        {
          path:"tracking",component:TrackingComponent
        }
      ]
    }   
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
