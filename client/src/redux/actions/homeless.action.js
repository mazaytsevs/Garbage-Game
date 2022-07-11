import { GET_HOMELESS } from '../types/types';

export const getHomeless = (data) => ({ type: GET_HOMELESS, payload: data });

export const getHomelessThunk = () => async (dispatch) => {
  const response = await fetch('/progress/homeless');
  const result = await response.json();
  const homeless = result.join('-');
  dispatch(getHomeless(homeless));
};
