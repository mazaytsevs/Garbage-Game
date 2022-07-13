import {
  GET_PROGRESS, DELETE_PROGRESS, CLEAR_OLD_PROGRESS, CLEAR_TRASH_RANDOM,
} from '../types/types';

export const getProgress = (data) => ({ type: GET_PROGRESS, payload: data });
export const getDeleteProgress = (data) => ({ type: DELETE_PROGRESS, payload: data });
export const clearOldProgress = () => ({ type: CLEAR_OLD_PROGRESS, payload: { trashes: [] } });
export const clearOldTrashRandom = () => ({ type: CLEAR_TRASH_RANDOM, payload: [] });

export const getProgressThunk = () => async (dispatch) => {
  const response = await fetch('/progress');
  const result = await response.json();
  const progress = {
    id: result.id,
    name: result.name,
    score: result.score,
    background: (result.score === null || result.score < 40) ? 'lvl-1' : (result.score < 80) ? 'lvl-2' : 'lvl-3',
  };
  dispatch(getProgress(progress));
};

export const postProgressThunk = (body) => async (dispatch) => {
  const answer = {
    trash_id: body.id,
    score: body.score,
  };
  const response = await fetch(
    '/progress/answer',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(answer),
    },
  );
  if (response.ok) {
    const resp = await fetch('/progress');
    const result = await resp.json();
    const progress = {
      id: result.id,
      name: result.name,
      score: result.score,
      background: (result.score === null || result.score < 40) ? 'lvl-1' : (result.score < 80) ? 'lvl-2' : 'lvl-3',
    };
    dispatch(getProgress(progress));
  }
};

export const getDeleteProgressThunk = (id) => async (dispatch) => {
  const response = await fetch(`/progress/${id}`, { method: 'delete' });
  if (response.status === 200) {
    dispatch(clearOldProgress());
    dispatch(clearOldTrashRandom());
    dispatch(getDeleteProgress(id));
  }
};
