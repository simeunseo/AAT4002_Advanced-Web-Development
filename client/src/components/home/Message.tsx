import { ReactComponent as Leaf0 } from "@src/assets/image/leaf0.svg";
import { ReactComponent as Leaf1 } from "@src/assets/image/leaf1.svg";
import { ReactComponent as Leaf2 } from "@src/assets/image/leaf2.svg";
import { ReactComponent as Leaf3 } from "@src/assets/image/leaf3.svg";
import { Link } from "react-router-dom";
import { MessageProps } from "@src/types/home";
import { styled } from "styled-components";

const Message = (props: MessageProps) => {
  const {
    idx,
    messageData: { _id },
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
    <St.MessageContainer absolutetop={absoluteTop} absoluteleft={absoluteLeft}>
      <Link to={`message/${_id}`}>{{ 0: <Leaf0 />, 1: <Leaf1 />, 2: <Leaf2 />, 3: <Leaf3 /> }[imgIdx]}</Link>
    </St.MessageContainer>
  );
};

export default Message;

const St = {
  MessageContainer: styled.div<{ absolutetop: number; absoluteleft: number }>`
    position: absolute;
    top: ${(props) => props.absolutetop}rem;
    left: ${(props) => props.absoluteleft}rem;
  `,
};
