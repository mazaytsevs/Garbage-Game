import {
  SAVE_ONE_NEW_TRASH, DELETE_ONE_TRASH,
} from '../types/types';

export const addedTrash = (data) => ({ type: SAVE_ONE_NEW_TRASH, payload: data });
export const deleteAddedTrash = () => ({ type: DELETE_ONE_TRASH, payload: {} });

export const addedTrashThunk = (trash) => async (dispatch) => {
  if (trash.bonus) {
    dispatch(addedTrash(trash));
  }
};

export const deleteAddedTrashThunk = () => async (dispatch) => {
  dispatch(deleteAddedTrash());
};
