import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable()
export class TodoLoadService {

  constructor() { }

  public getTodos(): Observable<any> {
    const items = [
      {title: 'title 1'},
      {title: 'title 2'}
    ];

    return timer(3000).pipe(mapTo(items));
  }
}
