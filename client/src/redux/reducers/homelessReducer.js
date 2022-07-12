import { GET_HOMELESS } from '../types/types';

const initialState = 'man-look';

const homelessReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_HOMELESS:
      return payload;
    default:
      return state;
  }
};

export default homelessReducer;
