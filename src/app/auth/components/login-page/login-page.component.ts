import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/account.model';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html'
})

export class LoginPageComponent {
  @Output() onSubmit = new EventEmitter<Account>();

  public submit(form: any) {
    const login = form.login.value;
    const password = form.password.value;
    if (this.CantBeEmpty(login)
        && this.CantBeEmpty(password)) {
      this.onSubmit.emit(new Account({Login: login, Password: password }));
    }
  }

  private CantBeEmpty(value: string): boolean {
    if (value.trim().length > 0)
      return true;
    return false;
  }
}
