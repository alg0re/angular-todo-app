import { TodoActionUnion, TodoActionTypes } from '../actions/todo.actions';
import { TodoItem } from '../models/todo-item.model';

export interface State {
  data: TodoItem[]
}

export const initialState: State = {
  data: []
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
        data: [new TodoItem({ Title: title, IsCompleted: false }), ...state.data]
      }
    case TodoActionTypes.IsCompleted:
      state.data[action.payload].IsCompleted = !state.data[action.payload].IsCompleted;
      return {
        ...state
      };
    case TodoActionTypes.Remove:
      state.data.splice(action.payload, 1);
      return {
        ...state
      }
    case TodoActionTypes.Update:
      state.data[action.payload.index].Title = action.payload.title;
      return {
        ...state
      }
    default:
      return state;
  }
}

export const getTodoItems = (state: State) => state.data;
