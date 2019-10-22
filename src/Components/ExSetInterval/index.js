import React, { useState, useEffect } from 'react';

export const ExSetInterval = () => {
  const [ value, setValue ] = useState(0);

  console.log(value);

  const increase = () => {
    setValue( (value) => value + 1 );
  };

  useEffect(()=>{
    // code in the begining - []
    // code in the begining - [value, ...]

    const timerId = setInterval(increase, 500);

    return () => {
      clearInterval(timerId);
    }
  }, [value]);
  //setInterval(increase, 500);

  return (
    <>
      <h2>ExSetTimeout</h2>
      <p>{value}</p>
    </>
  );
};