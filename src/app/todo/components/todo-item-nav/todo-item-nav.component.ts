import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item-nav',
  templateUrl: './todo-item-nav.component.html',
  styleUrls: ['./todo-item-nav.component.css']
})

export class TodoItemNavComponent {
  @Input() isCompleted: boolean = false;
  @Output() onComleted = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
}
