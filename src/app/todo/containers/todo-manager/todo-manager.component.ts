import { Component } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';
import { Store } from '@ngrx/store';
import * as fromTodo from '../../reducers/todo.reducer';
import * as TodoActions from '../../actions/todo.actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-manager',
  templateUrl: './todo-manager.component.html'
})

export class TodoManagerComponent {
  public items$: Observable<TodoItem[]>

  constructor(
    private store: Store<{todo: fromTodo.State}>) {
      this.items$ = this.store.select('todo').pipe(map(t => t.items));
  }

  public create(title: string) {
    this.store.dispatch(new TodoActions.Create(title));
  }

  public isCompleted(index: number) {
    this.store.dispatch(new TodoActions.IsCompleted(index));
  }

  public remove(index: number) {
    this.store.dispatch(new TodoActions.Remove(index));
  }
}
