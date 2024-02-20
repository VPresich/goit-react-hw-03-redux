import { ADD_ITEM, DEL_ITEM } from './constants';

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = id => {
  return {
    type: DEL_ITEM,
    payload: id,
  };
};
