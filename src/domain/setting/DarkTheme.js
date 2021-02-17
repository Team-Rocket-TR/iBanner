import { createGlobalStyle } from 'styled-components';

const DarkTheme = createGlobalStyle`
  #mainHeader {
    background-color: #222831;
  }
  #mainArticle {
    background-color: #393e46;
  }
  #mainNav {
    background-color: gray;
  }
  #mainNav a[download$=".png"] {
    background-color: #52616b;
  }
  #mainNav a[download$=".png"]:hover {
    background-color: #364f6b;
  }
  .react-switch-bg {
    text-align: center;
  }
`;

export default DarkTheme;
