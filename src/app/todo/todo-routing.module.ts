import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoManagerComponent } from './containers/todo-manager/todo-manager.component';
import { AuthGuardService } from '../auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoManagerComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule { }
