const initialState = false;

const endGameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GAME_FINISHED':
      return payload;
    default:
      return state;
  }
};

export default endGameReducer;
