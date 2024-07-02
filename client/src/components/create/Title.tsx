import { styled } from "styled-components";
import theme from "@src/styles/theme";

const Title = () => {
  return <St.Title>심은서에게 메시지 남기기</St.Title>;
};

export default Title;

const St = {
  Title: styled.header`
    margin: 3.5rem;
    margin-bottom: 3.5rem;
    padding: 1.4rem;

    text-align: center;

    color: white;

    ${theme.fonts.Head1};
  `,
};
