import { GET_TABLE_TIME_PROGRESS } from '../types/types';

const initialState = [];

const tableTimeProgressReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TABLE_TIME_PROGRESS:
      return payload;
    default:
      return state;
  }
};

export default tableTimeProgressReducer;
