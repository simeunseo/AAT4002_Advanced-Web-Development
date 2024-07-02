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
import { MY_REPLY } from "./constants";
import { ReactComponent as NoticeIcon } from "@src/assets/icon/notice.svg";

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

  const replyData = MY_REPLY.find((item) => item._id === messageData?._id);

  return (
    <St.MessageDetailContainer>
      <Title name={messageData?.name} />
      {loading ? (
        <St.LoadingMessage>로딩중...✤</St.LoadingMessage>
      ) : (
        <>
          <St.MessageBox>{messageData?.content}</St.MessageBox>
          {replyData && (
            <>
              <St.ReplyTitle>
                <St.StyledNoticeIcon />
                주인장 심은서의 답장
              </St.ReplyTitle>
              <St.ReplyBox>{replyData.reply}</St.ReplyBox>
            </>
          )}
        </>
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
    height: 30rem;
    padding: 2.5rem;

    border: 0.3rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    background: white;

    resize: none;
    ${theme.fonts.Body1}
    line-height: 2.5rem;
    overflow-y: scroll;
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
    height: 30rem;
    padding: 2.5rem;

    border: 0.3rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    background: white;

    resize: none;
    ${theme.fonts.Body1}
    overflow-y:scroll;
  `,
  ReplyBox: styled.section`
    width: 30rem;
    height: 10rem;
    padding: 2.5rem;

    border: 0.3rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    background: white;

    resize: none;
    ${theme.fonts.Body1}
    line-height: 2.5rem;
    overflow-y: scroll;
  `,
  ReplyTitle: styled.h2`
    width: 30rem;
    margin-bottom: 1rem;
    margin-top: 5rem;
    ${theme.fonts.Body1}
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
  `,
  StyledNoticeIcon: styled(NoticeIcon)`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
  `,
};
