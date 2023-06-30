import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import MessageGroup from "./MessageGroup";
import { MessageServerData } from "@src/types/home";
import { getMessageData } from "@src/utils/axios/home";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { toastOpenState } from "@src/states/toastOpenState";
import { totalNumState } from "@src/states/totalNumState";
import { useEffect } from "react";
import { useState } from "react";

const Messages = () => {
  const [messageData, setMessageData] = useState<MessageServerData[]>([]);
  const setTotalNum = useSetRecoilState(totalNumState);
  const [toastOpen, setToastOpen] = useRecoilState(toastOpenState);

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

  useEffect(() => {
    setTotalNum(messageData.length);
  }, [messageData]);

  const messageGroupData = [];
  const groupSize = 4;

  for (let i = 0; i < messageData.length; i += groupSize) {
    messageGroupData.push(messageData.slice(i, i + groupSize));
  }

  const messageGroupList = messageGroupData.map((item, idx) => {
    return <MessageGroup key={idx} messageGroupData={item} />;
  });

  const notify = () => toast("행운을 빌어요!");
  if (toastOpen) {
    notify();
    setTimeout(() => {
      setToastOpen(false);
    }, 2000);
  }

  return (
    <>
      {toastOpen && <St.ToastContainer position="bottom-center" pauseOnHover autoClose={1000} limit={1} />}
      <St.MessagesContainer>{messageGroupList}</St.MessagesContainer>
    </>
  );
};

export default Messages;

const St = {
  MessagesContainer: styled.main`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 0 4.5rem;
    margin-bottom: 3rem;
    width: 36.6rem;
  `,
  ToastContainer: styled(ToastContainer)`
    --toastify-text-color-light: white;
    --toastify-color-progress-light: none;
    --toastify-toast-width: 20rem;
    & .Toastify__toast {
      box-shadow: none;
      text-align: center;
      ${theme.fonts.Head1}
      margin-top:1rem;
      border-radius: 0;
      background: ${theme.colors.primary};
    }
    & button {
      display: none;
    }
  `,
};
