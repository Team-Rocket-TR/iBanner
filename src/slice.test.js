import reducer, {
  initialState,
  setContent,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setContent', () => {
    it('changes topic', () => {
      const expectValue = '아무거나 적기';

      const state = reducer(initialState, setContent(expectValue));

      expect(state.topic).toBe(expectValue);
    });
  });
});
