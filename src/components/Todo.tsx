import type { FunctionComponent } from 'react';
import styled from 'styled-components';

import type { TodoModel } from '@/redux/todos/interfaces';
import { useAppDispatch } from '@/redux/hooks';
import { toggleTodo } from '@/redux/todos/actions';

interface Props {
  todo: TodoModel;
}

const Todo: FunctionComponent<Props> = ({ todo }) => {
  const { todo: todoText, completed, id } = todo;
  const dispatch = useAppDispatch();

  const onToggleTodo = () => dispatch(toggleTodo(id));

  return (
    <Item>
      <CheckBoxWrapper>
        <CheckboxButton completed={completed} onClick={onToggleTodo} />
      </CheckBoxWrapper>
      <Text completed={completed}>{todoText}</Text>
    </Item>
  );
};

interface StyleProps {
  completed: boolean;
}

const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .7rem;
`;

const Text = styled.p<StyleProps>`
  font-weight: 500;
  font-size: 1rem;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  line-break: anywhere;
`;

const CheckBoxWrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  inline-size: auto;
`;

const CheckboxButton = styled.button<StyleProps>`
  min-width: 24px;
  height: 24px;
  background-color: ${({ completed }) => (completed ? 'var(--primary-color)' : 'transparent')};
  border-radius: 4px;
  outline: none;
  border: none;
  border: 1px solid
    ${({ completed }) => (completed ? 'var(--primary-color)' : 'rgba(130, 130, 130, 1)')};
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s, border 0.3s;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 9px;
    height: 16px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-50%, -50%);
    left: 20%;
    top: 45%;
  }
`;

export default Todo;
