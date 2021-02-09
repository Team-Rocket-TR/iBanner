import { createGlobalStyle } from 'styled-components';

const LightTheme = createGlobalStyle`
  #mainHeader {
    background-color: #FFFFFF;
  }
  #mainArticle {
    background-color: #F0F0F0;
  }
  #mainNav {
    background-color: #c7c7c7;
  }
  #mainNav a[download$=".png"] {
    background-color: #3F8237;
  }
  #mainNav a[download$=".png"]:hover {
      background-color: #1A3616;
  }
`;

export default LightTheme;
