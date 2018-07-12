import { Injectable } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { mapTo, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as appState from '../../reducers';
import { TodoItem } from '../models/todo-item.model';

@Injectable()
export class TodoLoadService {
  constructor(private store: Store<appState.State>) { }

  public getTodos(): Observable<TodoItem[]> {
    const items: TodoItem[] = [
      {Title: 'title 1', IsCompleted: false},
      {Title: 'title 2', IsCompleted: true},
      {Title: 'title 3', IsCompleted: false},
      {Title: 'title 4', IsCompleted: true}
    ];

    return this.store.pipe(
      select(appState.getLoaded),
      switchMap((loaded) => {
        if (loaded) {
          return of([]);
        } else {
          return timer(3000).pipe(mapTo(items))
        }
      }));
  }
}
