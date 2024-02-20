import { combineReducers } from 'redux';

import { itemsReducer } from './items/reducer';
import { filtersReducer } from './filter/reducer';

export const rootReducer = combineReducers({
  items: itemsReducer,
  filters: filtersReducer,
});

// export const rootReducer = (state = {}, action) => {
//   return {
//     items: itemsReducer(state.items, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };
