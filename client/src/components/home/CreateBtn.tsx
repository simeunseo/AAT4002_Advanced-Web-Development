import { ReactComponent as CreateIcon } from "@src/assets/icon/create.svg";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import theme from "@src/styles/theme";

const CreateBtn = () => {
  return (
    <St.CreateBtn type="button">
      <Link to="/create">
        <CreateIcon />
      </Link>
    </St.CreateBtn>
  );
};

export default CreateBtn;

const St = {
  CreateBtn: styled.button`
    position: sticky;
    left: calc(100vw - 10rem);
    bottom: 4rem;

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
