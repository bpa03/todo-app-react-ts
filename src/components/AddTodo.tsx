import type { ChangeEvent, FormEvent, FunctionComponent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '@/redux/hooks';
import { addTodo } from '@/redux/todos/actions';

const AddTodo: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (todo === '') {
      return;
    }

    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            value={todo}
            onChange={handleChange}
            placeholder="add details"
          />
        </div>
        <div>
          <Button
            type="submit"
            aria-label="add todo button"
          >
            Add
          </Button>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem 0;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 100%;
  gap: 0.6rem;
`;

const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 0.9rem 0.65rem;
  font-family: var(--font-montserrat);
  border-radius: 12px;
  border: 1px solid rgba(189, 189, 189, 1);
`;

const Button = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  outline: none;
  border: none;
  border-radius: 12px;
  padding: .9rem 2rem;
  color: white;
  font-weight: bold;
  font-family: var(--font-montserrat);
  cursor: pointer;
`;

export default AddTodo;
