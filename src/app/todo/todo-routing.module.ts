import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoManagerComponent } from './containers/todo-manager/todo-manager.component';

const routes: Routes = [
  { path: 'todo', component: TodoManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule { }
