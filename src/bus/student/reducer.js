// Types
import { types } from './types';

const initialState = {};

export const studentReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case types.SET_DATA_STUDENT:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};