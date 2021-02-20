import { createGlobalStyle } from 'styled-components';

const LightTheme = createGlobalStyle`
  #mainHeader {
    background-color: #ecb399;
  }
  #mainArticle {
    background-color: #f9f3f0;
  }
  #mainNav {
    background-color: #dbc2c3;
  }
  #mainNav a[download$=".png"] {
    background-color: #d8d3cd;
  }
  #mainNav a[download$=".png"]:hover {
    background-color: #f1b49b ;
  }
  .react-switch-bg {
    text-align: center;
  }
`;

export default LightTheme;
