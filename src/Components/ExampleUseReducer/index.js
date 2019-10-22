import React, { useReducer } from 'react';

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      };
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state
  }
};

export const ExampleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Home Title</h1>
      <p>{ state.count }</p>

      <button onClick={ () => dispatch({type: 'decrement'}) }>-</button>
      <button onClick={ () => dispatch({type: 'increment'}) }>+</button>
    </>
  )
};