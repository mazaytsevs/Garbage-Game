import { GET_TIME_HOMELESS } from '../types/types';

export const getTimeHomeless = (data) => ({ type: GET_TIME_HOMELESS, payload: data });

export const getTimeHomelessThunk = () => async (dispatch) => {
  const response = await fetch('/timeprogress/homeless');
  const result = await response.json();
  const homeless = result.join('-');
  dispatch(getTimeHomeless(homeless));
};
