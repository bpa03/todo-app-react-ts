import styled from 'styled-components';
import type { FunctionComponent } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { getTodoState } from '@/redux/todos/selectors';
import Todo from '@/components/Todo';

const TodoList: FunctionComponent = () => {
  const todos = useAppSelector(getTodoState);

  return (
    <Container>
      <List>
        {todos.length && todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
          />
        ))}
      </List>
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

export default TodoList;
