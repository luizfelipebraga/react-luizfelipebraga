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

    @media (max-width: 1360px) {

    }

    @media (max-width: 1100px) {
        html {
            font-size: 88%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 84%;
        }
    }
`;