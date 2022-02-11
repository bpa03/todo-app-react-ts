import styled from 'styled-components';
import type { FunctionComponent } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getTodosByVisibilityFilter } from '@/redux/todos/selectors';
import { getFilterState } from '@/redux/filter/selectors';
import { deleteCompletedTodos } from '@/redux/todos/actions';
import Todo from '@/components/Todo';
import VisibilityFilters from '@/redux/filter/utils';

const TodoList: FunctionComponent = () => {
  const filter = useAppSelector(getFilterState);
  const todos = useAppSelector((state) => getTodosByVisibilityFilter(state, filter));
  const dispatch = useAppDispatch();

  const onDeleteCompletedTodos = () => dispatch(deleteCompletedTodos());

  return (
    <Container>
      <List>
        {todos && todos.length
          ? todos.map((todo) => <Todo todo={todo} key={todo.id} />)
          : ''}
      </List>
      {Boolean(todos.length) && filter === VisibilityFilters.COMPLETED && (
        <DeleteTodosButton
          type="button"
          onClick={onDeleteCompletedTodos}
        >
          <DeleteIcon />
          delete all
        </DeleteTodosButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 2rem 0 0 0;
`;

const List = styled.ul`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const DeleteIcon = styled(DeleteOutlineIcon)`
  font-size: 1.2rem !important;
`;

const DeleteTodosButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  background-color: var(--danger-color);
  padding: .7rem 1.667rem;
  font-family: var(--font-montserrat);
  color: white;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5.5px;
  margin: 2rem 0 0 auto;
`;

export default TodoList;
