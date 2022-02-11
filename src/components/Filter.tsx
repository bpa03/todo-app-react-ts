import type { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import VisibilityFilters from '@/redux/filter/utils';
import { setFilter } from '@/redux/filter/actions';
import { getFilterState } from '@/redux/filter/selectors';

const Filter: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const actualFilter = useAppSelector(getFilterState);

  const setAllTodos = () => dispatch(setFilter(VisibilityFilters.ALL));
  const setActiveTodos = () => dispatch(setFilter(VisibilityFilters.ACTIVE));
  const setCompletedTodos = () => dispatch(setFilter(VisibilityFilters.COMPLETED));

  return (
    <Container>
      <ButtonsWrapper>
        <FilterButton
          type="button"
          aria-label="filter all todos"
          onClick={setAllTodos}
          active={actualFilter === VisibilityFilters.ALL}
        >
          All
        </FilterButton>
        <FilterButton
          type="button"
          aria-label="filter active todos"
          onClick={setActiveTodos}
          active={actualFilter === VisibilityFilters.ACTIVE}
        >
          Active
        </FilterButton>
        <FilterButton
          type="button"
          aria-label="filter completed todos"
          onClick={setCompletedTodos}
          active={actualFilter === VisibilityFilters.COMPLETED}
        >
          Completed
        </FilterButton>
      </ButtonsWrapper>
    </Container>
  );
};

interface StyleProps {
  active: boolean
}

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

const FilterButton = styled.button<StyleProps>`
  border: none;
  outline: none;
  background-color: transparent;
  font-family: var(--font-montserrat);
  color: rgba(51, 51, 51, 1);
  font-weight: bold;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 150%;
    height: 4px;
    background-color: var(--primary-color);
    position: absolute;
    transition: transform .3s cubic-bezier(0.16, 1, 0.3, 1);
    transform: ${({ active }) => (active ? 'scale(1, 1)' : 'scale(1, 0)')};
    top: 185%;
    left: -25%;
    border-radius: 12px 12px 0 0;
  }
`;

export default Filter;
