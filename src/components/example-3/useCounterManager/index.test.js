import { renderHook, act } from '@testing-library/react-hooks';
import { useCounterManager } from './';

describe('useCounterManager custom hook', () => {
  test('initial value should be the same as count value from returned object', () => {
    const source = 0;

    const returnedData = renderHook(() => useCounterManager(source));
    const counterValue = returnedData.result.current.count;

    expect(counterValue).toBe(source);

  });

  test('\'Increase fn should increase value by 1', () => {
    const source = 0;
    const returnedData = renderHook(() => useCounterManager(source));
    const prevCount = returnedData.result.current.count;
    const increase = returnedData.result.current.increase;
    const incrementedValue = prevCount + 1;
    act(increase);
    const receivedValue = returnedData.result.current.count;

    expect(receivedValue).toBe(incrementedValue);
  });

  test('\'Decrease fn should decrease value by 1', () => {
    const source = 0;
    const returnedData = renderHook(() => useCounterManager(source));
    const prevCount = returnedData.result.current.count;
    const decrease = returnedData.result.current.decrease;

    const decrementedValue = prevCount - 1;

    act(decrease);
    const receivedValue = returnedData.result.current.count;

    expect(receivedValue).toBe(decrementedValue);
  });

});