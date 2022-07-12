import { DELETE_TRASH, GENERATE_TRASH, GET_INFO } from '../types/types';

export const getInfo = (data) => ({ type: GET_INFO, payload: data });
export const generateTrash = (data) => ({ type: GENERATE_TRASH, payload: data });
export const deleteTrash = (id) => ({ type: DELETE_TRASH, payload: id });

export const getInfoThunk = () => async (dispatch) => {
  const response = await fetch('/info');
  const result = await response.json();
  dispatch(getInfo(result));
};

export const generateTrashThunk = () => async (dispatch) => {
  const response = await fetch('/game');
  const result = await response.json();
  dispatch(generateTrash(result));
};

export const deleteTrashThunk = (id) => async (dispatch) => {
  // console.log('ID', id);
  dispatch(deleteTrash(id));
};
