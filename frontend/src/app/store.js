import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import selectedChatReducer from "../features/selectedChat/selectedChatSlice";
import chatReducer from "../features/chats/chatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    selectedChat: selectedChatReducer,
    chats: chatReducer,
  },
});
