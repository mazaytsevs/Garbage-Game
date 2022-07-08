export const getProgress = (data) => ({ type: 'GET_PROGRESS', payload: data });

export const getProgressThunk = () => async (dispatch) => {
  const response = await fetch('/progress');
  const result = await response.json();
  dispatch(getProgress(result));
};
