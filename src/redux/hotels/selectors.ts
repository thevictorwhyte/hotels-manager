import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectHotels = (state: RootState) => state.hotels;

export const selectHotelsList = createSelector(
  [selectHotels],
  (hotels) => hotels.hotels
);
