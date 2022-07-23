import { GET_TIME_PROGRESS, DELETE_TIME_PROGRESS } from '../types/types';

const initialState = {};

const timeProgressReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TIME_PROGRESS:
      return payload;
    case DELETE_TIME_PROGRESS:
      return payload;
    default:
      return state;
  }
};

export default timeProgressReducer;

// setTrashSorted(((prev) => prev.filter((el) => el.id !== item.id)))
