import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';

import {
  composeEnhancers,
  middleware
} from './middleware';

export const store = createStore(
  rootReducer,
  /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
  composeEnhancers(applyMiddleware(...middleware))
);