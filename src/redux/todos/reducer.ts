/* eslint-disable default-param-last */
import type { TodosAction, TodosState } from './interfaces';
import TodosActionTypes from './types';

const initialState: TodosState = [
  { completed: false, id: '1', todo: 'Terminar de maturbarme' },
];

export default function todosReducer(
  state: TodosState = initialState,
  action: TodosAction,
) {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO: {
      return [...state, action.payload];
    }

    case TodosActionTypes.TOGGLE_TODO: {
      const id = action.payload;
      return state.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    case TodosActionTypes.DELETE_TODO: {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    }

    case TodosActionTypes.DELETE_COMPLETED_TODOS: {
      return state.filter((todo) => !todo.completed);
    }

    default: {
      return state;
    }
  }
}
