import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailed = '[Auth] Login Failed',
  Logout = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActionUnion =
| Login
| LoginSuccess
| LoginFailed
| Logout;
