import Message from "./Message";
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

  const messageList = messageData.map((item, idx) => {
    return <Message key={idx} messageData={item} />;
  });

  return <div>{messageList}</div>;
};

export default Messages;
