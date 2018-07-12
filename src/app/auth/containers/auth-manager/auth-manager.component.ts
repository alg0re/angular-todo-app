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
    <ng-template [ngIf]="loggedIn$ | async" [ngIfElse]="loginForm">
      <div class="card-body">
        <h5 class="card-title">Username, you are logged in.</h5>
        <p class="card-text">Click the button for logout.</p>
        <button type="button" class="btn btn-primary btn-sm" (click)="logout()">Logout</button>
      </div>
    </ng-template>
  </div>

  <ng-template #loginForm>
    <login-page (onSubmit)="login($event)"></login-page>
  </ng-template>

  `
})

export class AuthManagerComponent {
  public pending$: Observable<boolean>;
  public loggedIn$: Observable<boolean>;

  constructor(private store: Store<appState.State>) {
    this.pending$ = this.store.select(appState.getPending);
    this.loggedIn$ = this.store.select(appState.getLoggedIn);
  }

  public login(account: Account) {
    this.store.dispatch(new AuthActions.Login(account))
  }

  public logout() {
    this.store.dispatch(new AuthActions.Logout);
  }
}
