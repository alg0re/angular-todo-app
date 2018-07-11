import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as appState from '../../reducers';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private store: Store<appState.State>,
    private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(appState.getLoggedIn),
      map(loggedIn => {
        if(!loggedIn) {
          this.router.navigate(['/auth']);
        } else {
          return true;
        }
      }));
  }
}
