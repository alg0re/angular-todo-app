import { TodoActionUnion, TodoActionTypes } from '../actions/todo.actions';
import { TodoItem } from '../models/todo-item.model';

export interface State {
  items: TodoItem[],
  completed: { id: number, isCompleted: boolean }
}

export const initialState: State = {
  items: [],
  completed: null
}

export function todoReducer(
  state = initialState,
  action: TodoActionUnion
): State {
  switch (action.type) {
    case TodoActionTypes.Create:
      const title = action.payload;
      return {
        ...state,
        items: [new TodoItem({ Title: title, IsCompleted: false }), ...state.items]
      }
    case TodoActionTypes.IsCompleted:
      const completed = action.payload;
      state.items[completed.id].IsCompleted = !completed.isCompleted;
      return {
        ...state
      };

    default:
      return state;
  }
}
