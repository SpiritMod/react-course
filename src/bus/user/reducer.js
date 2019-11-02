
import { types } from './types';

const initialState = {
  name: ''
};

export const userReducer = ( state = initialState, { type, payload } ) => {
  switch (type) {
    case types.SET_NAME:
      return {
        ...state,
        name: payload
      };
    
    default:
      return state;

  }

};