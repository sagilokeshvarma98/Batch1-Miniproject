import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { TestPipe } from './pipes/test.pipe';


@NgModule({
  declarations: [
    TestPipe
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports:[
    TestPipe
  ]
})
export class SharedModuleModule { }
