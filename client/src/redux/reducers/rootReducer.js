import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
  info: infoReducer,
  user: userReducer,
  loader: loaderReducer,
});

export default rootReducer;
