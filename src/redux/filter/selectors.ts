/* eslint-disable import/prefer-default-export */
import { FilterState } from './interfaces';

interface RootState {
  filter: FilterState
}

export const getFilterState = (state: RootState): FilterState => state.filter;
