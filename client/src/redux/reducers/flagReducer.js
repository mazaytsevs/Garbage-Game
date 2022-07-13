// eslint-disable-next-line import/prefer-default-export
export const flagReducer = (state = false, action) => {
  switch (action.type) {
    case 'FLAG_OPEN':
      return true;
    case 'FLAG_CLOSE':
      return false;
    default: return state;
  }
};
