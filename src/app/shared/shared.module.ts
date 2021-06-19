import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { RouterModule } from '@angular/router';
import { FrameComponent } from './components/frame/frame.component';
import { ToDoCardComponent } from './components/to-do-card/to-do-card.component';
import { HomeComponent } from './components/home-component/home.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewToDoMobileDialogComponent } from './components/new-to-do-mobile-dialog/new-to-do-mobile-dialog.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NewNoteMobileDialogComponent } from './components/new-note-mobile-dialog/new-note-mobile-dialog.component';

@NgModule({
  declarations: [
    FrameComponent,
    ToDoCardComponent,
    HomeComponent,
    ToDoCardComponent,
    ToDoListComponent,
    NewToDoMobileDialogComponent,
    NoteCardComponent,
    NoteListComponent,
    NewNoteMobileDialogComponent
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
  entryComponents: [
    NewToDoMobileDialogComponent,
    NewNoteMobileDialogComponent,
  ],
  exports: [
    MaterialModule,
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule,
    FrameComponent,
    ToDoCardComponent,
    HomeComponent,
    ToDoCardComponent,
    ToDoListComponent,
    NoteListComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
