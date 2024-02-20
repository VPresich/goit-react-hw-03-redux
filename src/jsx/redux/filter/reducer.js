import { defaultFiltersState, SET_FILTER } from './constants';

export const filtersReducer = (state = defaultFiltersState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
