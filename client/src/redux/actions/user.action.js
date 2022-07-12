import { SET_USER, DELETE_USER } from '../types/types';
import * as endPoints from '../../config/endPoints';
import { disableLoader, enableLoader } from './loaderAction';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getUserFromServer = (id) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.getUser(id), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const currentUser = await response.json();
    dispatch(setUser(currentUser));
  }
  dispatch(disableLoader());
};

export const signUp = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  // console.log(payload);
  try {
    const response = await fetch(endPoints.signUp(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // for cookie
      credentials: 'include',
      body: JSON.stringify(payload),
    });
    // console.log(response);
    // console.log(navigate);
    if (response.status === 200) {
      const user = await response.json();
      dispatch(setUser(user));
      navigate('/');
    } else {
      navigate('/auth/reg');
    }
    dispatch(disableLoader());
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/');
  } else {
    navigate('/');
  }
  dispatch(disableLoader());
};

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};
