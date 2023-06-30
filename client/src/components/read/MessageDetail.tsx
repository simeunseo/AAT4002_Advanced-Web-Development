import HomeBtn from "./HomeBtn";
import { MessageServerData } from "@src/types/home";
import NextMessageBtn from "./NextMessageBtn";
import PrevMessageBtn from "./PrevMessageBtn";
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
  const [loading, setLoading] = useState(false);

  const getMessageDetail = async (id?: string) => {
    try {
      setLoading(true);
      const {
        data: { response },
      } = await readMessageData(id);
      setMessageData(response.message);
      setPrevMessageData(response.prevMessage);
      setNextMessageData(response.nextMessage);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMessageDetail(id);
  }, [id]);

  return (
    <St.MessageDetailContainer>
      <Title name={messageData?.name} />
      {loading ? (
        <St.LoadingMessage>로딩중...✤</St.LoadingMessage>
      ) : (
        <St.MessageBox>{messageData?.content}</St.MessageBox>
      )}

      <St.BtnWrapper>
        <PrevMessageBtn prevMessageId={prevMessageData?._id} />
        <HomeBtn />
        <NextMessageBtn nextMessageId={nextMessageData?._id} />
      </St.BtnWrapper>
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
  BtnWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 30rem;

    margin-top: 4rem;
  `,
  LoadingMessage: styled.span`
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
};
