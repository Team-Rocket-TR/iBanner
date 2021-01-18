import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  backgroundColor: 'gray',
  canvasRef: null,
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
    setBackgroundColor(state, { payload: backgroundColor }) {
      return {
        ...state,
        backgroundColor,
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
  setBackgroundColor,
  setContent,
  setFontColor,
  setWidth,
  setHeight,
} = actions;

export default reducer;
