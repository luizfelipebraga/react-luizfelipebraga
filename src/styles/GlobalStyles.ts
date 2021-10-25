import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100vh;
        overflow-x: hidden;
        width : 100%;
        font-size: 1rem;
        scroll-behavior: smooth;
    background-image: linear-gradient(91.18deg, #0d0d0e 32.63%, #141416 62.22%);

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