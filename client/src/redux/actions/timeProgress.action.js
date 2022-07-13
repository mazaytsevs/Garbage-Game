import { GET_TIME_PROGRESS } from '../types/types';

export const getTimeProgress = (data) => ({ type: GET_TIME_PROGRESS, payload: data });

export const getTimeProgressThunk = () => async (dispatch) => {
  console.log('getTimeProgressThunk');
  const response = await fetch('/timeprogress');
  const result = await response.json();
  const progress = {
    id: result.id,
    name: result.name,
    score: result.score,
    background: (result.score === null || result.score < 20) ? 'lvl-1' : (result.score < 40) ? 'lvl-2' : 'lvl-3',
  };
  // console.log('heeeeeeeeeeeeeeeeeeey', progress);
  dispatch(getTimeProgress(progress));
};

export const postTimeProgressThunk = (body) => async (dispatch) => {
  const answer = {
    trash_id: body.id,
    score: body.score,
  };
  // console.log(answer);
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
