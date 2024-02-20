import { ADD_ITEM, DEL_ITEM } from './constants';
import { nanoid } from 'nanoid';
export const addItem = values => {
  return {
    type: ADD_ITEM,
    payload: { ...values, id: nanoid() },
  };
};

export const deleteItem = id => {
  return {
    type: DEL_ITEM,
    payload: id,
  };
};
