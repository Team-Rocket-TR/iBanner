import { createGlobalStyle } from 'styled-components';

const DarkTheme = createGlobalStyle`
  #mainHeader {
    background-color: black;
  }
  #mainArticle {
    background-color: gray;
  }
  #mainNav {
    background-color: gray;
  }
  #mainNav a[download$=".png"] {
    background-color: yellow;
  }
  #mainNav a[download$=".png"]:hover {
      background-color: pink;
  }
`;

export default DarkTheme;
