import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{filterState: boolean}>`
    body {
        background: #FEFEFE;
        overflow-x: hidden;
        overflow-y: ${props => props.filterState ? 'hidden' : 'auto'};
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;