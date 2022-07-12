import { GET_PROGRESS, POST_PROGRESS } from '../types/types';

const initialState = {};

const progressReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROGRESS:
      return payload;
    default:
      return state;
  }
};

export default progressReducer;

// setTrashSorted(((prev) => prev.filter((el) => el.id !== item.id)))
