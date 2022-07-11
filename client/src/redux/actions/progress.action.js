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
