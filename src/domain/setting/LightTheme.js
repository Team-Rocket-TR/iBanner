import { createGlobalStyle } from 'styled-components';

const LightTheme = createGlobalStyle`
  #mainHeader {
    background-color: #e0ece4;
  }
  #mainArticle {
    background-color: #f7f2e7;
  }
  #mainNav {
    background-color: #e4dede;
  }
  #mainNav a[download$=".png"] {
    background-color: #d8d3cd;
  }
  #mainNav a[download$=".png"]:hover {
      background-color: #797a7e ;
  }
`;

export default LightTheme;
