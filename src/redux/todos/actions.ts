import TodosActionTypes from './types';
import { TodosAction } from './interfaces';
import uuid from './utils';

export const addTodo = (description: string): TodosAction => ({
  type: TodosActionTypes.ADD_TODO,
  payload: {
    completed: false,
    id: uuid(),
    todo: description,
  },
});

export const toggleTodo = (id: string): TodosAction => ({
  type: TodosActionTypes.TOGGLE_TODO,
  payload: id,
});
