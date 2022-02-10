/* eslint-disable default-param-last */
import FilterActionTypes from './types';
import type { FilterState, FilterAction } from './interfaces';
import VisibilityFilters from './utils';

const initialState: FilterState = VisibilityFilters.ALL;

export default function filterReducer(
  state: FilterState = initialState,
  action: FilterAction,
) {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
