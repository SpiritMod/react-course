// Types
import { types } from './types';

const initialState = {
  data: [],
  isFetching: false,
  error: false
};

export const starshipsReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case types.STARSHIPS_FILL:
      return { ...state, data: payload };

    case types.STARSHIPS_START_FETCHING:
      return { ...state, isFetching: true };

    case types.STARSHIPS_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    case types.STARSHIPS_STOP_FETCHING:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}