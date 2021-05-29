import { Component } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes-app';
  providers = AuthProvider;

  printUser(event: any) {
    console.log(event);
  }

  printError(event: any) {
      console.error(event);
  }
}
