import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  theme: 'light',
  isLightTheme: true,
  canvasRef: null,
  width: '500',
  height: '500',
  imageLayer: {
    image: '',
    sizeX: 0,
    sizeY: 0,
    scale: 1,
  },
  backgroundColor: {
    r: 128,
    g: 128,
    b: 128,
    a: 0,
  },
  content: '',
  fontSize: '24',
  fontColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'normal',
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
    setImageUri(state, { payload: image }) {
      return {
        ...state,
        imageLayer: {
          ...state.imageLayer,
          image,
        },
      };
    },
    setUploadImage(state, { payload: imageInfo }) {
      return {
        ...state,
        imageLayer: {
          ...state.imageLayer,
          ...imageInfo,
        },
      };
    },
    setImageScale(state, { payload: scale }) {
      return {
        ...state,
        imageLayer: {
          ...state.imageLayer,
          scale,
        },
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
    setFontFamily(state, { payload: fontFamily }) {
      return {
        ...state,
        fontFamily,
      };
    },
    setFontWeight(state, { payload: fontWeight }) {
      return {
        ...state,
        fontWeight,
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
  setImageUri,
  setUploadImage,
  setImageScale,
  setContent,
  setFontColor,
  setFontSize,
  setFontFamily,
  setFontWeight,
  setBannerSize,
  setWidth,
  setHeight,
  setBannerRatios,
  setMainBackgroundColor,
  setMainNavBackgroundColor,
} = actions;

export default reducer;
