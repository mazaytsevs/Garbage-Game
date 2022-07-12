import { GET_PROGRESS } from '../types/types';

export const getProgress = (data) => ({ type: GET_PROGRESS, payload: data });

export const getProgressThunk = () => async (dispatch) => {
  const response = await fetch('/progress');
  const result = await response.json();
  const progress = {
    id: result.id,
    name: result.name,
    score: result.score,
    background: (result.score === null || result.score < 20) ? 'lvl-1' : (result.score < 40) ? 'lvl-2' : 'lvl-3',
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
      background: (result.score === null || result.score < 20) ? 'lvl-1' : (result.score < 40) ? 'lvl-2' : 'lvl-3',
    };
    dispatch(getProgress(progress));
  }
};
