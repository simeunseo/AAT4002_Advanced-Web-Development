import { MessageProps } from "@src/types/home";
import { styled } from "styled-components";
const Message = (props: MessageProps) => {
  const {
    idx,
    messageData: { _id, name, content, __v },
  } = props;
  const imgIdx = idx % 4;
  let absoluteTop = 0;
  let absoluteLeft = 0;

  switch (imgIdx) {
    case 0:
      absoluteLeft = 1.8;
      break;
    case 1:
      absoluteTop = 1.8;
      break;
    case 2:
      absoluteLeft = 3.6;
      absoluteTop = 1.8;
      break;
    case 3:
      absoluteTop = 3.8;
      absoluteLeft = 1.8;
      break;
  }
  return (
    <St.MessageContainer absoluteTop={absoluteTop} absoluteLeft={absoluteLeft}>
      <img src={`/src/assets/image/leaf${imgIdx}.svg`} alt="클로버 한잎"></img>
    </St.MessageContainer>
  );
};

export default Message;

const St = {
  MessageContainer: styled.div<{ absoluteTop: number; absoluteLeft: number }>`
    position: absolute;
    top: ${(props) => props.absoluteTop}rem;
    left: ${(props) => props.absoluteLeft}rem;
  `,
};