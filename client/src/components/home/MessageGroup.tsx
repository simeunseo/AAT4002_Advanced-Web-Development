import { ReactComponent as LeafTail } from "@src/assets/image/leaf-tail.svg";
import Message from "./Message";
import { MessageGroupProps } from "@src/types/home";
import { styled } from "styled-components";
const MessageGroup = (props: MessageGroupProps) => {
  const { messageGroupData } = props;

  const messageList = messageGroupData.map((item, idx) => {
    return <Message key={item._id} messageData={item} idx={idx} />;
  });
  return (
    <St.MessageGroupContainer>
      {messageList}
      {messageList.length === 4 ? <St.LeafTail /> : undefined}
    </St.MessageGroupContainer>
  );
};

export default MessageGroup;

const St = {
  MessageGroupContainer: styled.div`
    position: relative;

    width: 7.2rem;
    height: 7.2rem;
  `,
  LeafTail: styled(LeafTail)`
    position: relative;
    left: 5rem;
    top: 5.1rem;
  `,
};
