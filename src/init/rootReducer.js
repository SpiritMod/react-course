import { combineReducers } from 'redux';

import { userReducer as user } from '../bus/user/reducer';
import { starshipsReducer as starships } from '../bus/starships/reducer';
import { planetsReducer as planets } from '../bus/planets/reducer';

export const rootReducer = combineReducers({
  user,
  starships,
  planets
});