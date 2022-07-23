import { CLEAR_TIME_TRASH, GENERATE_TIME_TRASH, DELETE_TIME_TRASH } from '../types/types';

export const generateTimeTrash = (data) => ({ type: GENERATE_TIME_TRASH, payload: data });
export const clearTimeTrash = () => ({ type: CLEAR_TIME_TRASH, payload: { trashes: [] } });
export const deleteTimeTrash = (id) => ({ type: DELETE_TIME_TRASH, payload: id });

export const generateTimeTrashThunk = () => async (dispatch) => {
  const response = await fetch('/game/time');
  const result = await response.json();
  dispatch(generateTimeTrash(result));
};

export const deleteTimeTrashThunk = (id) => async (dispatch) => {
  dispatch(deleteTimeTrash(id));
};
