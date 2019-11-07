import React, { useState } from 'react';

export const Counter = ({source}) => {
  const [count, setCount] = useState(source);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <>
      <button onClick={ increase } data-testid='increment'>Increase</button>
      <p data-testid='counterValue'>{count}</p>
      <button onClick={ decrease } data-testid='decrement'>Decrease</button>
    </>
  );
};