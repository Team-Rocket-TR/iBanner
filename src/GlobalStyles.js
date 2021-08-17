import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

import GlobalFonts from './GlobalFonts';

const GlobalStyles = createGlobalStyle`
    ${reset};
    ${GlobalFonts}
    * {
        box-sizing: boerder-box;
    }
    
    body {
        font-family: BMDOHYEON, Roboto, sans-serif, -apple-system;
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

    hr { margin: 1.5em 0; }

    header, footer, article { padding: 1.2em; }

    #app {
        display: grid;
        grid-template-areas:
            "header header"
            "article nav";
        grid-template-rows: 60px 1fr;
        grid-template-columns: 1fr 80px;
        height: inherit;
    }
    #app > header { grid-area: header; }
    #app > article { grid-area: article; overflow-x: auto; margin-right: 340px; }
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
    }
    #mainNav section:first-child {
        padding: 1.2em;
    }
    #mainNav section:last-child {
        position: sticky;
        bottom: 0;
        z-index: 9;
    }
    #mainNav button[name="download"] {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1em;
        font-size: 1.2em;
        border: 0;
        cursor: pointer;
    }
    #mainNav button[name="download"]:hover {
        
    }

    // Preview Canvas Color
    .canvas-container { background-color: #FFFFFF; }

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

    #sponsor {
        width: 15em;
    }

    #sponsorText {
        padding-left: 1em;
    }

    #iBanner_logo {
        width: 64px;
    }

    #github-logo {
        width: 1.5em;
    }

    #contributors_info {
        padding: 0 1em 0 1em;
    }
    a:first-child {
        padding: 0 3em 0 1em;
    }
`;

export default GlobalStyles;
