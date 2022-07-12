/* eslint-disable no-case-declarations */
import { DELETE_TRASH, GENERATE_TRASH } from '../types/types';

const initialState = [];

const trashGeneratereducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GENERATE_TRASH:
      return payload;
    case DELETE_TRASH:
      console.log('STATEEE!', state.trashes);
      console.log('PAYLOAAAD', payload);

      const newState = {
        ...state,
        trashes: state.trashes.filter((trash) => trash.id !== payload),
      };
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default trashGeneratereducer;
