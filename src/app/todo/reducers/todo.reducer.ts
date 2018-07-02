import { TodoActionUnion, TodoActionTypes } from '../actions/todo.actions';
import { TodoItem } from '../models/todo-item.model';

export interface State {
  items: TodoItem[]
}

export const initialState: State = {
  items: []
}

export function todoReducer(
  state = initialState,
  action: TodoActionUnion
): State {
  switch(action.type) {
    case TodoActionTypes.Create:
    const title = action.payload;
    return {
        ...state,
        items: [new TodoItem({Title: title}), ...state.items]
    }
    default:
      return state;
  }
}
