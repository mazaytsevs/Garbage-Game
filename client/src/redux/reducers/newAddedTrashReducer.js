import { DELETE_ONE_TRASH, SAVE_ONE_NEW_TRASH } from '../types/types';

const initialState = {};

const addedTrashReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_ONE_NEW_TRASH:
      return payload;
    case DELETE_ONE_TRASH:
      return payload;
    default:
      return state;
  }
};

export default addedTrashReducer;
