import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { RouterModule } from '@angular/router';
import { FrameComponent } from './components/frame/frame.component';
import { ToDoCardComponent } from './components/to-do-card/to-do-card.component';
import { HomeComponent } from './components/home-component/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FrameComponent,
    ToDoCardComponent,
    HomeComponent,
    NotesComponent,
    ToDoCardComponent,
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule,
    FrameComponent,
    ToDoCardComponent,
    HomeComponent,
    NotesComponent,
    ToDoCardComponent,
    ToDoListComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
