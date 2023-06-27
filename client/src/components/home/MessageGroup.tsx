import Message from "./Message";
import { MessageGroupProps } from "@src/types/home";
import { styled } from "styled-components";
const MessageGroup = (props: MessageGroupProps) => {
  const { messageGroupData } = props;
  console.log(messageGroupData);
  const messageList = messageGroupData.map((item, idx) => {
    return <Message key={item._id} messageData={item} idx={idx} />;
  });
  return <St.MessageGroupContainer>{messageList}</St.MessageGroupContainer>;
};

export default MessageGroup;

const St = {
  MessageGroupContainer: styled.div`
    position: relative;

    width: 7.2rem;
    height: 7.2rem;
  `,
};
