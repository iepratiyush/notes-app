import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FrameComponent } from './components/frame/frame.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    FrameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule,
    AppRoutingModule,
  ],
  exports: [
    FrameComponent,
    MaterialModule,
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
