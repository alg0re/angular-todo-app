import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  Create = '[Todo] Create',
  IsCompleted = '[Todo] IsCompleted',
  Remove = '[Todo] Remove'
}

export class Create implements Action {
  readonly type = TodoActionTypes.Create;
  constructor(public payload: string){}
}

export class IsCompleted implements Action {
  readonly type = TodoActionTypes.IsCompleted;
  constructor(public payload: number){}
}

export class Remove implements Action {
  readonly type = TodoActionTypes.Remove;
  constructor(public payload: number){}
}

export type TodoActionUnion =
| Create
| IsCompleted
| Remove;
