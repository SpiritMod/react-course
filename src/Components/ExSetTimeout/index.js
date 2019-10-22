import React, { useState } from 'react';

export const ExSetTimeout = () => {
  const [ value, setValue ] = useState(0);

  console.log(value);

  const increase = () => {
    setValue( (value) => value + 1 );
  };

  setTimeout(increase, 500);

  return (
    <>
      <h2>ExSetTimeout</h2>
      <button onClick={ increase }>++</button>
      <p>{value}</p>
    </>
  );
};