import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo }  from '../shared.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDoFirebaseService {

  private ready = new BehaviorSubject<boolean>(false);

  todosRef!: AngularFireList<Todo>;
  userId: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.todosRef = this.db.list(`todos/${this.userId}`);
        this.ready.next(true);
      }
    });
  }

  getReady(): Observable<boolean> {
    return this.ready.asObservable();
  }

  getAll(): AngularFireList<Todo> {
    return this.todosRef;
  }

  create(todo: Todo): any {
      return this.todosRef.push(todo);
  }

  update(key: string, value: any): Promise<void> {
    return this.todosRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.todosRef.remove(key);
  }
}
