import { SET_FILTER } from './constants';

export const setFilter = value => {
  return {
    type: SET_FILTER,
    payload: value,
  };
};
