// Types
import { types } from './types';

const initialState = {
  data: [],
  isFetching: false,
  error: false
};

export const planetsReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case types.PLANETS_FILL:
      return { ...state, data: payload };

    case types.PLANETS_START_FETCHING:
      return { ...state, isFetching: true };

    case types.PLANETS_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    case types.PLANETS_STOP_FETCHING:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};