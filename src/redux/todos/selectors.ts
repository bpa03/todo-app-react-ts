/* eslint-disable import/prefer-default-export */
import type { TodosState } from './interfaces';

interface RootState {
  todos: TodosState
}

export const getTodoState = (state: RootState): TodosState => state.todos;
