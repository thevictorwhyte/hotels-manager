import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectCatgoriesState = (state: RootState) => state.categories;

export const selectCatgories = createSelector(
  [selectCatgoriesState],
  (categories) => categories.categories
);