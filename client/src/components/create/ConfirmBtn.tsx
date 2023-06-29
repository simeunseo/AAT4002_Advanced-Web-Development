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
      <img src={confirmIcon} alt="게시글 작성 확인 버튼"></img>
    </St.ConfirmBtn>
  );
};

export default ConfirmBtn;

const St = {
  ConfirmBtn: styled.button`
    padding: 1.2rem 1.1rem;

    background: white;
    border: 0.3rem solid ${theme.colors.primary};
    border-radius: 50%;

    cursor: pointer;
  `,
};
