import { createReducer } from '@reduxjs/toolkit';
import { defaultItemsState } from './constants';
import { addItem, deleteItem } from './actions';

export const itemsReducer = createReducer(defaultItemsState, builder => {
  builder
    .addCase(addItem, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(deleteItem, (state, action) => {
      return state.filter(task => task.id !== action.payload);
    });
});
