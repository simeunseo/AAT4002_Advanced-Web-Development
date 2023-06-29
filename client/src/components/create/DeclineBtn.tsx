import { declineIcon } from "@src/assets/icon";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { useNavigate } from "react-router-dom";

const DeclineBtn = () => {
  const navigate = useNavigate();

  const createClickHandler = () => {
    navigate(`/`);
  };
  return (
    <St.DeclineBtn type="button" onClick={createClickHandler}>
      <img src={declineIcon} alt="게시글 작성 취소 버튼"></img>
    </St.DeclineBtn>
  );
};

export default DeclineBtn;

const St = {
  DeclineBtn: styled.button`
    padding: 1.2rem 1.4rem;

    background: white;
    border: 0.3rem solid ${theme.colors.primary};
    border-radius: 50%;

    cursor: pointer;
  `,
};
