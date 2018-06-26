import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-nav',
  templateUrl: 'todo-nav.component.html',
  styleUrls: ['todo-nav.component.css']
})

export class TodoNavComponent {
  @Input()  checked: boolean = false;
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onChecked = new EventEmitter<boolean>();

  public edit() {
    this.onEdit.emit();
  }

  public remove() {
    this.onRemove.emit();
  }

  public isChecked() {
    this.checked = !this.checked;
    this.onChecked.emit(this.checked);
  }
}
