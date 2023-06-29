import { MessageServerData } from "@src/types/home";
import RightBtn from "./RightBtn";
import Title from "./Title";
import { readMessageData } from "@src/utils/axios/read";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const MessageDetail = () => {
  const id = useParams().id;
  const [messageData, setMessageData] = useState<MessageServerData>();
  const [prevMessageData, setPrevMessageData] = useState<MessageServerData>();
  const [nextMessageData, setNextMessageData] = useState<MessageServerData>();

  const getMessageDetail = async (id?: string) => {
    try {
      const {
        data: { response },
      } = await readMessageData(id);
      setMessageData(response.message);
      setPrevMessageData(response.prevMessage);
      setNextMessageData(response.nextMessage);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMessageDetail(id);
  }, [id]);

  return (
    <St.MessageDetailContainer>
      <Title name={messageData?.name} />
      <St.MessageBox>{messageData?.content}</St.MessageBox>
      <RightBtn nextMessageId={nextMessageData?._id} />
    </St.MessageDetailContainer>
  );
};

export default MessageDetail;

const St = {
  MessageBox: styled.main`
    width: 30rem;
    height: 45rem;
    padding: 2.5rem;

    border: 0.3rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    background: white;

    resize: none;
    ${theme.fonts.Body1}
    overflow-y:scroll;
  `,
  MessageDetailContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `,
};
