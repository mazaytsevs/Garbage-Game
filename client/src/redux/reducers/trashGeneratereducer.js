/* eslint-disable no-case-declarations */
import {
  CLEAR_OLD_PROGRESS, DELETE_TRASH, GENERATE_TRASH, CLEAR_OLD_TIME_PROGRESS,
} from '../types/types';

const initialState = {
  trashes: [],
};

const trashGeneratereducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GENERATE_TRASH:
      return payload;
    case DELETE_TRASH:

      const newState = {
        ...state,
        trashes: state.trashes.filter((trash) => trash.id !== payload),
      };
      return newState;
    case CLEAR_OLD_PROGRESS:
      return payload;
    default:
      return state;
  }
};

export default trashGeneratereducer;
