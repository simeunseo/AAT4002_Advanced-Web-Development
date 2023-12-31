import { GlobalStyle } from "./styles/globalStyle";
import { RecoilRoot } from "recoil";
import Router from "./components/Router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
