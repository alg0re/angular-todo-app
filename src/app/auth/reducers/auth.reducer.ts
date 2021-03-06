import { AuthActionTypes, AuthActionUnion } from '../actions/auth.actions';
import { Account } from '../models/account.model';
import { User } from '../models/user.model';

export interface State {
  loggedIn: boolean,
  account: Account,
  user: User,
  error: string,
  pending: boolean
}

export const initialState : State = {
  loggedIn: false,
  account: null,
  user: null,
  error: null,
  pending: false
}

export function authReducer(
state = initialState,
action: AuthActionUnion
) {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        ...state,
        account: action.payload,
        loggedIn: false,
        pending: true
      }
      case AuthActionTypes.LoginSuccess:
        return {
          ...state,
          loggedIn: true,
          user: action.payload,
          error: null,
          pending: false
        }
      case AuthActionTypes.LoginFailed:
        return {
          ...state,
          error: action.payload,
          loggedIn: false,
          pending: false
        }
      case AuthActionTypes.Logout:
        return {
          ...state,
          account: null,
          user: null,
          loggedIn: false,
          error: null
        }
    default:
      return state;
  }
}
