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
    #app {
        display: grid;
        grid-template-areas:
            "header header"
            "article nav";
        grid-template-rows: 60px 1fr;
        grid-template-columns: 1fr 25%;
        grid-row-gap: 10px;
        grid-column-gap: 10px;
    }
    #app > header {
        grid-area: header;
    }
    #app > footer {
        grid-area: footer;
    }
    #app > article { 
        grid-area: article;      
    }
    #app > nav { 
        grid-area: nav; 
    }
    a {
        text-decoration: none;
        color: inherit;
    }
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
