import { ReactComponent as LeftIcon } from "@src/assets/icon/left.svg";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
const PrevMessageBtn = ({ prevMessageId }: { prevMessageId?: string | null }) => {
  return (
    <St.ConfirmBtnContainer>
      {prevMessageId === undefined ? (
        <St.ConfirmBtn type="button">
          <LeftIcon />
        </St.ConfirmBtn>
      ) : (
        <Link to={`/message/${prevMessageId}`}>
          <St.ConfirmBtn type="button">
            <LeftIcon />
          </St.ConfirmBtn>
        </Link>
      )}
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

    &:hover {
      path {
        stroke: white;
      }
      background: ${theme.colors.primary};
    }
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
