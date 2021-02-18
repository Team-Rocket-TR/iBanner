import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  theme: 'light',
  canvasRef: null,
  backgroundColor: {
    r: 128,
    g: 128,
    b: 128,
    a: 1,
  },
  backgroundImage: '',
  content: '',
  fontSize: '24',
  fontColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
  width: '500',
  height: '500',
  bannerSize: {
    width: '',
    height: '',
  },
  isLightTheme: true,
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    ...initialState,
  },
  reducers: {
    setTheme(state, { payload: theme }) {
      return {
        ...state,
        theme,
      };
    },
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
    setLightTheme(state, { payload: isLightTheme }) {
      return {
        ...state,
        isLightTheme,
      };
    },
    changeCustomSize(state, { payload: { name, value } }) {
      return {
        ...state,
        bannerSize: {
          ...state.bannerSize,
          [name]: value,
        },
      };
    },
  },
});

export const {
  setTheme,
  setCanvasRef,
  setBackgroundColor,
  setAlpha,
  setBackgroundImage,
  setContent,
  setFontSize,
  setFontColor,
  setWidth,
  setHeight,
  setWidthHeight,
  setMainBackgroundColor,
  setMainNavBackgroundColor,
  setLightTheme,
  changeCustomSize,
} = actions;

export default reducer;
