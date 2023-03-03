import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { ICategoriesState, ICategory } from './typings';

const initialState: ICategoriesState = {
  categories: [
    {
      id: '1',
      name: '1 Star',
    },
    {
      id: '2',
      name: '2 Star',
    },
    {
      id: '3',
      name: '3 Star',
    },
  ],
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
    editCategory: (state, action: PayloadAction<ICategory>) => {
      const { id, name } = action.payload;
      const categoryIndex = state.categories.findIndex(
        (category) => category.id === id
      );
      if (categoryIndex !== -1) {
        state.categories[categoryIndex] = { id, name };
      }
    },
  },
});

export const { addCategory, deleteCategory, editCategory } =
  categoriesSlice.actions;

const categoriesReducer = categoriesSlice.reducer;
const persistConfig = {
  key: 'categories',
  storage,
  whitelist: ['categories'],
};

export default persistReducer(persistConfig, categoriesReducer);
