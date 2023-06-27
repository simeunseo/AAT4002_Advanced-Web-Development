import { DefaultTheme, css } from "styled-components";

const colors = {
  primary: "#98E044",
};

const fonts = {
  Head1: css`
    font-family: "LINESeedKR-Bd";
    font-size: 2rem;
    font-weight: 700;
  `,
  Body1: css`
    font-family: "LINESeedKR-Bd";
    font-size: 1.6;
    font-weight: 700;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
