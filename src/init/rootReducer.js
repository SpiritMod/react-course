import { combineReducers } from 'redux';

import { peopleReducer as people } from '../bus/people/reducer';
import { filmsReducer as films } from '../bus/films/reducer';

export const rootReducer = combineReducers({
  people,
  films
});