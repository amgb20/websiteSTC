import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"
import "@fontsource/black-ops-one"
import "@fontsource/inknut-antiqua"




const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Black Ops One', sans-serif;
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0; 
}
a{
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;