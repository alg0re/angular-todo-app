import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html'
})

export class TodoInputComponent {
  @Output() onCreate = new EventEmitter<string>();

  public create(el: HTMLInputElement): void {
    this.onCreate.emit(el.value);
    el.value = '';
  }
}
