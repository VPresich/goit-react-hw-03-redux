import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './items/reducer';
import { filtersReducer } from './filter/reducer';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    filters: filtersReducer,
  },
});
