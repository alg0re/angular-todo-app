import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { TodoItem } from '../models/todo-item.model';

@Injectable()
export class TodoLoadService {

  constructor() { }

  public getTodos(): Observable<TodoItem[]> {
    const items: TodoItem[] = [
      {Title: 'title 1', IsCompleted: false},
      {Title: 'title 2', IsCompleted: true},
      {Title: 'title 3', IsCompleted: false},
      {Title: 'title 4', IsCompleted: true}
    ];

    return timer(3000).pipe(mapTo(items));
  }
}
