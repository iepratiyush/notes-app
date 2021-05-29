import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FrameComponent } from './components/frame/frame.component';

@NgModule({
  declarations: [
    FrameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FrameComponent]
})
export class SharedModule { }
