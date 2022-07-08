const initialState = {};

const progressReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PROGRESS':
      return payload;
    default:
      return state;
  }
};

export default progressReducer;
