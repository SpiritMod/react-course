import React, { useState, useMemo } from 'react';

const calculate = (a, b) => {
  console.log('calc');

  return a + b;
};

export const ExUseMemo = () => {

  const [ a, setA ] = useState(1);
  const [ b, setB ] = useState(2);
  const [ counter, setCounter ] = useState(0);

  const sum = useMemo(() => calculate(a,b), [a, b]);

  return (
    <>
      <h2>ExUseMemo</h2>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <p>Sum: {sum}</p>
      <button onClick={() => setA(a + 1)}>Change A</button>
      <button onClick={() => setB(b + 1)}>Change B</button>
      <h4 onClick={ () => setCounter(counter + 1) }>Counter {counter}</h4>
    </>
  );
};