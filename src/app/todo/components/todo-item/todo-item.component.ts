import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoItemComponent {
  public isEdit: boolean;

  @Input() index: number;
  @Input() model: TodoItem;
  @Output() onCompleted = new EventEmitter<number>();
  @Output() onUpdate = new EventEmitter<{ index: number, title: string }>();
  @Output() onRemove = new EventEmitter<number>();

  public canEdit() {
    if (!this.model.IsCompleted) {
      this.isEdit = true;
    }
  }

  public canComplete() {
    if (!this.isEdit) {
      this.onCompleted.emit(this.index)
    }
  }

  public update(title: string) {
    if (title.trim().length > 0) {
      this.onUpdate.emit({ index: this.index, title: title });
      this.isEdit = false;
    }
  }
}
