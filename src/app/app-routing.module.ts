import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { HomeComponent } from './components/home-component/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'secured', 
    loadChildren: () => import('./secured/secured.module').then(m => m.SecuredModule),
    canActivate: [LoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
