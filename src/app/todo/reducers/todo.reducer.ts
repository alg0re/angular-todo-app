import { TodoActionUnion, TodoActionTypes } from '../actions/todo.actions';
import { TodoItem } from '../models/todo-item.model';

export interface State {
  data: TodoItem[],
  loading: boolean,
  loaded: boolean
}

export const initialState: State = {
  data: [],
  loading: false,
  loaded: false
}

export function todoReducer(
  state = initialState,
  action: TodoActionUnion
): State {
  switch (action.type) {
    case TodoActionTypes.Load:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case TodoActionTypes.LoadSuccess:
      const loadedItems = action.payload;
      return {
        ...state,
        data: [...loadedItems, ...state.data],
        loading: false,
        loaded: true
      }
    case TodoActionTypes.LoadFailed:
      return {
        ...state,
        loading: false,
        loaded: false
      }
    case TodoActionTypes.Create:
      const title = action.payload;
      return {
        ...state,
        data: [new TodoItem({ Title: title, IsCompleted: false }), ...state.data]
      }
    case TodoActionTypes.IsCompleted:
      state.data[action.payload].IsCompleted = !state.data[action.payload].IsCompleted;
      return {
        ...state, data: [...state.data]
      };
    case TodoActionTypes.Remove:
      state.data.splice(action.payload, 1);
      return {
        ...state, data: [...state.data]
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
