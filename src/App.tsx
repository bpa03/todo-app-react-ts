import { FunctionComponent } from 'react';
import styled from 'styled-components';

import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';
import Filter from '@/components/Filter';
import { useAppSelector } from '@/redux/hooks';
import { getFilterState } from '@/redux/filter/selectors';
import VisibilityFilters from '@/redux/filter/utils';

const App: FunctionComponent = () => {
  const filter = useAppSelector(getFilterState);

  return (
    <AppWrapper>
      <Title>#todo</Title>
      <Filter />
      {(filter !== VisibilityFilters.COMPLETED) && <AddTodo />}
      <TodoList />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  padding: 1.8rem;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  @media only screen and (min-width: 1168px) {
    width: 45%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--header-font-color);
  text-align: center;
  font-weight: bold;
  letter-spacing: -2px;
`;

export default App;
