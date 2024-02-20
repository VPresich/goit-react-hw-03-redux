import { createReducer } from '@reduxjs/toolkit';
import { defaultItemsState } from './constants';
import { addItem, deleteItem } from './actions';

export const itemsReducer = createReducer(defaultItemsState, builder => {
  builder
    .addCase(addItem, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteItem, (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    });
});
