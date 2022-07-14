/* eslint-disable no-case-declarations */
import { GENERATE_TIME_TRASH, CLEAR_TIME_TRASH, DELETE_TIME_TRASH } from '../types/types';

const initialState = {
  trashes: [],
};

const trashTimeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GENERATE_TIME_TRASH:
      return payload;
    // case CLEAR_TIME_TRASH:
    //   return payload;
    case DELETE_TIME_TRASH:
      const newState = {
        ...state,
        trashes: state.trashes.filter((trash) => trash.id !== payload),
      };
      return newState;
    default:
      return state;
  }
};

export default trashTimeReducer;
