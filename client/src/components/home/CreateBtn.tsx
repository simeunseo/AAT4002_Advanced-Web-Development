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
    left: calc(100vw - 10rem);
    @media screen and (min-width: 500px) {
      left: 27.8rem;
    }
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
