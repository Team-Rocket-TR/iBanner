import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  canvasRef: null,
  color: 'gray',
  content: '',
  fontColor: 'white',
  width: '500',
  height: '500',
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    ...initialState,
  },
  reducers: {
    setCanvasRef(state, { payload: canvasRef }) {
      return {
        ...state,
        canvasRef,
      };
    },
    setWidth(state, { payload: width }) {
      return {
        ...state,
        width,
      };
    },
    setHeight(state, { payload: height }) {
      return {
        ...state,
        height,
      };
    },
    setColor(state, { payload: color }) {
      return {
        ...state,
        color,
      };
    },
    setContent(state, { payload: content }) {
      return {
        ...state,
        content,
      };
    },
    setFontColor(state, { payload: fontColor }) {
      return {
        ...state,
        fontColor,
      };
    },
  },
});

export const {
  setCanvasRef,
  setColor,
  setContent,
  setFontColor,
  setWidth,
  setHeight,
} = actions;

export default reducer;
