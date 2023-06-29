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
    <St.ConfirmBtnContainer>
      <St.ConfirmBtn type="button" onClick={createClickHandler}>
        <img src={leftIcon} alt="이전 게시글 이동 버튼"></img>
      </St.ConfirmBtn>
      {prevMessageId === undefined ? <span>첫번째</span> : undefined}
    </St.ConfirmBtnContainer>
  );
};

export default PrevMessageBtn;

const St = {
  ConfirmBtn: styled.button`
    width: 5.4rem;
    height: 5.4rem;

    background: white;
    border: 0.3rem solid ${theme.colors.primary};
    border-radius: 50%;

    cursor: pointer;
  `,
  ConfirmBtnContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    ${theme.fonts.Body1}
    color:${theme.colors.primary}
  `,
};
