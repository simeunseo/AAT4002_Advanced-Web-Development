import { rightIcon } from "@src/assets/icon";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { useNavigate } from "react-router-dom";

const NextMessageBtn = ({ nextMessageId }: { nextMessageId?: string | null }) => {
  const navigate = useNavigate();

  const createClickHandler = () => {
    nextMessageId && navigate(`/message/${nextMessageId}`);
  };
  return (
    <St.ConfirmBtn type="button" onClick={createClickHandler}>
      <img src={rightIcon} alt="다음 게시글 이동 버튼"></img>
    </St.ConfirmBtn>
  );
};

export default NextMessageBtn;

const St = {
  ConfirmBtn: styled.button`
    padding: 1.2rem 1.1rem;

    background: white;
    border: 0.3rem solid ${theme.colors.primary};
    border-radius: 50%;

    cursor: pointer;
  `,
};
