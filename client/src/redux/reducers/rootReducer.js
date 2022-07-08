import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import infoReducer from './infoReducer';
import trashGeneratereducer from './trashGeneratereducer';
import progressReducer from './progressReducer';

const rootReducer = combineReducers({
  info: infoReducer,
  user: userReducer,
  loader: loaderReducer,
  trashGenerate: trashGeneratereducer,
  progress: progressReducer,
});

export default rootReducer;
