// Types
import { types } from './types';

export const studentActions = Object.freeze({
  setDataStudent: (payload) => {
    return {
      type: types.SET_DATA_STUDENT,
      payload
    }
  },
});