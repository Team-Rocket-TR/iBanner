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

    h1 { font-weight: 600; font-size: 2em; }
    h2 { font-weight: 500; font-size: 1.8em; }
    h3 { font-weight: 500; font-size: 1.6em; }
    h4 { font-weight: 400; font-size: 1.4em; }
    h5 { font-weight: 400; font-size: 1.2em; }
    
    a { text-decoration: none; color: inherit; }

    label[for] { display: none; }

    hr { margin: 1.5em 0; }

    header, footer, article {
        padding: 1.2em;
    }

    #app {
        display: grid;
        grid-template-areas:
            "header header"
            "article nav";
        grid-template-rows: 60px 1fr;
        grid-template-columns: 1fr minmax(360px, 25%);
        height: inherit;
    }
    #app > header { grid-area: header; }
    #app > article { grid-area: article; overflow-x: auto; }
    #app > nav { grid-area: nav; }

    #mainHeader {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }
    #mainArticle {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }
    #mainNav {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        color: #FFFFFF;
    }
    #mainNav section:first-child {
        padding: 1.2em;
    }
    #mainNav section:last-child {
        position: sticky;
        bottom: 0;
        z-index: 9;
    }
    #mainNav a[download$=".png"] {
        display: flex;
        justify-content: center;
        padding: 1em;
        font-size: 1.2em;
    }
    #mainNav a[download$=".png"]:hover {
    }

    @media all and (max-width: 768px) {
        body { overflow-y: hidden; }
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
            width: 100%;
       }
    }
`;

export default GlobalStyles;
