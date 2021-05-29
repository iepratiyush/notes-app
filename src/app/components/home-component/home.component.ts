import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  providers = AuthProvider;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  success(event: any) {
    console.log(event);
    this.router.navigate(['/', 'secured']);
  }

  error(event: any) {
      console.error(event);
  }

}
