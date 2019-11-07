import React  from 'react';

import { render, fireEvent, getByTestId } from  '@testing-library/react';

import { Counter } from "./index";

const init = (source) => {

  const { container } = render(<Counter source={source}/>);
  const counter = getByTestId(container, 'counterValue');
  const increment = getByTestId(container, 'increment');
  const decrement = getByTestId(container, 'decrement');

  return {
    counter,
    increment,
    decrement
  }

};

describe('Counter component', () => {
  test('Initial value should be received from property source', () => {
    const source = 0;
    const { counter } = init(source);
    const value = Number(counter.textContent);

    expect(value).toBe(source);

  });

  test('Increase fn should increase value by 1', () => {
    const source = 0;
    const { counter, increment } = init(source);
    const prevCounnter = Number(counter.textContent);
    const incrementedValue = prevCounnter + 1;
    fireEvent.click(increment);

    const currentCounter = Number(counter.textContent);

    expect(currentCounter).toBe(incrementedValue);
  });
  test('Decrease fn should decrease value by 1', () => {
    const source = 0;
    const { counter, decrement } = init(source);
    const prevCounnter = Number(counter.textContent);
    const decrementedValue = prevCounnter - 1;
    fireEvent.click(decrement);

    const currentCounter = Number(counter.textContent);

    expect(currentCounter).toBe(decrementedValue);
  });
});