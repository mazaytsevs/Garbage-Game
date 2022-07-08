import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import infoReducer from './infoReducer';
import trashGeneratereducer from './trashGeneratereducer';

const rootReducer = combineReducers({
  info: infoReducer,
  user: userReducer,
  loader: loaderReducer,
  trashGenerate: trashGeneratereducer,
});

export default rootReducer;
