import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  color: 'gray',
  content: '',
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
  },
});

export const {
  setColor,
  setContent,
} = actions;

export default reducer;
