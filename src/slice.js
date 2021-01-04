import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  topic: '',
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    ...initialState,
  },
  reducers: {
    setTopic(state, { payload: topic }) {
      return {
        ...state,
        topic,
      };
    },
  },
});

export const {
  setTopic,
} = actions;

export default reducer;
