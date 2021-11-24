import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed', sans-serif;  
  padding: 0.5em 2em;

  @media screen and (max-width: 800px) {
    padding: 0.5em 1em;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;