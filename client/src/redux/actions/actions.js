export const getInfo = (data) => ({ type: 'GET_INFO', payload: data });

export const getInfoThunk = () => async (dispatch) => {
  const response = await fetch('/info');
  const result = await response.json();
  console.log(result);
  dispatch(getInfo(result));
};

export const generateTrash = (data) => ({ type: 'GENERATE_TRASH', payload: data });

export const generateTrashThunk = () => async (dispatch) => {
  const response = await fetch('/game');
  const result = await response.json();
  console.log(result);
  dispatch(generateTrash(result));
};
