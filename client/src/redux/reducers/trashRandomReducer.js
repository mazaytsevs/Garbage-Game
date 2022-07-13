/* eslint-disable no-case-declarations */
import { CREATE_TRASH_RANDOM, DELETE_TRASH_RANDOM } from '../types/types';

const initialState = [];

const trashRandomReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TRASH_RANDOM:
      return payload;
    case DELETE_TRASH_RANDOM:
      return state.filter((trash) => trash.id !== payload);
    default:
      return state;
  }
};

export default trashRandomReducer;
