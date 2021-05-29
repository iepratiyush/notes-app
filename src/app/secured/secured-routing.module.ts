import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuredComponent } from './secured.component';

const routes: Routes = [{ path: '', component: SecuredComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuredRoutingModule { }
