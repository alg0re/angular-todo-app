import { Action } from '@ngrx/store';
import { Account } from '../models/account.model';
import { User } from '../models/user.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailed = '[Auth] Login Failed',
  Logout = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: Account) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: User) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActionUnion =
| Login
| LoginSuccess
| LoginFailed
| Logout;
