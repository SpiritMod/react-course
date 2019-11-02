// Types
import {  types } from './types';

export const userActions = Object.freeze({
  setName: (payload) => {
    return {
      type: types.SET_NAME,
      payload
    }
  }
});