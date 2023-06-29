import { Link } from "react-router-dom";
import { rightIcon } from "@src/assets/icon";
import { styled } from "styled-components";
import theme from "@src/styles/theme";

const NextMessageBtn = ({ nextMessageId }: { nextMessageId?: string | null }) => {
  return (
    <St.ConfirmBtnContainer>
      {nextMessageId === undefined ? (
        <St.ConfirmBtn type="button">
          <img src={rightIcon} alt="다음 게시글 이동 버튼"></img>
        </St.ConfirmBtn>
      ) : (
        <Link to={`/message/${nextMessageId}`}>
          <St.ConfirmBtn type="button">
            <img src={rightIcon} alt="다음 게시글 이동 버튼"></img>
          </St.ConfirmBtn>
        </Link>
      )}
      {nextMessageId === undefined ? <span>마지막</span> : undefined}
    </St.ConfirmBtnContainer>
  );
};

export default NextMessageBtn;

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
