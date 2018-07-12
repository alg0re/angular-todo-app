import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import * as AuthActions from '../actions/auth.actions';
import { of } from 'rxjs';
import { map, catchError, tap, exhaustMap } from 'rxjs/operators';
import { Account } from '../models/account.model';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) { }

    @Effect()
    login$ = this.actions$.ofType<AuthActions.Login>(AuthActions.AuthActionTypes.Login)
    .pipe(
      map(action => action.payload),
      exhaustMap((account: Account) =>
        this.authService.login(account)
          .pipe(
            map(user => new AuthActions.LoginSuccess(user)),
            catchError(error => of(new AuthActions.LoginFailed(error)))
          )));

    @Effect({dispatch: false})
    loginSuccess$ = this.actions$.ofType(AuthActions.AuthActionTypes.LoginSuccess).pipe(
      tap(() => this.router.navigate(['/todo'])));

    @Effect({dispatch: false})
    loginFailed$ = this.actions$.ofType(AuthActions.AuthActionTypes.LoginFailed).pipe(
        tap(() => alert('Invalid login or password')));
}
