import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
