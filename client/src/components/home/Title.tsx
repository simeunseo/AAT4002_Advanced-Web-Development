import { Link } from "react-router-dom";
import { styled } from "styled-components";
import theme from "@src/styles/theme";
const Title = () => {
  return (
    <St.TitleContainer>
      <St.Title>✤ 은서네 깃허브 방명록 ✤</St.Title>

      <St.Subtitle>
        <Link to="https://github.com/simeunseo">@simeunseo</Link>
      </St.Subtitle>
    </St.TitleContainer>
  );
};

export default Title;

const St = {
  TitleContainer: styled.div`
    margin: 3.5rem;
    margin-bottom: 5rem;
    padding: 2rem;

    text-align: center;

    background: white;
    border: 0.3rem solid ${theme.colors.primary};
  `,
  Title: styled.header`
    ${theme.fonts.Head1};
    color: ${theme.colors.primary};
  `,
  Subtitle: styled.h2`
    margin-top: 1.5rem;

    ${theme.fonts.Body1};
    color: ${theme.colors.primary};

    cursor: pointer;

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
    }

    &:hover {
      text-decoration: underline;
    }
  `,
};
