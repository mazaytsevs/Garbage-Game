import { GENERATE_TIME_TRASH, CLEAR_TIME_TRASH } from '../types/types';

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
    default:
      return state;
  }
};

export default trashTimeReducer;
