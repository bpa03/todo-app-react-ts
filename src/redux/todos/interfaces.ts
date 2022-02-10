import TodosActionTypes from './types';

export interface TodoModel {
  id: string,
  todo: string,
  completed: boolean,
}

export interface TodosAction {
  type: TodosActionTypes,
  payload?: TodoModel | string
}

export type TodosState = Array<TodoModel>;
