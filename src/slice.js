import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  canvasRef: null,
  backgroundColor: {
    r: 128, g: 128, b: 128, a: 1,
  },
  backgroundImage: '',
  content: '',
  fontSize: '24',
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
    setWidthHeight(state, { payload: { width, height } }) {
      return {
        ...state,
        width,
        height,
      };
    },
    setBackgroundColor(state, { payload: backgroundColor }) {
      return {
        ...state,
        backgroundColor,
      };
    },
    setBackgroundImage(state, { payload: backgroundImage }) {
      return {
        ...state,
        backgroundImage,
      };
    },
    setContent(state, { payload: content }) {
      return {
        ...state,
        content,
      };
    },
    setFontSize(state, { payload: fontSize }) {
      return {
        ...state,
        fontSize,
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
  setBackgroundImage,
  setContent,
  setFontSize,
  setFontColor,
  setWidth,
  setHeight,
  setWidthHeight,
} = actions;

export default reducer;
