import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FrameComponent } from './components/frame/frame.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@NgModule({
  declarations: [
    FrameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule
  ],
  exports: [
    FrameComponent,
    MaterialModule,
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule
  ]
})
export class SharedModule { }
