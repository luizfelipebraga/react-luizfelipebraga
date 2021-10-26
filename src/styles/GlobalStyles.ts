import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width : 100%;
        scroll-behavior: smooth;
        background-image: linear-gradient(91.18deg, #0d0d0e 32.63%, #141416 62.22%);
    }

    h1, h2, h3, h4, h5, span, button  {
        font-family: 'Inter', sans-serif;
    }

    a {
        cursor: pointer;
    }

    *, button, input {
        font-family: 'Inter', sans-serif;
        text-decoration: none;
    }

    ul {
        color: #000;
    }
`;