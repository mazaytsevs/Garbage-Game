/* eslint-disable no-case-declarations */
import {
  CREATE_TRASH_RANDOM, DELETE_TRASH_RANDOM, CLEAR_TRASH_RANDOM, CLEAR_TIME_TRASH_RANDOM,
} from '../types/types';

const initialState = [];

const trashRandomReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TRASH_RANDOM:
      return payload;
    case DELETE_TRASH_RANDOM:
      return state.filter((trash) => trash.id !== payload);
    case CLEAR_TRASH_RANDOM:
      console.log('IM HERE');
      return payload;
    // case CLEAR_TIME_TRASH_RANDOM:
    //   return payload;
    default:
      return state;
  }
};

export default trashRandomReducer;
