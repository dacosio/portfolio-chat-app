import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  selectedChat: null,
};

const selectedChatSlice = createSlice({
  name: "selectedChat",
  initialState,
  reducers: {
    newSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
});

export const { newSelectedChat } = selectedChatSlice.actions;

export const selectSelectedChat = (state) => state.selectedChat;

export default selectedChatSlice.reducer;
