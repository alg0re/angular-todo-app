import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import * as AuthActions from '../../actions/auth.actions';
import { Account } from '../../models/account.model';
import * as appState from '../../../reducers';

@Component({
  selector: 'auth-manager',
  template: `
  <circle-loader [loading]="pending$ | async"></circle-loader>
  <div id="auth">
    <login-page (onSubmit)="login($event)"></login-page>
  </div>
  `
})

export class AuthManagerComponent {
  public pending$: Observable<boolean>;

  constructor(private store: Store<appState.State>) {
    this.pending$ = this.store.select(appState.getPending)
  }

  public login(account: Account) {
    this.store.dispatch(new AuthActions.Login(account))
  }
}
