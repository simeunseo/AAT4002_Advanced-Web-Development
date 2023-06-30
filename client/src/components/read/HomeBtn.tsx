import { ReactComponent as HomeIcon } from "@src/assets/icon/home.svg";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HomeBtn = () => {
  return (
    <Link to="/">
      <St.ConfirmBtn type="button">
        <HomeIcon />
      </St.ConfirmBtn>
    </Link>
  );
};

export default HomeBtn;

const St = {
  ConfirmBtn: styled.button`
    width: 5.4rem;
    height: 5.4rem;

    background: none;
    border: none;

    cursor: pointer;
  `,
};
