import apiReducer from './apiReducer';

const defaultState = { sth: true };

describe('apiReducer', () => {
  it('should return default state when action not found', () => {
    expect(apiReducer(defaultState, {})).toEqual(defaultState);
  });

  // tests for each action
});
