import { createSlice } from "@reduxjs/toolkit";
import { dataSchema, metaData, template } from "src/utils/template";

const initialState = {
  defaultData: {
    dataSchema,
    metaData,
    template,
  },
  resume: {
    metaData: {},
  },
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    updateMetaData: (state, action) => {
      const { metaData } = action.payload;
      state.resume.metaData = metaData;
    },
  },
});

export const { updateMetaData } = builderSlice.actions;
const builderReducer = builderSlice.reducer;
export default builderReducer;
