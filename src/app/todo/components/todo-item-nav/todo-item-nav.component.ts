import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo-item-nav',
  templateUrl: './todo-item-nav.component.html',
  styleUrls: ['./todo-item-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoItemNavComponent {
  @Input() isCompleted: boolean = false;
  @Output() onCompleted = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}
