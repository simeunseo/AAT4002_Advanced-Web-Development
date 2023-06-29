import { styled } from "styled-components";
import theme from "@src/styles/theme";

const Title = ({ name }: { name?: string }) => {
  return <St.Title>From. {name}</St.Title>;
};

export default Title;

const St = {
  Title: styled.header`
    margin: 3.5rem;
    margin-bottom: 3rem;
    padding: 1.4rem;

    text-align: center;

    color: white;

    ${theme.fonts.Head1};
  `,
};
