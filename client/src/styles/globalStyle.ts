import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
#root, body, html {
    display: flex;
    justify-content: center;
    
    width:100%;
    height: 100vh;
    margin: 0 auto;
    background:#F4F4F4;
}
html {
    font-size: 62.5%;
}
* {
    box-sizing: border-box;
}`;
