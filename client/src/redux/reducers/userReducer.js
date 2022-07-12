import { SET_USER, DELETE_USER } from '../types/types';

// eslint-disable-next-line default-param-last
const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case DELETE_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
