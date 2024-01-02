import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  config: {
    jobTitle: "",
    jobDescription: "",
  },
};

export const openAiSlice = createSlice({
  name: "openAi",
  initialState,
  reducers: {
    setAiConfig: (state, action) => {
      const { config } = action.payload;
      state.config = config;
    },
  },
});

export const { setAiConfig } = openAiSlice.actions;
const openAiReducer = openAiSlice.reducer;
export default openAiReducer;
