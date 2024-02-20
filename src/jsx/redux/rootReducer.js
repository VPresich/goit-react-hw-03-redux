import { combineReducers } from 'redux';

import { itemsReducer } from './items/reducer';
import { filtersReducer } from './filter/reducer';

export const rootReducer = combineReducers({
  items: itemsReducer,
  filters: filtersReducer,
});
