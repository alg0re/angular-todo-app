import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthManagerComponent } from './containers/auth-manager/auth-manager.component';

const routes: Routes = [
  { path: 'auth', component: AuthManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
