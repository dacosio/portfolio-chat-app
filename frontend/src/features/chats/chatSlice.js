import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  chats: [],
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    modifyChats: (state, action) => {
      state.chats = [action.payload, ...state];
    },
  },
});

export const { modifyChats } = chatSlice.actions;

export const selectChat = (state) => state.chats;

export default chatSlice.reducer;
