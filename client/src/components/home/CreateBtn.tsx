import { ReactComponent as CreateIcon } from "@src/assets/icon/create.svg";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import theme from "@src/styles/theme";

const CreateBtn = () => {
  return (
    <Link to="/create">
      <St.CreateBtn type="button">
        <CreateIcon />
      </St.CreateBtn>
    </Link>
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

    &:hover {
      path {
        fill: white;
      }
      background: ${theme.colors.primary};
    }
  `,
};
