import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { ICategoriesState, ICategory } from './typings';

const initialState: ICategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategory>) => {
      state.categories = [...state.categories, action.payload];
    },
    deleteCategory: (state, action: PayloadAction<ICategory>) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload.id
      );
    },
  },
});

export const { addCategory, deleteCategory } = categoriesSlice.actions;

const categoriesReducer = categoriesSlice.reducer;
const persistConfig = {
  key: 'categories',
  storage,
  whitelist: ['categories'],
};

export default persistReducer(persistConfig, categoriesReducer);
