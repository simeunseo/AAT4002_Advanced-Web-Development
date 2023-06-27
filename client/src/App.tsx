import { GlobalStyle } from "./styles/globalStyle";
import Router from "./components/Router";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <St.Container>
        <Router />
      </St.Container>
    </ThemeProvider>
  );
}

export default App;

const St = {
  Container: styled.div`
    width: 100vw;
    height: 100%;

    background: ${theme.colors.liner_primary};
  `,
};
