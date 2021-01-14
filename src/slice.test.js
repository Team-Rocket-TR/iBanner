import reducer, {
  initialState,
  setContent,
  setFontColor,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setContent', () => {
    it('changes content', () => {
      const expectValue = '아무거나 적기';

      const state = reducer(initialState, setContent(expectValue));

      expect(state.content).toBe(expectValue);
    });
  });

  describe('setFontColor', () => {
    it('changes color of content', () => {
      const expectValue = 'black';

      const state = reducer(initialState, setFontColor(expectValue));

      expect(state.contentColor).toBe(expectValue);
    });
  });
});
