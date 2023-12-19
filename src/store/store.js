import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";
import builderReducer from "./builderSlice";

export const store = configureStore({
  reducer: {
    navbarState: navbarReducer,
    builderState: builderReducer,
  },
});
