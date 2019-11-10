// Types
import { types } from './types';

import { api } from '../../api';

export const filmsActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.FILMS_START_FETCHING,
    }
  },
  stopFetching: () => {
    return {
      type: types.FILMS_STOP_FETCHING,
    }
  },
  fill: (payload) => {
    return {
      type: types.FILMS_FILL,
      payload
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.FILMS_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  fillFilm: (payload) => {
    return {
      type: types.FILM_FILL,
      payload
    }
  },

  // Async
  fetchAsync: () => async (dispatch) => {
    dispatch({
      type: types.FILMS_FETCH_ASYNC
    });

    dispatch(filmsActions.startFetching());

    const response = await api.films.fetch();

    if (response.status === 200) {
      const { results } = await response.json();

      dispatch(filmsActions.fill(results));
    } else {
      const error = {
        status: response.status
      };

      dispatch(filmsActions.setFetchingError(error));
    }

    dispatch(filmsActions.stopFetching());
  },
  fetchAsyncFilm: (id) => async (dispatch) => {

    dispatch({
      type: types.FILM_FETCH_ASYNC
    });

    dispatch(filmsActions.startFetching());

    const response = await api.film.fetch(id);
    const result = await response.json();

    if (response.status === 200) {
      dispatch(filmsActions.fillFilm(result));
    } else {
      const error = {
        status: response.status
      };
      dispatch(filmsActions.setFetchingError(error));
    }

    dispatch(filmsActions.stopFetching());
  }

});