import { createSlice } from "@reduxjs/toolkit";
// import { dataSchema, metaData, template } from "src/utils/template";

const initialState = {
  template: {},
  resume: {},
  metaData: {},
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    setTemplateData: (state, action) => {
      const { template } = action.payload;
      state.template = template;
    },
    setResumeData: (state, action) => {
      const { resume } = action.payload;
      state.resume = resume;
      state.metaData = resume.metaData; //initial
    },
    updateResumeMetaData: (state, action) => {
      const { metaData } = action.payload;
      state.metaData = metaData;
    },
  },
});

export const { setTemplateData, setResumeData, updateResumeMetaData } =
  builderSlice.actions;
const builderReducer = builderSlice.reducer;
export default builderReducer;
