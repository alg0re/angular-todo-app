import { AuthActionTypes, AuthActionUnion } from '../actions/auth.actions';
import { User } from '../models/user.model';

export interface State {
  loggedIn: boolean,
  user: User,
  error: string,
  pending: boolean
}

export const initialState : State = {
  loggedIn: false,
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
        pending: true
      }

    default:
      return state;
  }
}
