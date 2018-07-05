import { Action } from '@ngrx/store';
import { TodoItem } from '../models/todo-item.model';

export enum TodoActionTypes {
  Create = '[Todo] Create',
  IsCompleted = '[Todo] IsCompleted',
  Remove = '[Todo] Remove',
  Update = '[Todo] Update',
  Load = '[Todo] Load',
  LoadSuccess = '[Todo] Load Success',
  LoadFailed = '[Todo] Load Failed'
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

export class Update implements Action {
  readonly type = TodoActionTypes.Update;
  constructor(public payload: {index: number, title: string}){}
}

export class Load implements Action {
  readonly type = TodoActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = TodoActionTypes.LoadSuccess;
  constructor(public payload: TodoItem[]){}
}

export class LoadFailed implements Action {
  readonly type = TodoActionTypes.LoadFailed;
  constructor(public payload: any){}
}

export type TodoActionUnion =
| Create
| IsCompleted
| Remove
| Update
| Load
| LoadSuccess
| LoadFailed;
