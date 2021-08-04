import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  theme: 'light',
  isLightTheme: true,
  canvasRef: null,
  width: 500,
  height: 500,
  imageLayer: {
    image: '',
    scale: 1,
    sizeX: 0,
    sizeY: 0,
    alignX: 'center',
    alignY: 'middle',
  },
  backgroundColor: {
    r: 128,
    g: 128,
    b: 128,
    a: 1,
  },
  contentLayer: {
    selectedContentId: 1,
    contents: [
      {
        id: 1,
        content: '',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'normal',
        fontSize: 24,
        fontColor: {
          r: 255,
          g: 255,
          b: 255,
          a: 1,
        },
      },
    ],
  },
  content: '',
  fontSize: 24,
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
    setImageVerticalAlign(state, { payload: alignY }) {
      return {
        ...state,
        imageLayer: {
          ...state.imageLayer,
          alignY,
        },
      };
    },
    setImageHorizontalAlign(state, { payload: alignX }) {
      return {
        ...state,
        imageLayer: {
          ...state.imageLayer,
          alignX,
        },
      };
    },
    setSelectedContentId(state, { payload: selectedContentId }) {
      return {
        ...state,
        contentLayer: {
          ...state.contentLayer,
          selectedContentId,
        },
      };
    },
    setContent(state, { payload: { index, content } }) {
      return {
        ...state,
        contentLayer: {
          ...state.contentLayer,
          contents: [
            ...state.contentLayer.contents.slice(0, index),
            content,
            ...state.contentLayer.contents.slice(index + 1),
          ],
        },
      };
    },
    setFontColor(state, { payload: contents }) {
      return {
        ...state,
        contentLayer: {
          ...state.contentLayer,
          ...contents,
        },
      };
    },
    setFontSize(state, { payload: contents }) {
      return {
        ...state,
        contentLayer: {
          ...state.contentLayer,
          ...contents,
        },
      };
    },
    setFontFamily(state, { payload: contents }) {
      return {
        ...state,
        contentLayer: {
          ...state.contentLayer,
          ...contents,
        },
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
  setImageVerticalAlign,
  setImageHorizontalAlign,
  setSelectedContentId,
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
