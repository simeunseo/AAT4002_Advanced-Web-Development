import { createIcon } from "@src/assets/icon";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { useNavigate } from "react-router-dom";

const CreateBtn = () => {
  const navigate = useNavigate();

  const createClickHandler = () => {
    navigate(`/create`);
  };
  return (
    <St.CreateBtn type="button" onClick={createClickHandler}>
      <img src={createIcon} alt="게시글 작성 버튼"></img>
    </St.CreateBtn>
  );
};

export default CreateBtn;

const St = {
  CreateBtn: styled.button`
    position: sticky;
    left: 5rem;
    margin-left: 28rem;
    margin-top: 5rem;
    padding: 1.2rem 1.5rem;

    background: white;
    border: 0.3rem solid ${theme.colors.primary};
    border-radius: 50%;

    cursor: pointer;
  `,
};
