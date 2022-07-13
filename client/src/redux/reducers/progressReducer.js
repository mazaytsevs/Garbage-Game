import { GET_PROGRESS, DELETE_PROGRESS } from '../types/types';

const initialState = {};

const progressReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROGRESS:
      return payload;
    case DELETE_PROGRESS:
      return payload;
    default:
      return state;
  }
};

export default progressReducer;

// setTrashSorted(((prev) => prev.filter((el) => el.id !== item.id)))
