import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html'
})

export class LoginPageComponent {
  @Output() onSubmit = new EventEmitter();

  public submit(form: any) {
    if (this.CantBeEmpty(form.login.value)
        && this.CantBeEmpty(form.password.value)) {
      this.onSubmit.emit();
    }
  }

  private CantBeEmpty(value: string): boolean {
    if (value.trim().length > 0)
      return true;
    return false;
  }
}
