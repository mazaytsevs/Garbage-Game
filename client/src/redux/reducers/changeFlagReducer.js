import { CHANGE_FLAG } from '../types/types';

const initialState = false;

const changeFlagReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_FLAG:
      return payload;
    default:
      return state;
  }
};

export default changeFlagReducer;
