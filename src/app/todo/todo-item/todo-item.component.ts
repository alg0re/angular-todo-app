import { Input, Component, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../shared/todo-item.model';

@Component({
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
  private _isEdit: boolean = false;
  private _isChecked: boolean = false;

  @Input() model: TodoItem;
  @Input() index: number;
  @Output() onRemove = new EventEmitter<number>();


  public update(value: string) {
    this.model.Title = value;
    this._isEdit = false;
  }

  public remove() {
    this.onRemove.emit(this.index);
  }

  public isChecked(value: boolean) {
    this._isChecked = value;
  }
}
