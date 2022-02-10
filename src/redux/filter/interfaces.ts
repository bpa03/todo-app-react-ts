import FilterActionTypes from './types';
import VisibilityFilters from './utils';

export interface FilterAction {
  type: FilterActionTypes,
  payload?: string
}

export type FilterState = VisibilityFilters;
