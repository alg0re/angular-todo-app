import { Injectable } from '@angular/core';
import { Observable, throwError, of, timer } from 'rxjs';
import { mapTo, mergeMapTo } from 'rxjs/operators';
import { Account } from '../models/account.model';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  public login(account: Account): Observable<User> {
    const test = new Account({ Login: 'test', Password: '12345' });

    if (!test.equals(account)) {
      const error = throwError('Invalid username or password');
      return timer(2000).pipe(mergeMapTo(error));;
    }

    const user = new User({ Username: 'test_user' });
    return timer(2000).pipe(mapTo(user))
  }

  public logout() {
    return of(true);
  }
}
