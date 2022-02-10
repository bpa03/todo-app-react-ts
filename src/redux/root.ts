import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

// reducers
import todosReducer from './todos/reducer';

const rootReducer: Reducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
