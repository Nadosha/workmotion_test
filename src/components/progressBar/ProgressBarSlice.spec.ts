import progressBarReducer, {
  progressBarState,
  increment,
  decrement,
  incrementByAmount,
} from './ProgressBarSlice';

describe('progressBar reducer', () => {
  const initialState: progressBarState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(progressBarReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = progressBarReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = progressBarReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = progressBarReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
