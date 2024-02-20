import { defaultItemsState, ADD_ITEM, DEL_ITEM } from './constants';

export const itemsReducer = (state = defaultItemsState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    case DEL_ITEM:
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};
