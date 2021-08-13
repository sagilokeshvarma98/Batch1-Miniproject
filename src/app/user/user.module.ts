import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { FilterPipe } from './pipes/filter.pipe';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';
import { SortPipe } from './pipes/sort.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { FiltersComponent } from './filters/filters.component';
import { AdressdiplayComponent } from './components/adressdiplay/adressdiplay.component';

@NgModule({
  declarations: [
    
    UserProfileComponent,
    AddressComponent,
    OrdersComponent,
    TrackingComponent,
    CartButtonComponent,
    ItemDisplayComponent,
    ProductsDisplayComponent,
    FilterPipe,
    CommentsComponent,
    CommentsPostComponent,
    SortPipe,
    PriceFilterPipe,
    FiltersComponent,
    AdressdiplayComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngmaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],providers:[],
  exports:[OrdersComponent, UserProfileComponent,TrackingComponent]
})
export class UserModule { }
