import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  color: 'gray',
  content: '',
  width: '500',
  height: '500',
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    ...initialState,
  },
  reducers: {
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
  },
});

export const {
  setColor, setContent, setWidth, setHeight,
} = actions;

export default reducer;
