import { defaultFiltersState } from './constants';
import { setFilter } from './actions';

export const filtersReducer = (state = defaultFiltersState, action) => {
  switch (action.type) {
    case setFilter.type:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
