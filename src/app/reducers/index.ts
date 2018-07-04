import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../todo/reducers/todo.reducer';

export interface State {
  todo: fromTodo.State
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.todoReducer
}

export const getTodoState = createFeatureSelector<fromTodo.State>('todo');
export const getTodoItems = createSelector(getTodoState, state => state.data);
