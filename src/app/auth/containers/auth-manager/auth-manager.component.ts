import { Component } from '@angular/core';
import { Store} from '@ngrx/store';
import * as fromAuth from '../../reducers/auth.reducer';
import * as AuthActions from '../../actions/auth.actions';

@Component({
  selector: 'auth-manager',
  template: `
  <div id="auth">
    <login-page (onSubmit)="login()"></login-page>
  </div>
  `
})

export class AuthManagerComponent {
  constructor(private store: Store<fromAuth.State>){

  }

  public login() {
    this.store.dispatch(new AuthActions.Login)
  }
}
