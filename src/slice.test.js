import { createRef } from 'react';

import reducer, {
  initialState,
  setCanvasRef,
  setBackgroundImage,
  setContent,
  setFontSize,
  setFontColor,
} from './slice';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setCanvasRef', () => {
    it('changes content', () => {
      const expectRef = createRef();

      const state = reducer(initialState, setCanvasRef(expectRef));

      expect(state.canvasRef).toBe(expectRef);
    });
  });

  describe('setBackgroundImage', () => {
    it('changes image data URL', () => {
      const expectValue = 'data:image/png;base64,iVBORw0KG...';

      const state = reducer(initialState, setBackgroundImage(expectValue));

      expect(state.backgroundImage).toBe(expectValue);
    });
  });

  describe('setContent', () => {
    it('changes content', () => {
      const expectValue = '아무거나 적기';

      const state = reducer(initialState, setContent(expectValue));

      expect(state.content).toBe(expectValue);
    });
  });

  describe('setFontSize', () => {
    it('changes font size of content', () => {
      const expectValue = '18';

      const state = reducer(initialState, setFontSize(expectValue));

      expect(state.fontSize).toBe(expectValue);
    });
  });

  describe('setFontColor', () => {
    it('changes color of content', () => {
      const expectValue = 'black';

      const state = reducer(initialState, setFontColor(expectValue));

      expect(state.fontColor).toBe(expectValue);
    });
  });
});
