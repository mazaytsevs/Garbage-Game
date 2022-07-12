import { DELETE_TRASH, GENERATE_TRASH } from '../types/types';

const initialState = [];

const trashGeneratereducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GENERATE_TRASH:
      return payload;
    case DELETE_TRASH:
      // console.log('PAYLOAAAD', payload);
      // const [newObj] = state.filter((hero) => hero.id === payload.id);
      // const newy = Object.assign(state);
      // console.log('STATEEEEEE 1', state);

      // console.log('STATEEEEEE COPY', newy);
      return state;
    default:
      return state;
  }
};

export default trashGeneratereducer;
