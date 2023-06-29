import { ReactComponent as DeclineIcon } from "@src/assets/icon/decline.svg";
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
      <DeclineIcon />
    </St.DeclineBtn>
  );
};

export default DeclineBtn;

const St = {
  DeclineBtn: styled.button`
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
};
