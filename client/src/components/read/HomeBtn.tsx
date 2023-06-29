import { homeIcon } from "@src/assets/icon";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeBtn = () => {
  const navigate = useNavigate();

  const createClickHandler = () => {
    navigate(`/`);
  };
  return (
    <St.ConfirmBtn type="button" onClick={createClickHandler}>
      <img src={homeIcon} alt="홈 이동 버튼"></img>
    </St.ConfirmBtn>
  );
};

export default HomeBtn;

const St = {
  ConfirmBtn: styled.button`
    background: none;
    border: none;

    cursor: pointer;
  `,
};
