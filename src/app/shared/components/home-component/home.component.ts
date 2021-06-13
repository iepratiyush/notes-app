import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { first, tap } from 'rxjs/operators';
import { FirebaseAuthService } from 'src/app/shared/services/firebase-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  providers = AuthProvider;

  constructor(private router: Router, private afAuth: FirebaseAuthService) { }

  ngOnInit(): void {
    this.afAuth.isLoggedIn().pipe(first(), tap( user => {
      if (user) {
        this.router.navigate(['/', 'secured']);
      }
    })).subscribe();
  }

  success(event: any) {
    this.router.navigate(['/', 'secured']);
  }

  error(event: any) {
      console.error(event);
  }

}
