import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoManagerComponent } from './containers/todo-manager/todo-manager.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoItemNavComponent } from './components/todo-item-nav/todo-item-nav.component';
import { TodoLoadService } from './services/todo-load.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  exports: [
    TodoManagerComponent
  ],
  declarations: [
    TodoManagerComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoItemNavComponent
  ],
  providers: [
    TodoLoadService
  ],
})
export class TodoModule { }
