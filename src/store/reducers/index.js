import { combineReducers } from 'redux';
import movie from './movies_reducer';

const rootReducer = combineReducers({
  movie,
});

export default rootReducer;
