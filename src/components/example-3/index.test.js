import React  from 'react';
import { render, unmauntComponnentAtNode } from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fireEvent, getByTestId } from  '@testing-library/react';

import { Counter } from "./index";


Enzyme.configure({ adapter: new Adapter() });

const init = (source) => {

  const container = shallow(<Counter source={source}/>);
  const increment = container.find('#increment');
  const decrement = container.find('#decrement');

  return {
    container,
    increment,
    decrement
  }

};

describe('Counter component', () => {

  test('Counter should be rennder without crashing', () => {
    const div = document.createElement('div');
    render(<Counter source={0}/>, div);
  });

  test('Initial value should be received from property source', () => {
    const source = 0;
    const { container } = init(source);
    const counter = container.find('p');
    const receivedValue = Number(counter.text());

    expect(receivedValue).toBe(source);
  });


  test('Increase fn should increase value by 1', () => {
    const source = 0;
    const { container, increment } = init(source);
    increment.props().onClick();
    const counter = container.find('p');
    const receivedValue = Number(counter.text());
    expect(receivedValue).toBe(1);
  });
  test('Decrease fn should decrease value by 1', () => {
    const source = 0;
    const { container, decrement } = init(source);
    decrement.props().onClick();
    const counter = container.find('p');
    const receivedValue = Number(counter.text());
    expect(receivedValue).toBe(-1);
  });
});