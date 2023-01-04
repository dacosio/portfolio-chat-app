import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  user: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo")) : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, register, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
