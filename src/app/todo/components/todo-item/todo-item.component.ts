import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
  @Input() model: TodoItem;
  @Input() isEdit: boolean;
  @Output() onCompleted = new EventEmitter<{id: number, isComleted: boolean}>();
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();

}
