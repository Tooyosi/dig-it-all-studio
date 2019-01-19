import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;

  }
  :root{
    --color-brand-1: #c6430b;
  }
  body{
    margin: 0 2px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  img{
    width: 100%;
  }
`;

export default GlobalStyle;
