import { getMessageData } from "@src/utils/axios/home";
import { useEffect } from "react";
import { useState } from "react";
const Messages = () => {
  const [messageData, setMessageData] = useState([]);

  const getMessageList = async () => {
    try {
      const {
        data: { messages },
      } = await getMessageData();
      setMessageData(messages);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMessageList();
  }, []);

  console.log(messageData);
  return <div>Messages</div>;
};

export default Messages;
