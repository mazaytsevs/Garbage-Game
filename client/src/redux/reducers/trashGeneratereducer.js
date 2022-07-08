const initialState = [];

const trashGeneratereducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GENERATE_TRASH':
      return payload;
    default:
      return state;
  }
};

export default trashGeneratereducer;
