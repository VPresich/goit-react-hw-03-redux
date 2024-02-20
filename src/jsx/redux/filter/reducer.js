import { createReducer } from '@reduxjs/toolkit';
import { defaultFiltersState } from './constants';
import { setFilter } from './actions';

export const filtersReducer = createReducer(defaultFiltersState, builder => {
  builder.addCase(setFilter, (state, action) => {
    state.name = action.payload;
  });
});
