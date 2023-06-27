import { styled } from "styled-components";
import theme from "@src/styles/theme";

const Title = () => {
  return <St.Title>환영합니다</St.Title>;
};

export default Title;

const St = {
  Title: styled.header`
    margin: 3.5rem;
    margin-bottom: 7rem;
    padding: 1.4rem;

    text-align: center;

    background: white;
    color: ${theme.colors.primary};
    border: 0.3rem solid ${theme.colors.primary};

    ${theme.fonts.Head1};
  `,
};
