import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
    box-sizing: inherit;
    }

    *{
    font-size: 14px;
    padding: 0;
    margin: 0
    }

    html {
    box-sizing: border-box;
    font-family:'Open Sans';
    }

    body {
    background-color: ${({theme})=> theme.bodyBackgroundColor};
    color: ${({theme})=>theme.text}
    }

    h1,h2,h3 {
    font-family: 'Raleway'
    }
`
export default GlobalStyles