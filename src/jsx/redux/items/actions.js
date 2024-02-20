import { ADD_ITEM, DEL_ITEM } from './constants';
import { createAction, nanoid } from '@reduxjs/toolkit';

export const addItem = createAction(ADD_ITEM, values => {
  return {
    payload: {
      ...values,
      id: nanoid(),
    },
  };
});
export const deleteItem = createAction(DEL_ITEM);
