import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0;
  cursor: pointer;

  a { 
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MouseText = styled.span`
  margin-top: 20px;
  font-family: 'Inter', sans-serif;
  letter-spacing: 12px;
  text-indent: 12px;
  color: var(--colorOutline);
  animation: colorText var(--animDuration) ease-out infinite, nudgeText var(--animDuration) ease-out infinite;
`;

export const Mouse = styled.div`
  background: var(--bgGradient);
  position: relative;
  width: var(--widthMouse);
  height: var(--heightMouse);
  background-size: 100% 100%;
  border-radius: 100px;
  background-size: 225%;
  animation: colorSlide var(--animDuration) linear infinite, nudgeMouse var(--animDuration) ease-out infinite;

  &:before, &:after {
    content: "";
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: auto;
  }

  &:before {
    width: var(--widthMouse) - var(--borderMouse);
    height: var(--heightMouse) - var(--borderMouse);
    background-color: var(--colorBg);
    border-radius: 100px;
  }

  &:after {
    background-color: var(--colorOutline);
    width: var(--sizeTrackball);
    height: var(--sizeTrackball);
    border-radius: 100%;
    animation: trackBallSlide var(--animDuration) linear infinite;
  }

  @keyframes colorSlide { 
    0% { background-position: 0% 100%; }
    20% { background-position: 0% 0%; }
    21% { background-color: var(--colorOutlineFade); }
    29.99% { 
      background-color: var(--colorOutline);
      background-position: 0% 0%;
    }
    30% { 
      background-color: var(--colorOutlineFade);
      background-position: 0% 100%;
    }
    50% { background-position: 0% 0%; }
    51% { background-color: var(--colorOutlineFade); }
    59.99% { 
      background-color: var(--colorOutline);
      background-position: 0% 0%;
    }
    60% { 
      background-color: var(--colorOutlineFade);
      background-position: 0% 100%;
    }
    80% { background-position: 0% 0%; }
    81% { background-color: var(--colorOutlineFade); }
    89.99%, 100% { background-color: var(--colorOutline); }
  }

  @keyframes trackBallSlide {
    0% {
      opacity: 1;
      transform: scale(1) translateY(var(--posTrackball));
    }
    6% { 
      opacity: 1;
      transform: scale(0.9) translateY(var(--posTrackball/4));
    }
    14% {
      opacity: 0;
      transform: scale(var(--shrinkTrackball)) translateY(var(--posTrackball*2));
    }
    15%, 19% {
      opacity: 0;
      transform: scale(var(--shrinkTrackball)) translateY(var(--posTrackball));
    }
    28%, 29.99% {
      opacity: 1;
      transform: scale(1) translateY(var(--posTrackball));
    }
    30% {
      opacity: 1;
      transform: scale(1) translateY(var(--posTrackball));
    }
    36% { 
      opacity: 1;
      transform: scale(0.9) translateY(var(--posTrackball/4));
    }
    44% {
      opacity: 0;
      transform: scale(var(--shrinkTrackball)) translateY(var(--posTrackball*2));
    }
    45%, 49% {
      opacity: 0;
      transform: scale(var(--shrinkTrackball)) translateY(var(--posTrackball));
    }
    58%, 59.99% {
      opacity: 1;
      transform: scale(1) translateY(var(--posTrackball));
    }
    60% {
      opacity: 1;
      transform: scale(1) translateY(var(--posTrackball));
    }
    66% { 
      opacity: 1;
      transform: scale(0.9) translateY(var(--posTrackball/4));
    }
    74% {
      opacity: 0;
      transform: scale(var(--shrinkTrackball)) translateY(var(--posTrackball*2));
    }
    75%, 79% {
      opacity: 0;
      transform: scale(var(--shrinkTrackball)) translateY(var(--posTrackball));
    }
    88%, 100% {
      opacity: 1;
      transform: scale(1) translateY(var(--posTrackball));
    }
  }

  @keyframes nudgeMouse {
    0% { transform: translateY(0); }
    20% { transform: translateY(var(--posMouse)); }
    30% { transform: translateY(0); }
    50% { transform: translateY(var(--posMouse)); }
    60% { transform: translateY(0); }
    80% { transform: translateY(var(--posMouse)); }
    90% { transform: translateY(0); }
  }

  @keyframes nudgeText {
    0% { transform: translateY(0); }
    20% { transform: translateY(var(--posText)); }
    30% { transform: translateY(0); }
    50% { transform: translateY(var(--posText)); }
    60% { transform: translateY(0); }
    80% { transform: translateY(var(--posText)); }
    90% { transform: translateY(0); }
  }

  @keyframes colorText { 
    21% { color: var(--colorOutlineFade); }
    30% { color: var(--colorOutline); }
    51% { color: var(--colorOutlineFade); }
    60% { color: var(--colorOutline); }
    81% { color: var(--colorOutlineFade); }
    90% { color: var(--colorOutline); }
  }
`;

