import { CHANGE_FLAG } from '../types/types';

export const changeFlag = (boolean) => ({ type: CHANGE_FLAG, payload: boolean });

export const changeFlagThunk = (boolean) => async (dispatch) => {
  dispatch(changeFlag(boolean));
};
