import { createSlice } from "@reduxjs/toolkit";

const hash = window.location.hash;
const initialState = {
  activeSection: hash ? hash.replace("#", "") : "home",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      const { activeSection } = action.payload;
      state.activeSection = activeSection;
    },
  },
});

export const { setActiveSection } = navbarSlice.actions;
const navbarReducer = navbarSlice.reducer;
export default navbarReducer;
