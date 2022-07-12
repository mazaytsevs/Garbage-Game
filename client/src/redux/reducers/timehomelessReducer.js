import { GET_TIME_HOMELESS } from '../types/types';

const initialState = 'man-look';

const timehomelessReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TIME_HOMELESS:
      return payload;
    default:
      return state;
  }
};

export default timehomelessReducer;
