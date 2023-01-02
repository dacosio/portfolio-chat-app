import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/chats`,
          {}
          // {
          //   headers: {
          //     Authorization: `Bearer ${user.token}`,
          //   },
          // }
        );
        setChats(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    // fetchData();
    return () => {};
  }, []);

  return <div>I am the chat page</div>;
};

export default ChatPage;
