import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../actions/todo.actions';
import { Observable } from 'rxjs';
import * as appState from '../../../reducers/index';

@Component({
  selector: 'todo-manager',
  templateUrl: './todo-manager.component.html'
})

export class TodoManagerComponent implements OnInit {
  public items$: Observable<TodoItem[]>;
  public loading$: Observable<boolean>;

  constructor(
    private store: Store<{ todo: appState.State }>) {
      this.items$ = this.store.select(appState.getTodoItems);
      this.loading$ = this.store.select(appState.getLoading);
  }

  public ngOnInit(): void {
    this.store.dispatch(new TodoActions.Load());
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

  public update(value: { index: number, title: string }) {
    this.store.dispatch(new TodoActions.Update(value));
  }
}
