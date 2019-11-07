import React, { useState } from 'react';

export const useCounterManager = (source) => {
  const [count, setCount] = useState(source);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return {
    count,
    increase,
    decrease
  }
};