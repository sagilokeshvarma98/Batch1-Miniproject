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
import { AddressComponent } from './user/components/address/address.component';
import { AdressdiplayComponent } from './user/components/adressdiplay/adressdiplay.component';
import { CommentsPostComponent } from './user/components/comments-post/comments-post.component';
import { OrdersComponent } from './user/components/orders/orders.component';
import { TrackingComponent } from './user/components/tracking/tracking.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile.component';
import { FiltersComponent } from './user/filters/filters.component';
import { ItemDisplayComponent } from './user/item-display/item-display.component';
import { PaymentGateComponent } from './user/payment-gate/payment-gate.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: "",
        component: HomepageComponent
      },
      {
        path: "home",
        component: HomepageComponent
      },

      {
        path: 'mens',
        component: MensSubpageComponent
      },
      {
        path: 'electronics',
        component: ElectronicsSubpageComponent
      },
      {
        path: 'kitchen',
        component: KitchenSubpageComponent
      },
      {
        path: 'cart',
        component: CartComponent
        ,canActivate:[ProtectRoutesGuard]
      },
      {
        path: 'adress',
        component: AddressComponent,
        canActivate:[ProtectRoutesGuard]
      },
      {
        path: 'adress/:id',
        component: AddressComponent,
        canActivate:[ProtectRoutesGuard]
      },
      {
        path: "useradress",
        component: AdressdiplayComponent,
        canActivate:[ProtectRoutesGuard]
      },
      {
        path: "checkout/:id",
        component: CheckoutComponent,
        canActivate:[ProtectRoutesGuard]
      },
      {
        path: "payment/:id",
        component: PaymentGateComponent,
        canActivate:[ProtectRoutesGuard]
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate:[ProtectRoutesGuard]
      },
      {
        path: "products/:name",
        component: FiltersComponent,
      },
      {
        path: "tracking",
        component: TrackingComponent,
        canActivate:[ProtectRoutesGuard]
      },
      {
        path: "products/:name/:id",
        component: ItemDisplayComponent
      },
      {
        path: 'order',
        component: OrdersComponent,
        canActivate:[ProtectRoutesGuard],
        children: [
          {
            path: "postcomment",
            component: CommentsPostComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
