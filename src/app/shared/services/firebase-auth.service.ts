import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private afAuth: AngularFireAuth) { }

  isLoggedIn() {
    return this.afAuth.authState;
  }
}
