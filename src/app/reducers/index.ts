import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../todo/reducers/todo.reducer';
import * as fromAuth from '../auth/reducers/auth.reducer';

export interface State {
  todo: fromTodo.State,
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.todoReducer,
  auth: fromAuth.authReducer
}

export const getTodoState = createFeatureSelector<fromTodo.State>('todo');
export const getTodoItems = createSelector(getTodoState, state => state.data);
export const getLoading = createSelector(getTodoState, state => state.loading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getPending = createSelector(getAuthState, state => state.pending);
export const getLoggedIn = createSelector(getAuthState, state => state.loggedIn);
export const getAccount = createSelector(getAuthState, state => state.account);
export const getUser = createSelector(getAuthState, state => state.user);
