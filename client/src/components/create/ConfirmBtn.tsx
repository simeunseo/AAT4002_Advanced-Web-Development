import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";

import { ReactComponent as ConfirmIcon } from "@src/assets/icon/confirm.svg";
import { createMessage } from "@src/utils/axios/create";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
import { toastOpenState } from "@src/states/toastOpenState";
import { totalNumState } from "@src/states/totalNumState";
import { useNavigate } from "react-router-dom";

const ConfirmBtn = ({ name, content }: { name: string; content: string }) => {
  const navigate = useNavigate();
  const [totalNum, setTotalNum] = useRecoilState(totalNumState);
  const setToastOpen = useSetRecoilState(toastOpenState);

  const createClickHandler = () => {
    const notifyContentInput = () => toast("내용을 입력해주세요!");
    const notifyNameInput = () => toast("이름을 입력해주세요!");

    if (content == "") {
      notifyContentInput();
    } else if (name == "") {
      notifyNameInput();
    } else {
      createMessage({
        name: name,
        content: content,
      });
      setTotalNum(totalNum + 1);

      navigate(`/`);
      if ((totalNum + 1) % 4 === 0) {
        setToastOpen(true);
      }
    }
  };

  return (
    <>
      <St.ToastContainer position="top-center" pauseOnHover autoClose={1000} limit={1} />
      <St.ConfirmBtn type="button" onClick={createClickHandler}>
        <ConfirmIcon />
      </St.ConfirmBtn>
    </>
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
  ToastContainer: styled(ToastContainer)`
    --toastify-text-color-light: white;
    --toastify-color-progress-light: none;
    --toastify-toast-width: 26rem;
    & .Toastify__toast {
      box-shadow: none;
      text-align: center;
      ${theme.fonts.Head1}
      margin-top:1rem;
      border-radius: 0;
      background: ${theme.colors.primary};
    }
    & button {
      display: none;
    }
  `,
};
