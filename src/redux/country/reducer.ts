import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { httpGetCountries } from '../../services/country';

interface CountryState {
  countries: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CountryState = {
  countries: [],
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk<string[], void>(
  'country/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpGetCountries();
      const data = response.data;
      const countries = [
        ...new Set(data.map((city: any) => city.country)),
      ] as string[];
      return countries;
    } catch (error) {
      return rejectWithValue('Error occured trying to get countries');
    }
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong.';
      });
  },
});

const countryReducer = countrySlice.reducer;

const persistConfig = {
  key: 'country',
  storage,
  whitelist: ['countries'],
};

export default persistReducer(persistConfig, countryReducer);
