import { createStore, Store, applyMiddleware } from 'redux';
import { TodoState } from './ducks/todo/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  todo: TodoState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
);

export default store;