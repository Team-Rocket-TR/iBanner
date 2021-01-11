import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  color: "gray",
  topic: "",
};

const { actions, reducer } = createSlice({
  name: "app",
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
  },
});

export const { setColor, setTopic } = actions;

export default reducer;
