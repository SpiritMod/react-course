// Types
import { types } from './types';

const initialState = {
  data: [],
  isFetching: false,
  error: false,
  film: false,
};

export const filmsReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case types.FILMS_FILL:
      return { ...state, data: payload };

    case types.FILMS_START_FETCHING:
      return { ...state, isFetching: true };

    case types.FILMS_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    case types.FILMS_STOP_FETCHING:
      return { ...state, isFetching: false };

    case types.FILM_FILL:
      return { ...state, film: payload };

    default:
      return state;
  }
};