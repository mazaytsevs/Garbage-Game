import {
  GET_TIME_PROGRESS, CLEAR_TIME_TRASH_RANDOM, CLEAR_OLD_TIME_PROGRESS, DELETE_TIME_PROGRESS,
  GET_TABLE_TIME_PROGRESS,
} from '../types/types';

export const getTimeProgress = (data) => ({ type: GET_TIME_PROGRESS, payload: data });
export const getDeleteTimeProgress = (data) => ({ type: DELETE_TIME_PROGRESS, payload: data });
export const getTableTimeProgress = (data) => ({ type: GET_TABLE_TIME_PROGRESS, payload: data });

export const getTimeProgressThunk = () => async (dispatch) => {
  const response = await fetch('/timeprogress');
  const result = await response.json();
  const progress = {
    id: result.id,
    name: result.name,
    score: result.score,
    background: (result.score === null || result.score < 20) ? 'lvl-1' : (result.score < 40) ? 'lvl-2' : 'lvl-3',
  };
  dispatch(getTimeProgress(progress));
};

export const postTimeProgressThunk = (body) => async (dispatch) => {
  const answer = {
    trash_id: body.id,
    score: body.score,
  };
  const response = await fetch(
    '/timeprogress/answer',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(answer),
    },
  );
  if (response.ok) {
    const resp = await fetch('/timeprogress');
    const result = await resp.json();
    const progress = {
      id: result.id,
      name: result.name,
      score: result.score,
      background: (result.score === null || result.score < 20) ? 'lvl-1' : (result.score < 40) ? 'lvl-2' : 'lvl-3',
    };
    dispatch(getTimeProgress(progress));
  }
};

export const getDeleteTimeProgressThunk = (id) => async (dispatch) => {
  const response = await fetch(`/timeprogress/${id}`, { method: 'delete' });
  if (response.status === 200) {
    dispatch(getDeleteTimeProgress(id));
  }
};

export const getTableTimeProgressThunk = () => async (dispatch) => {
  const response = await fetch('/timeprogress/table');
  const result = await response.json();
  const resultSorted = [...result].sort(((a, b) => (+a.score > +b.score ? -1 : 1)));
  dispatch(getTableTimeProgress(resultSorted));
};
