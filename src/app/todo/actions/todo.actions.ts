import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  Create = '[Todo] Create',
  IsCompleted = '[Todo] IsCompleted',
}

export class Create implements Action {
  readonly type = TodoActionTypes.Create;
  constructor(public payload: string){}
}

export class IsCompleted implements Action {
  readonly type = TodoActionTypes.IsCompleted;
  constructor(public payload: {id: number, isCompleted: boolean}){}
}

export type TodoActionUnion =
| Create
| IsCompleted;
