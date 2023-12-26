import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";
import builderReducer from "./builderSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    navbarState: navbarReducer,
    builderState: builderReducer,
    userState: userReducer,
  },
});
