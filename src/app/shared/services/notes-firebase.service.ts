import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note, Todo }  from '../shared.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesFirebaseService {

  private ready = new BehaviorSubject<boolean>(false);

  notesRef!: AngularFireList<Note>;
  userId: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.notesRef = this.db.list(`notes/${this.userId}`);
        this.ready.next(true);
      }
    });
  }

  getReady(): Observable<boolean> {
    return this.ready.asObservable();
  }

  getAll(): AngularFireList<Todo> {
    return this.notesRef;
  }

  create(todo: Todo): any {
      return this.notesRef.push(todo);
  }

  update(key: string, value: any): Promise<void> {
    return this.notesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.notesRef.remove(key);
  }
}
