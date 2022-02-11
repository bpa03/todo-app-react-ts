/* eslint-disable import/prefer-default-export */
import type { FilterState } from '@/redux/filter/interfaces';
import VisibilityFilters from '@/redux/filter/utils';
import type { TodosState } from './interfaces';

interface RootState {
  todos: TodosState;
}

export const getTodoState = (state: RootState): TodosState => state.todos;

export const getActiveTodos = (state: RootState) => state.todos.filter((todo) => !todo.completed);

export const getCompletedTodos = (state: RootState) => state.todos.filter((todo) => todo.completed);

export const getTodosByVisibilityFilter = (
  state: RootState,
  filter: FilterState,
) => {
  switch (filter) {
    case VisibilityFilters.ALL: {
      return getTodoState(state);
    }
    case VisibilityFilters.ACTIVE: {
      return getActiveTodos(state);
    }
    case VisibilityFilters.COMPLETED: {
      return getCompletedTodos(state);
    }
    default:
      return getTodoState(state);
  }
};
