import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectCountry = (state: RootState) => state.country;

export const selectCountries = createSelector(
  [selectCountry],
  (country) => country.countries
);

export const selectStatus = createSelector(
  [selectCountry],
  (country) => country.status
);
