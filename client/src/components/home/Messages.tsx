import MessageGroup from "./MessageGroup";
import { MessageServerData } from "@src/types/home";
import { getMessageData } from "@src/utils/axios/home";
import { styled } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const Messages = () => {
  const [messageData, setMessageData] = useState<MessageServerData[]>([]);
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

  const messageGroupData = [];
  const groupSize = 4;

  for (let i = 0; i < messageData.length; i += groupSize) {
    messageGroupData.push(messageData.slice(i, i + groupSize));
  }

  const messageGroupList = messageGroupData.map((item, idx) => {
    return <MessageGroup key={idx} messageGroupData={item} />;
  });

  return <St.MessagesContainer>{messageGroupList}</St.MessagesContainer>;
};

export default Messages;

const St = {
  MessagesContainer: styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

    padding: 0 4.5rem;
  `,
};
