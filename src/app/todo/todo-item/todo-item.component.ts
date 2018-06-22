import { Input, Component } from '@angular/core';
import { TodoItem } from '../shared/todo-item.model';

@Component({
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
  @Input() model: TodoItem;
}
