import { Link } from "react-router-dom";
import { homeIcon } from "@src/assets/icon";
import { styled } from "styled-components";

const HomeBtn = () => {
  return (
    <Link to="/">
      <St.ConfirmBtn type="button">
        <img src={homeIcon} alt="홈 이동 버튼"></img>
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
