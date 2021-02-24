import { createGlobalStyle } from 'styled-components';

const LightTheme = createGlobalStyle`
  body, button {
    color: #333333;
  }
  #mainHeader {
    background-color: #ecb399;
  }
  #mainArticle {
    background-color: #f9f3f0;
  }
  #mainNav {
    background-color: #dbc2c3;
  }
  #mainNav button[name="download"] {
    background-color: #f1b49b;
  }
  #mainNav button[name="download"]:hover {
    background-color:  #d8d3cd;
  }
  .react-switch-bg {
    text-align: center;
  }
`;

export default LightTheme;
