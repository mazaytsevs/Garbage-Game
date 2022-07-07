import { combineReducers } from 'redux';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
  info: infoReducer,
});

export default rootReducer;
