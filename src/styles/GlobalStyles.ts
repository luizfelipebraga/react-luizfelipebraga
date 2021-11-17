import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --colorBg: #252525;
        --colorOutline: #ffffff;
        --colorOutlineFade: #4e5559;

        --widthMouse: 45px;
        --heightMouse: 75px;
        --borderMouse: 6px;

        --posMouse: 8px;
        --posText: 2px;

        --sizeTrackball: 5px;
        --posTrackball: 20px;
        --shrinkTrackball: 0.4;

        --animDuration: 5s;

        --bgGradient: var(--colorOutlineFade) linear-gradient(transparent 0%,transparent 50%,var(--colorOutline) 50%,var(--colorOutline) 100%);
    }
    
    html, body, #root {
        height: 100%;
        width : 100%;
        scroll-behavior: smooth;
    }

    h1, h2, h3, h4, h5, span, button, p  {
        font-family: 'Inter', sans-serif;
        color: #949494;
    }

    b, strong {
        color: #ffb464;
    }

    select, input, input:focus, textarea:focus, select:focus{
        border: 0;
        outline: none;
    }

    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }

    *, button, input {
        font-family: 'Inter', sans-serif;
        text-decoration: none;
    }

    ul {
        color: #000;
    }

    @media (min-width: 1600px) {
        html {
            font-size: 92%;
        }
    }

    @media (max-width: 1200px) {
        html {
            font-size: 89%;
        }
    }

    @media (max-width: 1024px) {
        html {
            font-size: 85%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 80%;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 78%;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 75%;
        }
    }
`;