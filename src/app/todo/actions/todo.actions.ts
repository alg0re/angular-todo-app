import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  Create = '[Todo] Create',
}

export class CreateItem implements Action {
  readonly type = TodoActionTypes.Create;

  constructor(public payload: string){}
}

export type TodoActionUnion =
| CreateItem;
