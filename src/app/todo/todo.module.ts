import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoManagerComponent } from './todo-manager/todo-manager.component';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodoNavComponent } from "./todo-nav/todo-nav.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    TodoManagerComponent
  ],
  declarations: [
    TodoManagerComponent,
    TodoItemComponent,
    TodoNavComponent
  ],
  providers: [],
})
export class TodoModule { }
