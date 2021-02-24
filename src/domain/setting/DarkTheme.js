import { createGlobalStyle } from 'styled-components';

const DarkTheme = createGlobalStyle`
  body, button {
    color: #fefefe;
  }
  #mainHeader {
    background-color: #222831;
  }
  #mainArticle {
    background-color: #393e46;
  }
  #mainNav {
    background-color: gray;
  }
  #mainNav button[name="download"] {
    background-color: #364f6b;
  }
  #mainNav button[name="download"]:hover {
    background-color: #52616b;
  }
  .react-switch-bg {
    text-align: center;
  }
`;

export default DarkTheme;
