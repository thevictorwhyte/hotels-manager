import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { IHotelsState, IHotel } from './typings';

const initialState: IHotelsState = {
  hotels: [],
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    addHotel: (state, action: PayloadAction<IHotel>) => {
      state.hotels = [...state.hotels, action.payload];
    },
    deleteHotel: (state, action: PayloadAction<IHotel>) => {
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload.id
      );
    },
    editHotel: (state, action: PayloadAction<IHotel>) => {
      const hotelIndex = state.hotels.findIndex(
        (hotel) => hotel.id === action.payload.id
      );
      if (hotelIndex !== -1) {
        state.hotels[hotelIndex] = action.payload;
      }
    },
  },
});

export const { addHotel, deleteHotel, editHotel } = hotelsSlice.actions;

const hotelsReducer = hotelsSlice.reducer;
const persistConfig = {
  key: 'hotels',
  storage,
  whitelist: ['hotels'],
};

export default persistReducer(persistConfig, hotelsReducer);
