import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { TestPipe } from './pipes/test.pipe';
import { FilterPipe} from './pipes/filter.pipe'
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { DatePipe } from './pipes/date.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ValuePipe } from './pipes/value.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    TestPipe,
    FilterPipe,
    PriceFilterPipe,
    SortPipe,
    DatePipe,
    SearchPipe,
    ValuePipe
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    TestPipe,
    FilterPipe,
    PriceFilterPipe,
    SortPipe,
    DatePipe,
    SearchPipe,
    ValuePipe,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModuleModule { }
