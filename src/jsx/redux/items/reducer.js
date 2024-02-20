import { defaultItemsState } from './constants';
import { addItem, deleteItem } from './actions';

export const itemsReducer = (state = defaultItemsState, action) => {
  switch (action.type) {
    case addItem.type:
      return [...state, action.payload];

    case deleteItem.type:
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};
