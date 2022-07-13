import {
  SAVE_ONE_NEW_TRASH,
} from '../types/types';

export const addedTrash = (data) => ({ type: SAVE_ONE_NEW_TRASH, payload: data });

export const addedTrashThunk = (trash) => async (dispatch) => {
  console.log('SAVE THIS TRASH', trash);
  // dispatch(saveOneNewTrash(trash));
};
