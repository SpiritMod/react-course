import { combineReducers } from 'redux';

import { peopleReducer as people } from '../bus/people/reducer';

export const rootReducer = combineReducers({
  people
});