import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredRoutingModule } from './secured-routing.module';
import { SecuredComponent } from './secured.component';


@NgModule({
  declarations: [
    SecuredComponent
  ],
  imports: [
    CommonModule,
    SecuredRoutingModule
  ]
})
export class SecuredModule { }
