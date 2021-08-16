import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  theme: 'light',
  isLightTheme: true,
  width: 500,
  height: 500,
  rootLayer: {
    r: 46,
    g: 164,
    b: 79,
    a: 1,
  },
  imageLayer: {
    image: '',
    scale: 1,
    sizeX: 0,
    sizeY: 0,
    alignX: 'center',
    alignY: 'middle',
  },
  filterLayer: {
    backgroundColor: {
      r: 128,
      g: 128,
      b: 128,
      a: 0,
    },
  },
  textLayer: {
    selectedTextId: 1,
    texts: [
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
        position: 'center',
      },
    ],
  },
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
    setFilterBackgroundColor(state, { payload: { r, g, b } }) {
      return {
        ...state,
        filterLayer: {
          backgroundColor: {
            ...state.filterLayer.backgroundColor,
            r,
            g,
            b,
          },
        },
      };
    },
    setFilterBackgroundColorAlpha(state, { payload: alpha }) {
      return {
        ...state,
        filterLayer: {
          backgroundColor: {
            ...state.filterLayer.backgroundColor,
            a: alpha,
          },
        },
      };
    },
    setSelectedTextId(state, { payload: selectedTextId }) {
      return {
        ...state,
        textLayer: {
          ...state.textLayer,
          selectedTextId,
        },
      };
    },
    setTextContent(state, { payload: { index, content } }) {
      return {
        ...state,
        textLayer: {
          ...state.textLayer,
          texts: [
            ...state.textLayer.texts.slice(0, index),
            content,
            ...state.textLayer.texts.slice(index + 1),
          ],
        },
      };
    },
    setFontColor(state, { payload: texts }) {
      return {
        ...state,
        textLayer: {
          ...state.textLayer,
          ...texts,
        },
      };
    },
    setFontSize(state, { payload: texts }) {
      return {
        ...state,
        textLayer: {
          ...state.textLayer,
          ...texts,
        },
      };
    },
    setFontFamily(state, { payload: texts }) {
      return {
        ...state,
        textLayer: {
          ...state.textLayer,
          ...texts,
        },
      };
    },
    setFontWeight(state, { payload: texts }) {
      return {
        ...state,
        textLayer: {
          ...state.textLayer,
          ...texts,
        },
      };
    },
    setTextPosition(state, { payload: texts }) {
      return {
        ...state,
        textLayer: {
          ...state.textLayer,
          ...texts,
        },
      };
    },
    setPreviewColor(state, { payload: { r, g, b } }) {
      return {
        ...state,
        rootLayer: {
          ...state.rootLayer,
          r,
          g,
          b,
        },
      };
    },
  },
});

export const {
  setTheme,
  setImageUri,
  setUploadImage,
  setImageScale,
  setImageVerticalAlign,
  setImageHorizontalAlign,
  setFilterBackgroundColor,
  setFilterBackgroundColorAlpha,
  setSelectedTextId,
  setTextContent,
  setFontColor,
  setFontSize,
  setFontFamily,
  setFontWeight,
  setTextPosition,
  setBannerSize,
  setWidth,
  setHeight,
  setBannerRatios,
  setMainBackgroundColor,
  setMainNavBackgroundColor,
  setPreviewColor,
} = actions;

export default reducer;
