import type { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '@/redux/hooks';
import VisibilityFilters from '@/redux/filter/utils';
import { setFilter } from '@/redux/filter/actions';

const Filter: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const setAllTodosFilter = () => dispatch(setFilter(VisibilityFilters.ALL));
  const setActiveTodos = () => dispatch(setFilter(VisibilityFilters.ACTIVE));
  const setCompletedTodos = () => dispatch(setFilter(VisibilityFilters.COMPLETED));

  return (
    <Container>
      <ButtonsWrapper>
        <FilterButton
          type="button"
          aria-label="filter all todos"
          onClick={setAllTodosFilter}
        >
          All
        </FilterButton>
        <FilterButton
          type="button"
          aria-label="filter active todos"
          onClick={setActiveTodos}
        >
          Active
        </FilterButton>
        <FilterButton
          type="button"
          aria-label="filter completed todos"
          onClick={setCompletedTodos}
        >
          Completed
        </FilterButton>
      </ButtonsWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  margin: 3rem 0 0 0;
`;

const ButtonsWrapper = styled.div`
  border-bottom: 1px solid rgba(189, 189, 189, 1);
  padding: 0 0 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FilterButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-family: var(--font-montserrat);
  color: rgba(51, 51, 51, 1);
  font-weight: bold;
  cursor: pointer;
  position: relative;
`;

export default Filter;
