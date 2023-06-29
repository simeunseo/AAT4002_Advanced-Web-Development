import { leftIcon } from "@src/assets/icon";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { useNavigate } from "react-router-dom";

const PrevMessageBtn = ({ prevMessageId }: { prevMessageId?: string | null }) => {
  const navigate = useNavigate();

  const createClickHandler = () => {
    prevMessageId && navigate(`/message/${prevMessageId}`);
  };
  return (
    <St.ConfirmBtn type="button" onClick={createClickHandler}>
      <img src={leftIcon} alt="이전 게시글 이동 버튼"></img>
    </St.ConfirmBtn>
  );
};

export default PrevMessageBtn;

const St = {
  ConfirmBtn: styled.button`
    padding: 1.2rem 1.8rem;

    background: white;
    border: 0.3rem solid ${theme.colors.primary};
    border-radius: 50%;

    cursor: pointer;
  `,
};
