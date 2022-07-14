import { CREATE_TRASH_RANDOM, DELETE_TRASH_RANDOM } from '../types/types';

export const generateTrashRandom = (data) => ({ type: CREATE_TRASH_RANDOM, payload: data });
export const deleteTrashRandom = (id) => ({ type: DELETE_TRASH_RANDOM, payload: id });

export const generateTrashRandomThunk = (randomTrashes) => async (dispatch) => {
  // console.log('randomTrashes in REDUX', randomTrashes);
  dispatch(generateTrashRandom(randomTrashes));
};

export const deleteTrashRandomThunk = (id) => async (dispatch) => {
  // console.log('ID randomTrashes in REDUX', id);
  dispatch(deleteTrashRandom(id));
};
