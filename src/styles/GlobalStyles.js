import { createGlobalStyle } from 'styled-components';
import '@fontsource/pacifico';
import '@fontsource/truculenta';

const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Sora', sans-serif;
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
    /* background-color: ${props => props.theme.text}; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

/*      */
/* VARS */
/*      */
html {
    --color-light: '#FCF6F4';
    --color-dark: '#36254e';
    --color-lightRgba: '252, 246, 244';
    --color-darkRgba: '54, 37, 78';

    --ff-title: "Pacifico", cursive;
    --ff-body: "Truculenta", sans-serif;

    --f-sizeTitle: calc(1em + 1vw);
    --f-sizeNormal: calc(0.6em + 1vw);

    --transition: all 0.3s ease;
}
`;

export default GlobalStyles;

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
