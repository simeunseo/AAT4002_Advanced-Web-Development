import { ReactComponent as Leaf0 } from "@src/assets/image/leaf0.svg";
import { ReactComponent as Leaf1 } from "@src/assets/image/leaf1.svg";
import { ReactComponent as Leaf2 } from "@src/assets/image/leaf2.svg";
import { ReactComponent as Leaf3 } from "@src/assets/image/leaf3.svg";
import { Link } from "react-router-dom";
import { MessageProps } from "@src/types/home";
import { styled } from "styled-components";
import theme from "@src/styles/theme";

const Message = (props: MessageProps) => {
  const {
    idx,
    messageData: { _id, name },
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
      <St.HoverText>From. {name}</St.HoverText>
    </St.MessageContainer>
  );
};

export default Message;

const St = {
  MessageContainer: styled.div<{ absolutetop: number; absoluteleft: number }>`
    position: absolute;
    top: ${(props) => props.absolutetop}rem;
    left: ${(props) => props.absoluteleft}rem;
    &:hover > div {
      opacity: 1;
    }
  `,
  HoverText: styled.div`
    position: absolute;
    width: max-content;
    padding: 0.5rem;
    top: -10%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: ${theme.colors.primary};
    background-color: white;
    border: 2px solid ${theme.colors.primary};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
    ${theme.fonts.Body1}
  `,
};
