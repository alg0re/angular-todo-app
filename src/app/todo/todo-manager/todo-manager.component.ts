import { Component } from '@angular/core';
import { TodoItem } from '../shared/todo-item.model';

@Component({
  selector: 'todo-manager',
  templateUrl: 'todo-manager.component.html'
})

export class TodoManagerComponent {
  private items: TodoItem[] = [];

  public add(item: HTMLInputElement) {
    if(!item.value)
      return;

    this.items.unshift(new TodoItem({Title: item.value}));
    item.value = "";
  }

  public remove(index: number) {
    this.items.splice(index, 1);
  }
}
