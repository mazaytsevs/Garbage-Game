import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import infoReducer from './infoReducer';
import trashGeneratereducer from './trashGeneratereducer';
import progressReducer from './progressReducer';
import homelessReducer from './homelessReducer';
import timeProgressReducer from './timeProgressReducer';
import changeFlagReducer from './changeFlagReducer';
import trashRandomReducer from './trashRandomReducer';
import timehomelessReducer from './timehomelessReducer';
import addedTrashReducer from './newAddedTrashReducer';

import { flagReducer } from './flagReducer';

const rootReducer = combineReducers({
  info: infoReducer,
  user: userReducer,
  loader: loaderReducer,
  trashGenerate: trashGeneratereducer,
  progress: progressReducer,
  homeless: homelessReducer,
  timeprogress: timeProgressReducer,
  flagForBag: changeFlagReducer,
  trashRandom: trashRandomReducer,
  timehomeless: timehomelessReducer,
  flag: flagReducer,
  addedTrash: addedTrashReducer,
});

export default rootReducer;
