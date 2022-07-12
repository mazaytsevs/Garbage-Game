import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import infoReducer from './infoReducer';
import trashGeneratereducer from './trashGeneratereducer';
import progressReducer from './progressReducer';
import homelessReducer from './homelessReducer';
import timeProgressReducer from './timeProgressReducer';
import timehomelessReducer from './timehomelessReducer';

const rootReducer = combineReducers({
  info: infoReducer,
  user: userReducer,
  loader: loaderReducer,
  trashGenerate: trashGeneratereducer,
  progress: progressReducer,
  homeless: homelessReducer,
  timeprogress: timeProgressReducer,
  timehomeless: timehomelessReducer,
});

export default rootReducer;
