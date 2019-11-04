// Types
import { types } from './types';

const initialState = {
  firstName: "",
  surname: "",
  age: 0,
  email: "",
  sex: "",
  speciality: "",
  password: "",
  passwordConfirm: ""
};

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
