import { useState } from 'react';

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return {
    counter,
    increase,
    decrease
  }
}