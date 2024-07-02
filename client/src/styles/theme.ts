import { DefaultTheme, css } from "styled-components";

const colors = {
  primary: "#98E044",
  liner_primary: "linear-gradient(180deg, #98E044 0%, #EBF9DA 19.79%, #FFF 52.60%)",
};

const fonts = {
  Head1: css`
    font-family: "Gonggan";
    font-size: 2rem;
    font-weight: 700;
  `,
  Body1: css`
    font-family: "Gonggan";
    font-size: 1.6rem;
    font-weight: 500;
  `,
  Body2: css`
    font-family: "Gonggan";
    font-size: 1.4rem;
    font-weight: 400;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
