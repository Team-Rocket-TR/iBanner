import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  color: 'gray',
  topic: '',
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
    setTopic(state, { payload: topic }) {
      return {
        ...state,
        topic,
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
  setColor, setTopic, setWidth, setHeight,
} = actions;

export default reducer;
