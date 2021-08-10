import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ADMINRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    ADMINRoutingModule
  ]
})
export class ADMINModule { }
