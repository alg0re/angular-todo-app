import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoItemComponent {
  @Input() index: number;
  @Input() model: TodoItem;
  @Input() isEdit: boolean;
  @Output() onCompleted = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter<number>();
}
