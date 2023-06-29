import { ReactComponent as ConfirmIcon } from "@src/assets/icon/confirm.svg";
import { confirmIcon } from "@src/assets/icon";
import { createMessage } from "@src/utils/axios/create";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { useNavigate } from "react-router-dom";

const ConfirmBtn = ({ name, content }: { name: string; content: string }) => {
  const navigate = useNavigate();

  const createClickHandler = () => {
    createMessage({
      name: name,
      content: content,
    });
    navigate(`/`);
  };
  return (
    <St.ConfirmBtn type="button" onClick={createClickHandler}>
      <ConfirmIcon />
    </St.ConfirmBtn>
  );
};

export default ConfirmBtn;

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
};
