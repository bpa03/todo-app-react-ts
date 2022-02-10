import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

// reducers
import todosReducer from './todos/reducer';
import filterReducer from './filter/reducer';

const rootReducer: Reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default rootReducer;
