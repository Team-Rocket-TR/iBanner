import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  theme: 'light',
  isLightTheme: true,
  canvasRef: null,
  width: '500',
  height: '500',
  backgroundImage: '',
  backgroundColor: {
    r: 128,
    g: 128,
    b: 128,
    a: 1,
  },
  content: '',
  fontSize: '24',
  fontColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
  fontStyle: 'BMDOHYEON',
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    ...initialState,
  },
  reducers: {
    setTheme(state, { payload: { theme, isLightTheme } }) {
      return {
        ...state,
        theme,
        isLightTheme,
      };
    },
    setCanvasRef(state, { payload: canvasRef }) {
      return {
        ...state,
        canvasRef,
      };
    },
    setBannerSize(state, { payload: { name, value } }) {
      return {
        ...state,
        [name]: value,
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
    setBannerRatios(state, { payload: { width, height } }) {
      return {
        ...state,
        width,
        height,
      };
    },
    setBackgroundColor(state, { payload: { r, g, b } }) {
      return {
        ...state,
        backgroundColor: {
          ...state.backgroundColor,
          r,
          g,
          b,
        },
      };
    },
    setAlpha(state, { payload: alpha }) {
      return {
        ...state,
        backgroundColor: {
          ...state.backgroundColor,
          a: alpha,
        },
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
    setFontColor(state, { payload: fontColor }) {
      return {
        ...state,
        fontColor,
      };
    },
    setFontSize(state, { payload: fontSize }) {
      return {
        ...state,
        fontSize,
      };
    },
    setFontStyle(state, { payload: fontStyle }) {
      return {
        ...state,
        fontStyle,
      };
    },
  },
});

export const {
  setTheme,
  setCanvas,
  setCanvasRef,
  setBackgroundColor,
  setAlpha,
  setBackgroundImage,
  setContent,
  setFontColor,
  setFontSize,
  setFontStyle,
  setBannerSize,
  setWidth,
  setHeight,
  setBannerRatios,
  setMainBackgroundColor,
  setMainNavBackgroundColor,
} = actions;

export default reducer;
