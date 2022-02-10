/* eslint-disable import/prefer-default-export */
import { FilterAction } from './interfaces';
import FilterActionTypes from './types';
import VisibilityFilters from './utils';

export const setFilter = (filter: VisibilityFilters): FilterAction => ({
  type: FilterActionTypes.SET_FILTER,
  payload: filter,
});
