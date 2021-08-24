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
import { CommentsPostComponent } from './user/components/comments-post/comments-post.component';
import { OrdersComponent } from './user/components/orders/orders.component';
import { TrackingComponent } from './user/components/tracking/tracking.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile.component';
import { FiltersComponent } from './user/filters/filters.component';
import { ItemDisplayComponent } from './user/item-display/item-display.component';
import { PaymentGateComponent } from './user/payment-gate/payment-gate.component';

const routes: Routes = [
 
  {
    path:'',
    component:NavbarComponent,
    data: {
      breadcrumb:
        { alias: 'Parent' }
    },
     children:[
      {
        path:"",
        component:HomepageComponent
      },
       {
         path:"home",
         component:HomepageComponent,
         data: {
          breadcrumb:
            { alias: 'ChildOne' }
        }
       },
      
    {
      path: 'mens',
      component: MensSubpageComponent,
      data: {
        breadcrumb:
          { alias: 'ChildTwo' }
      }
    },
    {
      path: 'electronics',
      component: ElectronicsSubpageComponent,
      data: {
        breadcrumb:
          { alias: 'ChildThree' }
      }
    },
    {
      path: 'kitchen',
      component: KitchenSubpageComponent,
      data: {
        breadcrumb:
          { alias: 'ChildFour' }
      }
    },
    {
      path: 'cart',
      component: CartComponent,
      data: {
        breadcrumb:
          { alias: 'ChildFive' }
      }
      // ,canActivate:[ProtectRoutesGuard]
    },
    {
      path: 'adress',
      component: AddressComponent,
      data: {
        breadcrumb:
          { alias: 'ChildSix' }
      }
  },
    {
        path: 'adress/:id',
        component: AddressComponent,
        data: {
          breadcrumb:
            { alias: 'ChildSeven' }
        }
    },
    {path:"useradress", 
  component:AdressdiplayComponent,
  data: {
    breadcrumb:
      { alias: 'ChildEight' }
  }
  },
    {
path:"checkout",
component:CheckoutComponent,
data: {
  breadcrumb:
    { alias: 'ChildNine' }
}
    },
    {
      path:"payment",
      component:PaymentGateComponent,
      data: {
        breadcrumb:
          { alias: 'ChildTen' }
      }
          },
    {
      path: 'profile',
      component:UserProfileComponent,
      data: {
        breadcrumb:
          { alias: 'ChildEleven' }
      }
    },
    {path:"products",
    component:FiltersComponent,
    data: {
      breadcrumb:
        { alias: 'ChildTwele' }
    }
  },
{path:"products/:id",
component:ItemDisplayComponent,
data: {
  breadcrumb:
    { alias: 'ChildThirteen' }
}
},
    {
      path: 'order',
      component: OrdersComponent,
      children:[
        {
          path:"tracking",
          component:TrackingComponent,
          data: {
            breadcrumb:
              { alias: 'Child15' }
          }
        },
        {
          path:"postcomment",
          component:CommentsPostComponent,
          data: {
            breadcrumb:
              { alias: 'Child16' }
          }
        }
      ]
    }   
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
