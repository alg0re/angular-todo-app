import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import * as TodoActions  from '../actions/todo.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { TodoLoadService } from '../services/todo-load.service';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoLoadService) { }

  @Effect()
  loadingItems$ = this.actions$.ofType(TodoActions.TodoActionTypes.Load).pipe(
    switchMap(() => {
      return this.todoService.getTodos()
      .pipe(
        map( items => new TodoActions.LoadSuccess(items)),
        catchError(error => of(new TodoActions.LoadFailed(error)))
      );
    })
  );
}
