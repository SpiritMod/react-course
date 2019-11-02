
import { types } from './types';

const initialState = {
  property: ''
};

export const domainRedicer = ( state = initialState, {type} ) => {
  switch (type) {
    case types.DOMAIN_ACTION:
      return {
        ...state,
        property: ''
      };

    default:
      return state;

  }

  if (action.type === types.DOMAIN_ACTION) {

  }
};