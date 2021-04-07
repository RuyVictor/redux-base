
import { STATUS_CODES } from 'node:http';
import { Reducer } from 'redux';
import { TodoState, TodoTypes } from './types';

const INITIAL_STATE: TodoState = {
    items:['ReactJS', 'Angular', 'Vue']
};

const reducer: Reducer<TodoState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoTypes.ADD_ITEM:
      return { items: [...state.items, action.payload.name] };
    case TodoTypes.DEL_ITEM:
      return { items: [delete state.items[state.items.indexOf(action.payload.name)]] };
    default:
      return { ...state };
  }
};

export default reducer;