import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
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
    setBackgroundColor(state, { payload: color }) {
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
  setBackgroundColor,
  setContent,
  setFontColor,
  setWidth,
  setHeight,
} = actions;

export default reducer;
