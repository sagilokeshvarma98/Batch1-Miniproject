import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMINRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ValuePipe } from './pipes/value.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    InventoryComponent,
    ValuePipe,
    SearchPipe,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ADMINRoutingModule,
    FormsModule
  ]
})
export class ADMINModule { }
