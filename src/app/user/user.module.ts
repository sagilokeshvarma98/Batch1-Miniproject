import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TrackingComponent } from './components/tracking/tracking.component';
//import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';
//import { SortPipe } from './pipes/sort.pipe';
//import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { FiltersComponent } from './filters/filters.component';
import { AdressdiplayComponent } from './components/adressdiplay/adressdiplay.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentGateComponent } from './payment-gate/payment-gate.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    
    UserProfileComponent,
    AddressComponent,
    OrdersComponent,
    TrackingComponent,
    CartButtonComponent,
    ItemDisplayComponent,
    ProductsDisplayComponent,
    CommentsComponent,
    CommentsPostComponent,
    //SortPipe,
    //PriceFilterPipe,
    FiltersComponent,
    AdressdiplayComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentGateComponent,
  ],
  imports: [
    CommonModule,
   // HttpClientModule,
    RouterModule,
    AngmaterialModule,
    //ReactiveFormsModule,
    //FormsModule,
    NgbModule,
    NgxPaginationModule,
    SharedModuleModule
  ],providers:[],
  exports:[OrdersComponent, UserProfileComponent,TrackingComponent]
})
export class UserModule { }
