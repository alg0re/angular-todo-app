import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoManagerComponent } from './todo-manager/todo-manager.component';
import { TodoItemComponent } from "./todo-item/todo-item.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    TodoManagerComponent
  ],
  declarations: [
    TodoManagerComponent,
    TodoItemComponent
  ],
  providers: [],
})
export class TodoModule { }
