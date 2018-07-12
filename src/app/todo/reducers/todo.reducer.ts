import { TodoActionUnion, TodoActionTypes } from '../actions/todo.actions';
import { TodoItem } from '../models/todo-item.model';

export interface State {
  data: TodoItem[],
  loaded: boolean,
  loading: boolean
}

export const initialState: State = {
  data: [],
  loaded: false,
  loading: false
}

export function todoReducer(
  state = initialState,
  action: TodoActionUnion
): State {
  switch (action.type) {
    case TodoActionTypes.Load:
      return {
        ...state,
        loading: true
      }
    case TodoActionTypes.LoadSuccess:
      const loadedItems = action.payload;
      return {
        ...state,
        data: [...loadedItems, ...state.data],
        loaded: true,
        loading: false
      }
    case TodoActionTypes.LoadFailed:
      return {
        ...state,
        loaded: false,
        loading: false
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
