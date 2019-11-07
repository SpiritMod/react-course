import React from 'react';
import { useCounterManager } from './useCounterManager';

export const Counter = ({source}) => {
  const { count, increase, decrease } = useCounterManager(source);

  return (
    <>
      <button onClick={ increase } id='increment'>Increase</button>
      <p>{count}</p>
      <button onClick={ decrease } id='decrement'>Decrease</button>
    </>
  );
};