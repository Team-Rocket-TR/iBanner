import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: boerder-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        height: 100vh;
        margin: 0;
        background-color: #F9F9F9;
    }
    header, footer, nav, article, section, aside {
        padding: 1.2em;
    }
    #app {
        display: grid;
        grid-template-areas:
            "header header"
            "article nav";
        grid-template-rows: 60px 1fr;
        grid-template-columns: 1fr 25%;
        height: inherit;
    }
    #app > header { grid-area: header; }
    #app > article { grid-area: article; }
    #app > nav { grid-area: nav; }

    #mainHeader {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        background-color: #FFFFFF;
    }
    #mainArticle {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        background-color: #F0F0F0;
    }
    #mainNav {
        color: #FFFFFF;
        background-color: #363636;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1 { font-weight: 600; font-size: 2em; }
    h2 { font-weight: 500; font-size: 1.8em; }
    h3 { font-weight: 500; font-size: 1.6em; }
    h4 { font-weight: 400; font-size: 1.4em; }
    h5 { font-weight: 400; font-size: 1.2em; }

    @media all and (max-width: 768px) {
        #app { 
            grid-template-areas: 
                "header"
                "article";
            grid-template-rows: 60px 1fr;  
            grid-template-columns: 1fr;
       }
       #app > nav {
           grid-area: none;
            position: absolute;
            top: 100vh;
       }
    }
`;

export default GlobalStyles;
