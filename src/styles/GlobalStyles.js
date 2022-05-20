import { createGlobalStyle } from 'styled-components';
import '@fontsource/pacifico'; // ----
import '@fontsource/truculenta'; //----
import '@fontsource/amita';
import '@fontsource/actor';

const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Actor", sans-serif;
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

ul {
    list-style-type: none;
    padding: 0;
}

.img {
    width: 100%;
    display: block;
    object-fit: cover;
}

.section {
    min-height: 100vh;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

`;

export default GlobalStyles;

// en section
// /* background-color: ${props => props.theme.text}; */

// yarn add @fontsource/open-sans // npm install @fontsource/open-sans

// import "@fontsource/open-sans"; // Defaults to weight 400 with normal variant.

// body {
//      font-family: "Open Sans", sans-serif;
//   }
// ==============
// BODY
// yarn add @fontsource/truculenta
// import "@fontsource/truculenta"
// body { font-family: "Truculenta", sans-serif; }
//
// TITLES ---- solo 400
// yarn add @fontsource/pacifico
// import "@fontsource/pacifico"
// body { font-family: "Pacifico", cursive; }
